import React, {Component} from 'react';
import Breadcrumb from "../common/breadcrumb";
import {Helmet} from 'react-helmet'
class HowToOrder extends Component {

    constructor (props) {
        super (props)

    }

    render (){

        return (
            <div>
                 <Helmet>
                    <title>How to order</title>
                </Helmet>
                <Breadcrumb title={'How to Order'}/>
                {/*about section*/}
                <section className="about-page  section-b-space" style={{marginTop:'2rem'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12" style={{marginBottom:'3rem'}}>
                                <h2 style={{marginTop:'3rem',marginBottom:'1rem', textTransform:'none'}}>Before You Order</h2>
                                <p style={{marginBottom:'1rem'}}>In our country, some products are prohibited to import. Customs will not give the clearance of these products. So, we suggest our users not to order those products. Here, we are mentioning some of them but we suggest you learn more about what is prohibited in our country over the internet. We suggest not to order products like 
</p>
                                <p>
                                ⦁	Walkie-Talkie Set &#10060;<br/>
                                ⦁	Drone, Knife &#10060; <br/>
                                ⦁	Seeds  &#10060;<br/>
                                ⦁	Electric Cigarette/Vape  &#10060;<br/>
                                ⦁	Battery, Power Bank   &#10060;<br/>
                                ⦁	Heavyweight Product  &#10060;<br/>
                                ⦁	Sexual Products  &#10060;<br/>
                                ⦁	Fragile item etc  &#10060;<br/>
                                </p>
                                <h2 style={{marginTop:'3rem',marginBottom:'1rem', textTransform:'none'}}>কিভাবে অর্ডার করবেন?</h2>
                                <p style={{marginBottom:'1rem'}}> নিচে উল্লেখিত মাত্র সামান্য কিছু স্টেপ এর মাধ্যমে সম্পন্ন করে ফেলুন আপনার প্রথম অর্ডারটি </p>
                                <p style={{marginBottom:'1rem'}}> 
                                &#1023; প্রথমত আপনার পছন্দের যেকোন চাইনিজ আলিবাবা ওয়েবসাইট থেকে (1688,taobao,tmall) আপনার পছন্দের পণ্য বাছাই করুন। <br/>
                                &#1023; পণ্যের লিংকটি কপি করে আমাদের (Globalbuybd.com) সাইটের সার্চ বারতে পেস্ট করুন। <br />
                                &#1023; সার্চ বাটনে ক্লিকে করার সাথে সাথেই আপনি পেয়ে যাবেন আপনার কাঙ্ক্ষিত পণ্য। <br /> 
                                &#1023; এবার সাইজ,কালার,কোয়ান্টিটি সিলেক্ট করে পণ্যটি অর্ডার করুন।  <br /> 
                                &#1023; আমাদের উল্লেখিত পেমেন্ট সিস্টেম গুলোর যে কোন একটির মাধ্যমে পেমেন্ট সম্পন্ন করুন।   <br /> 
                                </p> 
                                <p style={{marginTop:'2rem', marginBottom:'1rem'}}>অর্ডার সম্পন্ন করতে অবশ্যই আপনার আমাদের সাইটে রেজিস্ট্রেশন করা লাগবে। এবং আপনি আপনার ইউজার ডেসবোর্ড থেকে সর্বদা আপনার অর্ডারটি ট্র্যাক করতে পারবেন। সাধারণত ১৫-২০ কার্যদিবসের মধ্যে আপনি আপনার অর্ডারকৃত পণ্যটি পেয়ে যাবেন।  ধন্যবাদ </p>

                            </div>
                        </div>
                    </div>
                </section> 
            </div>
        )
    }
}

export default HowToOrder;