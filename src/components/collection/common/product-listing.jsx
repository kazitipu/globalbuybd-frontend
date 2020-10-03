import React, {Component} from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';


import { getTotal, getCartProducts } from '../../../reducers'
import { addToCart, addToWishlist, addToCompare,getAllProductsFirestore } from '../../../actions'
import {getVisibleproducts} from '../../../services';
import ProductListItem from "./product-list-item";
import {auth,addCartItemTofirestore,addWishlistTofirestore,getAllFirestoreProducts} from '../../../firebase/firebase.utils'

class ProductListing extends Component {

    constructor (props) {
        super (props)

        this.state = { limit: 5, hasMoreItems: true };

    }

   
    componentDidMount = async()=> {
        const productsArray = await getAllFirestoreProducts()
        this.props.getAllProductsFirestore(productsArray)
       
    }

    componentWillMount(){
        this.fetchMoreItems();
    }

    fetchMoreItems = () => {
       
        // a fake async api call
        setTimeout(() => {
            this.setState({
                limit: this.state.limit + 5
            });
        }, 3000);
        if (this.state.limit > 200) {
            this.setState({ hasMoreItems: true });
            return;
        }

    }

    addToReduxAndFirestoreCart =(product,qty)=>{
        const {addToCart} = this.props;
        auth.onAuthStateChanged(async(userAuth)=>await addCartItemTofirestore(userAuth,product,qty));
        addToCart(product,qty)
    }

    addToReduxAndFirestoreWishlist =(product)=>{
        const {addToWishlist} = this.props;
        console.log(this.props)
        auth.onAuthStateChanged(async userAuth=> await addWishlistTofirestore(userAuth,product));
        addToWishlist(product)
    }

    render(){
        const {products, symbol, addToCompare} = this.props;
        return (
            <div>
                <div className="product-wrapper-grid">
                    <div className="container-fluid">
                        {products.length > 0 ?
                            <InfiniteScroll
                                dataLength={this.state.limit} //This is important field to render the next data
                                next={this.fetchMoreItems}
                                hasMore={this.state.hasMoreItems}
                                loader={<div className="loading-cls"></div>}
                                endMessage={
                                    <p className="seen-cls seen-it-cls">
                                        <b>Yay! You have seen it all</b>
                                    </p>
                                }
                            >
                                <div className="row">
                                    { products.slice(0, this.state.limit).map((product, index) =>
                                    // { productsList.map((product, index) =>
                                        <div className={`${this.props.colSize===3?'col-xl-3 col-md-6 col-grid-box':'col-lg-'+this.props.colSize}`} key={index}>
                                        <ProductListItem product={product} symbol={symbol}
                                                         onAddToCompareClicked={() => addToCompare(product)}
                                                         onAddToWishlistClicked={() => this.addToReduxAndFirestoreWishlist(product)}
                                                         onAddToCartClicked={()=>this.addToReduxAndFirestoreCart(product, 1)} key={index}/>
                                        </div>)
                                    }
                                </div>
                            </InfiniteScroll>
                            :
                            <div className="row">
                                <div className="col-sm-12 text-center section-b-space mt-5 no-found" >
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/empty-search.jpg`} className="img-fluid mb-4" />
                                    <h3>Sorry! Couldn't find the product you were looking For!!!    </h3>
                                    <p>Please check if you have misspelt something or try searching with other words.</p>
                                    <Link to={`${process.env.PUBLIC_URL}/`} className="btn btn-solid">continue shopping</Link>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state,ownProps) => ({
    products: state.data.products.filter(product=>product.availability === ownProps.match.params.id),
    symbol: state.data.symbol,
})

export default connect(
    mapStateToProps, {addToCart, addToWishlist, addToCompare,getAllProductsFirestore}
)(ProductListing)