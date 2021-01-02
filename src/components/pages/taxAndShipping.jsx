import React, {Component} from 'react';
import Breadcrumb from "../common/breadcrumb";
import {Helmet} from 'react-helmet'
class TaxAndShipping extends Component {

    constructor (props) {
        super (props)

    }

    render (){

        return (
            <div>
                 <Helmet>
                    <title>GlobalbuyBD | tax & shipping</title>
                </Helmet>
                <Breadcrumb title={'Tax and Shipping'}/>
                {/*about section*/}
                <section className="about-page  section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12" style={{marginBottom:'3rem'}}>
                                <h2 style={{marginTop:'3rem'}}>Globalbuy থেকে কিভাবে অর্ডার করবেন?</h2>
                                <p>GlobalBuyBd.com is an online wholesale marketplace in Bangladesh based on chinese alibaba,1688,taobao,aliexpress.com which brings the latest local and international goods to your doorstep in wholesale rate. You can purchase here any product of 1688,taobao in wholesale rate by Bangladeshi currency. We offer a wide selection of products from renowned brands with a promise of the fast, safe and easy online purchase experience. Wholesalecartbd.com offers Nationwide free shipping and returns! For your convenience we have several payment options including credit/debit cards, mobile banking, internet banking and cash on delivery.</p>
                                <h2 style={{marginTop:'3rem'}}>Why chose GlobalBuyBd?</h2>
                                <p><span>&#10003;</span> 24/7 online services for our customers via wechat,whatsapp, hotline and facebook. <br/>
                                <span>&#10003;</span> You just order leave the rest upon us. <br/>
                                <span>&#10003;</span> live tracking your product 24/7.<br/>
                                <span>&#10003;</span> 100% Secure payment with us. <br/>
                                <span>&#10003;</span> Choose from debit card/credit card, Mobile banking, Internet banking, EMI and Direct bank deposite<br/>
                                <span>&#10003;</span> Fastest product shipping with us. <br/>
                                <span>&#10003;</span> A convenient online purchase experience.<br/>
                                <span>&#10003;</span> The best wholesale prices and a vast variety of goods.<br/>
                                <span>&#10003;</span> Cheapest shipping charges around the country.<br/>
                                <span>&#10003;</span> 100 millions+ of products available.<br/>
                                <span>&#10003;</span> Claiming 100% refund facility.<br/> </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default TaxAndShipping;