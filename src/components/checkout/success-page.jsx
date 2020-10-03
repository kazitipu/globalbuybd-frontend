import React, {Component} from 'react';
import {connect} from 'react-redux'
import Modal from 'react-responsive-modal';
import './success-page.css';


class orderSuccess extends Component {

    constructor (props) {
        super (props)
        
        this.state = {
            open: false,
            image: ''
        }

    }
    onOpenModal = () => {
        this.setState({ open: true });
    };
    onCloseModal = () => {
        this.setState({ open: false });
    };

    render (){

        const {orderObj,symbol} = this.props;
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var current = new Date();
        var next5days = new Date(Date.now() + 5 * 86400000);
        let CheckDate = current.toLocaleDateString("en-US", options).toString()
        let deliveryDate = next5days.toLocaleDateString("en-US", options).toString()

        return (
            <div>
                {
                    orderObj?<div><section className="section-b-space dark-layout">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="success-text">
                                    <i className="fa fa-check-circle" aria-hidden="true"></i>
                                    <h2>thank you</h2>
                                    <p>Order Placed Successfully</p>
                                    <h3>Order Id:  {orderObj.orderId} </h3>
                                    <p>আগামী ৪৮ ঘন্টার মধ্যে পেমেন্ট সম্পন্ন করে আপনার অর্ডারটি কনফার্ম করুন।</p>
                               
                        
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className='success-page-payment-buttons'>
                        <button type='button' className='btn-solid btn' data-toggle="modal" data-target="#exampleModalCenter">Pay now 
                        </button>
                        <button type='button' className='btn-solid btn' onClick={() => this.props.history.push('/')}>Pay later
                        </button>
                </div>
{/* 
<button type="button" class="btn btn-primary"  >
  Launch demo modal
</button> */}



                 

                <section className="section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="product-order">
                                    <h3>your order details</h3>
                                    {orderObj.order.map((item, index) => {
                                    return <div className="row product-order-detail" key={index}>
                                                <div className="col-3">
                                                    <img src={item.pictures[0]} alt="" className="img-fluid" />
                                                </div>
                                                <div className="col-3 order_detail">
                                                    <div>
                                                        <h4>product name</h4>
                                                        <h5>{item.name}</h5>
                                                    </div>
                                                </div>
                                                <div className="col-3 order_detail">
                                                    <div>
                                                        <h4>quantity</h4>
                                                        <h5>{item.qty}</h5>
                                                    </div>
                                                </div>
                                                <div className="col-3 order_detail">
                                                    <div>
                                                        <h4>price</h4>
                                                        <h5>{symbol}{item.qty * item.salePrice}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                    })}
                                    <div className="total-sec">
                                        <ul>
                                            <li>subtotal <span>{symbol}{orderObj.sum}</span></li>
                                            <li>shipping <span>$0</span></li>
                                            <li>tax(GST) <span>$0</span></li>
                                        </ul>
                                    </div>
                                    <div className="final-total">
                                        <h3>total <span>{symbol}{orderObj.sum}</span></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="row order-success-sec">
                                    <div className="col-sm-6">
                                        <h4>summery</h4>
                                       
                                    </div>
                                    <div className="col-sm-6">
                                        <h4>shipping address</h4>
                                        <ul className="order-detail">
                                            <li>{orderObj.otherInformation.first_name}{orderObj.otherInformation.last_name}</li>
                                            <li>{orderObj.otherInformation.address}</li>
                                            <li>{orderObj.otherInformation.city}</li>
                                            <li>{orderObj.otherInformation.phone}</li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-12 payment-mode">
                                        <h4>payment method</h4>
                                        <p>Pay on Delivery (Cash/Card). Cash on delivery (COD) available. Card/Net
                                            banking acceptance subject to device availability.</p>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="delivery-sec">
                                            <h3>expected date of delivery</h3>
                                            <h2>{deliveryDate}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section> 
            
                </div>: <div>please make an order first</div>
                }
                
            </div>
            /* // :
            <section className="p-0">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="error-section">
                                <h1>404</h1>
                                <h2>page not found</h2>
                                <a href="index.html" className="btn btn-solid">back to home</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>   */
               
        )
    }
}

const mapStateToProps =(state)=>{
    return{
        orderObj:state.orders.orders[state.orders.orders.length - 1],
        symbol: state.data.symbol,
    }
}
export default connect(mapStateToProps)(orderSuccess)