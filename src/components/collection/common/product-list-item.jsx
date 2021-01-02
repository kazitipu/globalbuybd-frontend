import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-responsive-modal';


class ProductListItem extends Component {

    constructor(props){
        super(props)

        this.state = {
            open: false,
            stock: 'InStock',
            quantity: 1,
            image: ''
        }
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    onClickHandle(img) {
        this.setState({ image : img} );
    }

    minusQty = () => {
        if(this.state.quantity > 1) {
            this.setState({stock: 'InStock'})
            this.setState({quantity: this.state.quantity - 1})
        }
    }

    plusQty = () => {
        if(this.props.product.stock >= this.state.quantity) {
            this.setState({quantity: this.state.quantity+1})
        }else{
            this.setState({stock: 'Out of Stock !'})
        }
    }
    changeQty = (e) => {
        this.setState({ quantity: parseInt(e.target.value) })
    }


    render() {
        const {product, symbol, onAddToCartClicked, onAddToWishlistClicked, onAddToCompareClicked} = this.props;
        const {open} = this.state;

            let RatingStars = []
            for(var i = 0; i < product.rating; i++) {
                RatingStars.push(<i className="fa fa-star" key={i}></i>)
            }

        return (

                    <div className="product-box">
                        <div className="img-wrapper">
                            <div className="front">
                               {
                                   product.availability == 'searched-products'? <Link to={`${process.env.PUBLIC_URL}/searched-product/${product.id}`} ><img
                                   src={product.pictures[0]}
                                   className="img-fluid"
                                   alt="" /></Link>:<Link to={`${process.env.PUBLIC_URL}/product/${product.id}`} ><img
                                   src={product.pictures[0]}
                                   className="img-fluid"
                                   alt="" /></Link>
                               } 
                            </div>
                            <div className="cart-info cart-wrap">
                                {
                                    product.availability == 'searched-products'?<Link to={`${process.env.PUBLIC_URL}/searched-product/${product.id}`} title="Add to cart">
                                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                </Link>:<Link to={`${process.env.PUBLIC_URL}/product/${product.id}`} title="Add to cart">
                                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                </Link>
                                }
                                
                                <a onClick={onAddToWishlistClicked} title="Add to Wishlist" style={{cursor:'pointer'}}>
                                    <i className="fa fa-heart" aria-hidden="true"></i>
                                </a>
                                <a href="javascript:void(0)" data-toggle="modal"
                                   data-target="#quick-view"
                                   title="Quick View"
                                   onClick={this.onOpenModal}><i className="fa fa-search" aria-hidden="true"></i></a>
                                <Link to={`${process.env.PUBLIC_URL}/compare`} title="Compare" onClick={onAddToCompareClicked}>
                                    <i className="fa fa-refresh" aria-hidden="true"></i></Link>
                            </div>
                            {/* {product.variants?
                            <ul className="product-thumb-list">
                                {product.variants.map((vari, i) =>
                                    <li className={`grid_thumb_img ${(vari.images === this.state.image)?'active':''}`} key={i}>
                                        <a href="javascript:void(0)" title="Add to Wishlist">
                                            <img src={`${vari.images}`} onClick={() => this.onClickHandle(vari.images)} />
                                        </a>
                                    </li>)
                                }
                            </ul>:''} */}

                        </div>
                        <div className="product-detail">
                            <div>
                                <div className="rating">
                                    {RatingStars}
                                </div>
                                {product.availability =='searched-products'? <Link to={`${process.env.PUBLIC_URL}/searched-product/${product.id}`}>
                                    <h6>{product.name.slice(0,50)}</h6>
                                </Link>: <Link to={`${process.env.PUBLIC_URL}/product/${product.id}`}>
                                    <h6>{product.name.slice(0,50)}</h6>
                                </Link>}
                               
                                <h4>{symbol}{product.salePrice}
                            {product.price? <del><span className="money">{symbol}{product.price}</span></del>:''}</h4>
                            </div>
                        </div>
                    <Modal open={open} onClose={this.onCloseModal} center>
                            <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                                <div className="modal-content quick-view-modal">
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col-lg-6  col-xs-12">
                                                <div className="quick-view-img">
                                                    <img src={product.pictures[0]} alt="" className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 rtl-text">
                                                <div className="product-right">
                                                    <h2> {product.name} </h2>
                                                    <h3>{symbol}{product.salePrice}
                                                        <del><span className="money">{symbol}{product.price}</span></del>
                                                    </h3>
                                                    {/* {product.variants.length >0?
                                                    <ul className="color-variant">
                                                        {product.variants.map((vari, i) =>
                                                            <li className={vari.color} key={i} title={vari.color} onClick={() => this.onClickHandle(vari.images)}></li>)
                                                        }
                                                    </ul>:''} */}
                                                    <div className="border-product">
                                                        <h6 className="product-title">product details</h6>
                                                        <p>{product.shortDetails}</p>
                                                    </div>
                                                    <div className="product-description border-product">
                                                        {product.size?
                                                        <div className="size-box">
                                                            <ul>
                                                                {product.size.split(',').map((size, i) => {
                                                                    return <li key={i}><a href="#">{size}</a></li>
                                                                })}
                                                            </ul>
                                                        </div>:''}
                                                        <h6 className="product-title">quantity</h6>
                                                        <div className="qty-box">
                                                            <div className="input-group">
                                                              <span className="input-group-prepend">
                                                                <button type="button" className="btn quantity-left-minus" onClick={this.minusQty} data-type="minus" data-field="">
                                                                 <i className="fa fa-angle-left"></i>
                                                                </button>
                                                              </span>
                                                                <input type="text" name="quantity" value={this.state.quantity}  onChange={this.changeQty} className="form-control input-number" />
                                                                <span className="input-group-prepend">
                                                                <button type="button" className="btn quantity-right-plus" onClick={this.plusQty} data-type="plus" data-field="">
                                                                <i className="fa fa-angle-right"></i>
                                                                </button>
                                                               </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-buttons">
                                                        <button  className="btn btn-solid" onClick={onAddToWishlistClicked} >add to wishlist</button>
                                                        {product.availability =='searched-products'?<Link to={`${process.env.PUBLIC_URL}/searched-product/${product.id}`} className="btn btn-solid">view detail</Link>:<Link to={`${process.env.PUBLIC_URL}/product/${product.id}`} className="btn btn-solid">view detail</Link>}                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </Modal>
                </div>
        )
    }
}

export default ProductListItem;