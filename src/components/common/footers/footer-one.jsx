import React, {Component} from 'react';
import { Link} from 'react-router-dom';

import {SlideUpDown} from "../../../services/script"
import LogoImage from "../headers/common/logo"
import './footer-one.css'

class FooterOne extends Component {

    componentDidMount(){
        var contentwidth = window.innerWidth;
        if ((contentwidth) < 750) {
            SlideUpDown('footer-title');
        } else {
            var elems = document.querySelectorAll(".footer-title");
            [].forEach.call(elems, function(elemt) {
                let el = elemt.nextElementSibling;
                el.style = "display: block";
            });
        }
    }


    render () {

        return (
            <footer className="footer-light">
                <div className="light-layout">
                    <div className="container">
                        <section className="small-section border-section border-top-0">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="subscribe">
                                        <div>
                                            <h4>KNOW IT ALL FIRST!</h4>
                                            <p>Never Miss Anything From GlobalbuyBD By Signing Up To Our Newsletter. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <form className="form-inline subscribe-form">
                                        <div className="form-group mx-sm-3">
                                            <input type="text" className="form-control" id="exampleFormControlInput1"
                                                   placeholder="Enter your email"/>
                                        </div>
                                        <button type="submit" className="btn btn-solid">subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <section className="section-b-space light-layout">
                    <div className="container">
                        <div className="row footer-theme partition-f">
                            <div className="col-lg-4 col-md-6">
                                <div className="footer-title footer-mobile-title">
                                    <h4>about</h4>
                                </div>
                                <div className="footer-contant">
                                    <div className="footer-logo">
                                        <LogoImage logo={this.props.logoName} />
                                    </div>
                                    <p>শপিং করুন বিশ্বের যে কোন ই-কমার্স প্লাটফর্ম থেকে খুব সহজে
                                        GlobalbuyBD এর সাথে। আমরাই দিচ্ছি
                                        সবচেয়ে দ্রুত গতিতে পন্য ডেলিভারি দেওয়ার প্রতিশ্রুতি।
                                        ফেসবুক ফ্যান পেজে লাইক দিয়ে আমার সাথে থাকুন।
                                    </p> 
                                    <div className="footer-social">
                                        <ul>
                                        <li>                                    <a href='https://www.facebook.com/globalbuybdB2B/' target='_blank'><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href='https://plus.google.com/' target='_blank' ><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href='https://twitter.com' target='_blank'><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href='https://instagram.com'target='_blank'><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                                        </li>
                                                    <li>
                                                        <a href='https://rss.com/' target='_blank'><i className="fa fa-rss" aria-hidden="true"></i></a>
                                                    </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col offset-xl-1">
                                <div className="sub-title">
                                    <div className="footer-title">
                                        <h4>Shop with us</h4>
                                    </div>
                                    <div className="footer-contant">
                                        <ul>
                                            <li><Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`} >womens</Link></li>
                                            <li><Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`} >clothing</Link></li>
                                            <li><Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`} >accessories</Link></li>
                                            <li><Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`} >featured</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="sub-title">
                                    <div className="footer-title">
                                        <h4>why choose us</h4>
                                    </div>
                                    <div className="footer-contant">
                                        <ul>
                                            <li><a href="#">shipping & return</a></li>
                                            <li><a href="#">secure shopping</a></li>
                                            <li><a href="#">terms & conditions</a></li>
                                            <li><a href="#">refund policy</a></li>
                                            <li><a href="#">support</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="sub-title">
                                    <div className="footer-title">
                                        <h4>store information</h4>
                                    </div>
                                    <div className="footer-contant">
                                        <ul className="contact-list">
                                            <li><i className="fa fa-map-marker"></i>GlobalbuyBD,pritom zaman tower,level-10
                                            </li>
                                            <li><i className="fa fa-phone"></i>Call Us: +88-01620-327185</li>
                                            <li><i className="fa fa-envelope-o "></i>Email Us: <a
                                                href="#" className='style-email'>globalbuybd@gmail.com</a></li>
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="sub-footer ">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-md-6 col-sm-12">
                                <div className="footer-end">
                                    <p><i className="fa fa-copyright" aria-hidden="true"></i> 2020-2022 Globalbuybd.com. All rights reserved.</p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-6 col-sm-12">
                                <div className="payment-card-bottom">
                                    <ul>
                                        <li>
                                            <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/icon/visa.png`} alt="visacard" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/icon/mastercard.png`} alt="mastercard" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/icon/paypal.png`} alt="paypal" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/icon/american-express.png`} alt="amex" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/icon/discover.png`} alt="discover" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default FooterOne;