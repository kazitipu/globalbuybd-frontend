import React, {Component} from 'react';
import {connect} from 'react-redux'
import Modal from 'react-responsive-modal';
import './success-page.css';
import './index.css'
import dutchBanglaLogo from './assets/dutch-bangla-rocket.png'
import bkashLogo from './assets/BKash-bKash-Logo.wine.svg'
import nogodLogo from './assets/Nagad-Logo.wine.svg'
import islamiBankLogo from './assets/islamiBank.png'
import dutchBanglaBankLogo from './assets/dutchBanlgaBank.png'
import cityBankLogo from './assets/city-bank.png'
import {uploadImage,uploadPayment} from '../../firebase/firebase.utils'



class orderSuccess extends Component {

    constructor (props) {
        super (props)
        
        this.state = {
            open: false,
            image: '',
            orderId:'',
            amount:0,
            pictures:[bkashLogo],
            file:'',
            mobileBankingVia:'Bkash',
            mobileBanking:true,
            bankDepositeVia:'City Bank'
        }

    }
    onOpenModal = () => {
        this.setState({ open: true });
    };
    onCloseModal = () => {
        this.setState({ open: false });
    };

    _handleImgChange= async (e, i) => {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];
        const { pictures } = this.state;

        reader.onloadend = () => {
            pictures[i] = reader.result;
            this.setState({
                file: file,
                pictures,
            });
        }
        if (file){
            reader.readAsDataURL(file)
            const imgUrl =await uploadImage(file)
            pictures[i]  = imgUrl
            this.setState({
                pictures
            })
            console.log(pictures)
        }  
      
    }
    handleChange = (event) => {
        const {name,value} =event.target;
        this.setState({ [name]:value });
    }

    handleFormSubmit = async (event) =>{
        event.preventDefault()
        if (this.state.mobileBanking){
            var payment ={
                orderId:this.state.orderId,
                paymentVia:this.state.mobileBankingVia,
                paymentImage:this.state.pictures[0],
                amount: this.state.amount,
                paidAt: new Date()
            }
            await uploadPayment(payment)
            this.setState({
                orderId:'',
                amount:0,
                pictures:[bkashLogo],
                file:'',
                mobileBankingVia:'Bkash',
                mobileBanking:true,
                bankDepositeVia:'City Bank'
            })
            this.props.history.push('/')
        }else{
            var payment ={
                orderId:this.state.orderId,
                paymentVia:this.state.bankDepositeVia,
                paymentImage:this.state.pictures[0],
                amount: this.state.amount,
                paidAt: new Date()
            }
            await uploadPayment(payment)
            this.setState({
                orderId:'',
                amount:0,
                pictures:[bkashLogo],
                file:'',
                mobileBankingVia:'Bkash',
                mobileBanking:true,
                bankDepositeVia:'City Bank'
            })
            this.props.history.push('/')
        }
    }

    handleMobileBankingClick =()=>{
        this.setState({mobileBanking:true,})
    }
    handleBankDepositeClick =()=>{
        this.setState({mobileBanking:false})
    }


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
                
                
                
                <div className='payment-header'>
<h5>বিকাশ,রকেট,নগদ পেমেন্টের ক্ষেত্রে পেমেন্ট দিয়ে ট্রানজেকশনটির স্ক্রীনশট নিচে আপলোড করুন।সরাসরি ব্যংক ডিপোজিট এর ক্ষেত্রে আপনার জমার স্লিপের ছবি তুলে আপলোড করুন। ধন্যবাদ</h5>
<div className='logo-div'>
    <img src={bkashLogo} alt="" className="img-fluid payment-logo"/>
    <img src={dutchBanglaLogo} alt="" className="img-fluid payment-logo"/>
    <img src={nogodLogo} alt="" className="img-fluid payment-logo"/>
    <img src={islamiBankLogo} className="img-fluid payment-logo" alt=""/>
    <img src={dutchBanglaBankLogo} className="img-fluid payment-logo" alt=""/>
    <img src={cityBankLogo} className="img-fluid payment-logo" alt=""/>
