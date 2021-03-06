import React, { Component } from 'react';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'

import { getTrendingCollection} from '../../../services'
import {Product4} from '../../../services/script'
import {addToCart,addToCompare,addToWishlist} from '../../../actions'
import ProductItem from './product-item';
import {addCartItemTofirestore,addWishlistTofirestore} from '../../../firebase/firebase.utils'
import {auth} from '../../../firebase/firebase.utils'
import './collection2.css'

class Collection extends Component {
    componentDidMount(){
        console.log(this.props)
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
        const {items, symbol, addToCompare, title, subtitle} = this.props;
        console.log(this.props)
        return (
            <div>
                {/*Paragraph*/}
                <section className="section-b-space j-box pets-box ratio_square">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="title1 title5">
                                    {subtitle?<h4>{subtitle}</h4>:''}
                                    <h2 className="title-inner1">{title}</h2>
                                    <hr role="tournament6" />
                                </div>
                                <Slider {...Product4} className="product-4 product-m no-arrow">
                                    { items.map((product, index ) =>
                                        <div key={index}>
                                            <ProductItem product={product} symbol={symbol}
                                                         onAddToCompareClicked={() => addToCompare(product)}
                                                         onAddToWishlistClicked={() => this.addToReduxAndFirestoreWishlist(product)}
                                                         onAddToCartClicked={() => this.addToReduxAndFirestoreCart(product, 1)} key={index}
                                                          />
                                        </div>)
                                    }
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    items: getTrendingCollection(state.data.products, ownProps.type),
    symbol: state.data.symbol,
    cartItems: state.cartList
})

export default connect(mapStateToProps,{addToWishlist,addToCart,addToCompare})(Collection)