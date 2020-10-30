import React, {Component} from 'react';
import {connect} from 'react-redux'
import Modal from 'react-responsive-modal';
import './payment.css';
import dutchBanglaLogo from '../../checkout/assets/dutch-bangla-rocket.png'
import bkashLogo from '../../checkout/assets/BKash-bKash-Logo.wine.svg'
import nogodLogo from '../../checkout/assets/Nagad-Logo.wine.svg'
import islamiBankLogo from '../../checkout/assets/islamiBank.png'
import dutchBanglaBankLogo from '../../checkout/assets/dutchBanlgaBank.png'
import cityBankLogo from '../../checkout/assets/city-bank.png'
import {uploadImage,uploadPayment} from '../../../firebase/firebase.utils'
import { toast  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';



class Payment extends Component {

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

    GenerateUniqueID =()=> {
        return ('0000'+(Math.random() * (100000 - 101) + 101)).slice(-5);
      }

    handleFormSubmit = async (event) =>{
        event.preventDefault()
        const {currentUser} = this.props
        if (this.state.mobileBanking){
            var payment ={
                orderId:this.props.orderObj.orderId,
                paymentVia:this.state.mobileBankingVia,
                paymentImage:this.state.pictures[0],
                amount: this.state.amount,
                paidAt: new Date(),
                paymentId:'pgb' + this.GenerateUniqueID(),
                paymentStatus:'unVerified'
            }
            await uploadPayment(payment,currentUser)
            this.setState({
                orderId:'',
                amount:0,
                pictures:[bkashLogo],
                file:'',
                mobileBankingVia:'Bkash',
                mobileBanking:true,
                bankDepositeVia:'City Bank',
               
            })
            toast.success('your payment will be verified by one of our admins')
            this.props.history.push('/pages/dashboard/my-orders')
            
        }else{
            var payment ={
                orderId:this.props.orderObj.orderId,
                paymentVia:this.state.bankDepositeVia,
                paymentImage:this.state.pictures[0],
                amount: this.state.amount,
                paidAt: new Date(),
                paymentId:'pgb' + this.GenerateUniqueID(),
                paymentStatus:'unVerified'
            }
            await uploadPayment(payment,currentUser)
            this.setState({
                orderId:'',
                amount:0,
                pictures:[bkashLogo],
                file:'',
                mobileBankingVia:'Bkash',
                mobileBanking:true,
                bankDepositeVia:'City Bank'
            })
            toast.success('your payment will be verified by one of our admins')
            this.props.history.push('/pages/dashboard/my-orders')
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
        var next5days = new Date(Date.now() + 15 * 86400000);
        let CheckDate = current.toLocaleDateString("en-US", options).toString()
        let deliveryDate = next5days.toLocaleDateString("en-US", options).toString()

        return (
            <div>
                {
                    orderObj?<div>    
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
                       <input className="form-control" name="orderId" value={orderObj.orderId} type="text" readOnly required />
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
<div className='payment-option 'onClick={this.handleBankDepositeClick}>Direct Bank Deposite</div>
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
                    <input className="form-control" name="orderId" value={orderObj.orderId} type="text" readOnly required />
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
                                                    <img src={item.colorUrl?item.colorUrl:item.pictures[0]} alt="" className="img-fluid" />
                                                </div>
                                                <div className="col-3 order_detail">
                                                    <div>
                                                        <h4>product name</h4>
                                                        <h5>{item.name}</h5>
                                                    </div>
                                                </div>
                                                <div className="col-3 order_detail" style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                                                    <div>
                                                        <h4>details</h4>
                                                    </div>
                                                    <div>quantity: {item.qty}</div>
                                                    {
                                                        item.color?<div style={{display:'flex',flexDirection:'column',marginTop:'1px'}}><div>color:</div><h5>{item.color}</h5></div>:''
                                                    }
                                                    {
                                                        item.sizeOrShipsFrom?<div style={{display:'flex',flexDirection:'column',marginTop:'1px'}}><div>sizeOrShipsFrom:</div><h5>{item.sizeOrShipsFrom}</h5></div>:''
                                                    }
                                                    
                                                </div>
                                                <div className="col-3 order_detail">
                                                    <div>
                                                        <h4>price</h4>
                                                        <h5>{symbol}{item.sum}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                    })}
                                    <div className="total-sec">
                                        <ul>
                                            <li>subtotal <span>{symbol}{orderObj.paymentStatus.total}</span></li>
                                            <li>Paid <span>Tk {orderObj.paymentStatus.paid}</span></li>
                                            <li>Due <span>Tk {orderObj.paymentStatus.due}</span></li>
                                        </ul>
                                    </div>
                                    <div className="final-total">
                                        <h3>total due <span>{symbol}{orderObj.paymentStatus.due}</span></h3>
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

const mapStateToProps =(state, ownProps)=>{
    return{
        currentUser:state.user.currentUser,
        orderObj:state.user.currentUser.ordersArray?state.user.currentUser.ordersArray.find(order=>order.orderId === ownProps.match.params.id):null,
        symbol: state.data.symbol,
    }
}
export default connect(mapStateToProps)(Payment)