</div>
</div>
{
    this.state.mobileBanking?
    <div className='payment-fullbox'>
    <div className='choose-options'>
   <div className='payment-option' onClick={this.handleMobileBankingClick}>Mobile Banking</div>
   <div className='payment-option not-selected'onClick={this. handleBankDepositeClick}>Direct Bank Deposite</div>
   </div>
   {/* <div className='payment-options'> */}
   <div className="row section-t-space payment-description">

       <div className="col-lg-6">
       <div className="stripe-section payment-box">
       <div className='successpage-table'>
           <div className='successpage-table-row'>
           <img src={bkashLogo}  alt="" className="img-fluid payment-image"/> &nbsp;<br/>
           <p>
               বিকাশ করুনঃ 01521503360 <br/>
                              (পার্সোনাল)
           </p>

           </div>
           <div  className='successpage-table-row'>
               <img src={dutchBanglaLogo}  alt="" className="img-fluid payment-image"/>  &nbsp;<br/>
           <p>
               রকেট নাম্বারঃ 01521503360 <br/>
                              (পার্সোনাল)
           </p>
           </div>
           <div className='successpage-table-row'>
           <img src={nogodLogo}  alt="" className="img-fluid payment-image"/> &nbsp; <br/>
           <p>
                নগদ নাম্বারঃ 01521503360 <br/>
                              (পার্সোনাল)
           </p>
           </div>
       </div>
       <div>
       <form onSubmit={this.handleFormSubmit}>
           <h3 className="checkout_class">Upload image and submit</h3>
               <div className="form-group mb-3 row">
                   <label className="col-xl-3 col-sm-4 mb-0">Order Id :</label>
                   <div className="col-xl-8 col-sm-7">
                       <input className="form-control" name="orderId" value={this.state.orderId} type="text" onChange={this.handleChange} required />
                   </div>
                   <div className="valid-feedback">Looks good!</div>
               </div>
               <div className="form-group mb-3 row">
                <label className="col-xl-3 col-sm-4 mb-0">Amount :</label>
                <div className="col-xl-8 col-sm-7">
                    <input className="form-control" name="amount" value={this.state.amount} type="number" onChange={this.handleChange} required />
                </div>
                <div className="valid-feedback">Looks good!</div>
            </div>
               <div className="form-group mb-3 row">
                                           <label className="col-xl-3 col-sm-4 mb-0" >Via :</label>
                                           <div className="col-xl-8 col-sm-7">
                                               <select className="form-control digits" id="exampleFormControlSelect1" name="mobileBankingVia" value={this.state.mobileBankingVia} onChange={this.handleChange}>
                                                   <option>Bkash</option>
                                                   <option>Rocket</option>
                                                   <option>Nagad</option>
                                               </select>
                                           </div>
                                       </div>
               <div className="box-input-file">
                   <input className="upload" type="file" onChange={(e) => this._handleImgChange(e, 0)} />
                   <img src={this.state.pictures[0]} style={{ width: 50, height: 50 }} />                                        
               </div>
           <button type='submit' className='btn-solid btn'>Submit</button>
       </form>
       </div>
       </div>
       </div>
   </div>
   </div>
   :
   <div className='payment-fullbox'>
 <div className='choose-options'>
<div className='payment-option not-selected' onClick={this.handleMobileBankingClick}>Mobile Banking</div>
<div className='payment-option 'onClick={this. handleBankDepositeClick}>Direct Bank Deposite</div>
</div>
{/* <div className='payment-options'> */}
<div className="row section-t-space payment-description">

    <div className="col-lg-6">
    <div className="stripe-section payment-box">
    <div className='successpage-table'>
        <div className='successpage-table-row'>
        <img src={cityBankLogo}  alt="" className="img-fluid payment-image"/><br/>
        <p>city Bank <br/>
           A/c No. 2302832452001 <br/>
           MD FAHIM <br/> 
           Forigen Exchange Branch
        </p>

        </div>
        <div  className='successpage-table-row'>
            <img src={dutchBanglaBankLogo}  alt="" className="img-fluid payment-image"/><br/>
            <p>
            Dutch Bangla Bank <br/>
            A/c No. 1911510090744 <br/>
            MD FAHIM <br/>
            Bijoy Nogor Branch
            </p>
        </div>
        <div  className='successpage-table-row'>
        <img src={islamiBankLogo}  alt="" className="img-fluid payment-image"/><br/>
        <p>
        Islami Bank Banladesh Ltd <br/>
        A/c No. 20502060201992604 <br/>
        MD FAHIM <br/>
        Paltan Branch
        </p>
        </div>
    </div>
    <div>
    <form onSubmit={this.handleFormSubmit}>
        <h3 className="checkout_class">Upload image and submit</h3>
            <div className="form-group mb-3 row">
                <label className="col-xl-3 col-sm-4 mb-0">Order Id :</label>
                <div className="col-xl-8 col-sm-7">
                    <input className="form-control" name="orderId" value={this.state.orderId} type="text" onChange={this.handleChange} required />
                </div>
                <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="form-group mb-3 row">
                <label className="col-xl-3 col-sm-4 mb-0">Amount :</label>
                <div className="col-xl-8 col-sm-7">
                    <input className="form-control" name="amount" value={this.state.amount} type="number" onChange={this.handleChange} required />
                </div>
                <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="form-group mb-3 row">
                                        <label className="col-xl-3 col-sm-4 mb-0" >Via :</label>
                                        <div className="col-xl-8 col-sm-7">
                                            <select className="form-control digits" id="exampleFormControlSelect1" name="bankDepositeVia" value={this.state.bankDepositeVia} onChange={this.handleChange}>
                                                <option>City Bank</option>
                                                <option>Dutch Bangla Bank</option>
                                                <option>Islami Bank</option>
                                            </select>
                                        </div>
                                    </div>
            <div className="box-input-file">
                <input className="upload" type="file" onChange={(e) => this._handleImgChange(e, 0)} />
                <img src={this.state.pictures[0]} style={{ width: 50, height: 50 }} />                                        
            </div>
        <button type='submit' className='btn-solid btn'>Submit</button>
    </form>
    </div>
    </div>
    </div>
</div>
</div>
}




                 

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