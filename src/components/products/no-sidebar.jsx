import React, {Component} from 'react';
import Slider from 'react-slick';
import '../common/index.scss';
import {connect} from "react-redux";


// import custom Components
import RelatedProduct from "../common/related-product";
import Breadcrumb from "../common/breadcrumb";
import DetailsWithPrice from "./common/product/details-price";
import DetailsTopTabs from "./common/details-top-tabs";
import { addToCart, addToCartUnsafe, addToWishlist,fetchSingleProduct } from '../../actions'
import ImageZoom from './common/product/image-zoom'
import SmallImages from './common/product/small-image'
import {auth,getSingleProduct,addCartItemTofirestore,addWishlistTofirestore} from '../../firebase/firebase.utils'




class NoSideBar extends Component {

    constructor() {
        super();
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount(){
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });

    }

    getSingleProduct =async() =>{
        const productObj = await getSingleProduct(this.props.match.params.id)
        this.props.fetchSingleProduct(productObj)
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
        const {symbol, item, addToCart, addToCartUnsafe, addToWishlist} = this.props

        if (!item){
            this.getSingleProduct()
        }
        
        
        var products = {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            fade: true
        };

        var productsnav = {
            slidesToShow: 4,
            swipeToSlide:true,
            arrows:false,
            dots:false,
            focusOnSelect: true
        };
        

        return (
            <div>

                {item?<Breadcrumb title={' Product / '+item.name} />:''}

                {/*Section Start*/}
                {(item)?
                <section >
                    <div className="collection-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 product-thumbnail">
                                    <Slider {...products} asNavFor={this.state.nav2} ref={slider => (this.slider1 = slider)} className="product-slick">
                                        {item.pictures.map((vari, index) =>
                                            <div key={index}>
                                                <ImageZoom image={vari} className="img-fluid image_zoom_cls-0" />
                                            </div>
                                        )}
                                    </Slider>
                                    <SmallImages item={item} settings={productsnav} navOne={this.state.nav1} />
                                </div>
                                <DetailsWithPrice symbol={symbol} item={item} navOne={this.state.nav1} addToCartClicked={this.addToReduxAndFirestoreCart} BuynowClicked={addToCartUnsafe} addToWishlistClicked={this.addToReduxAndFirestoreWishlist} />
                            </div>
                        </div>
                    </div>
                </section> : ''}
                {/*Section End*/}

                <section className="tab-product m-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-lg-12">
                                <DetailsTopTabs item={item} />
                            </div>
                        </div>
                    </div>
                </section>

                <RelatedProduct />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let productId = ownProps.match.params.id;
    return {
        item: state.data.products.find(el => el.id == productId),
        symbol: state.data.symbol
    }
}

export default connect(mapStateToProps, {addToCart, addToCartUnsafe, addToWishlist,fetchSingleProduct}) (NoSideBar);