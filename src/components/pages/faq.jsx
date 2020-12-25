import React, {Component} from 'react';
import Breadcrumb from "../common/breadcrumb";

class Faq extends Component {

    constructor (props) {
        super (props)
        this.state={
            navItem1:true,
            navItem2:false,
            navItem3:false,
            navItem4:false,
            navItem5:false,
            navItem6:false,
        }
    }

    render (){


        return (
            <div>
                <Breadcrumb title={'Faq'}/>
                
                
                {/*Dashboard section*/}
                <section className="faq-section section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="accordion theme-accordion" id="accordionExample">
                                    <div className="card">
                                        <div className="card-header" id="headingOne">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link" type="button" data-toggle="collapse"
                                                        data-target="#collapseOne" aria-expanded={this.state.navItem1?'true':'false'}
                                                        aria-controls="collapseOne" onClick={()=>this.setState({navItem1:!this.state.navItem1})}>
                                                    অর্ডার করার কয়দিনের মধ্যে পণ্য ডেলিভারী পাবো?
                                                </button>
                                            </h5>
                                        </div>

                                        {this.state.navItem1?<div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                                             data-parent="#accordionExample">
                                            <div className="card-body">
                                                <p>সাধারণত আপনার অর্ডারটি এপ্রুভ হওয়ার ১৫-২০ কার্যদিবসের মধ্যে পণ্য ডেলিভারী পাবেন। কিছু কিছু ক্ষেত্রে এর আগেও পাওয়া সম্ভব।

                                                </p> 
                                            </div>
                                        </div>:''}
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingTwo">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" type="button"
                                                        data-toggle="collapse" data-target="#collapseTwo"
                                                        aria-expanded={this.state.navItem2?'true':'false'} aria-controls="collapseTwo"
                                                        onClick={()=>this.setState({navItem2:!this.state.navItem2})}>
                                                    পণ্য কি আপনাদের অফিস থেকে নিতে হবে নাকি কুরিয়ারের ব্যবস্থা আছে?
                                                </button>
                                            </h5>
                                        </div>
                                        {this.state.navItem2?<div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo"
                                             data-parent="#accordionExample">
                                            <div className="card-body">
                                                <p> হুম। আমরা এস এ পরিবহন,সুন্দরবন কুরিয়ার সার্ভিসের মাধ্যমে মাল সর্বত্র বাংলাদেশে আপনার উল্লেখিত ঠিকানায় পোঁছে দিয়ে থাকি। তবে আপনি চাইলে আমাদের অফিস থেকেও নিতে পারেন।</p>
                                            </div>
                                        </div>:''}
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingThree">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" type="button"
                                                        data-toggle="collapse" data-target="#collapseThree"
                                                        aria-expanded={this.state.navItem3?'true':'false'} aria-controls="collapseThree"
                                                        onClick={()=>this.setState({navItem3:!this.state.navItem3})}>
                                                    আপনারা কি প্রি-অর্ডার বেসিস কাজ করেন?
                                                </button>
                                            </h5>
                                        </div>
                                        {this.state.navItem3?<div id="collapseThree" className="collapse show" aria-labelledby="headingThree"
                                             data-parent="#accordionExample">
                                            <div className="card-body">
                                                <p>জী, আমরা সাধারণত প্রি-অর্ডার বেসিসেই কাজ করে থাকি। তবে আপনার একান্ত পারসোনাল কোন মতামত থাকলে আমাদের প্রতিনিধির সাথে সরাসরি যোগাযোগ করতে পারেন।  </p>
                                            </div>
                                        </div>:''}
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingFour">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" type="button"
                                                        data-toggle="collapse" data-target="#collapseFour"
                                                        aria-expanded={this.state.navItem4?'true':'false'} aria-controls="collapseFour"
                                                        onClick={()=>this.setState({navItem4:!this.state.navItem4})}>
                                                   কেন আপনাদেরকে বিশ্বাস করবো?
                                                </button>
                                            </h5>
                                        </div>
                                        {this.state.navItem4?
                                        <div id="collapseFour" className="collapse show" aria-labelledby="headingFour"
                                             data-parent="#accordionExample">
                                            <div className="card-body">
                                                <p> আমাদের রয়েছে কর্পোরেট অফিস, আউটলেট এবং ওয়্যার হাউজ। যার ঠিকানা আমাদের ওয়েবসাইট এবং ফেসবুক পেজে দেওয়া হয়েছে, আপনি চাইলে আমাদের অফিসে আসতে পারেন।</p>
                                            </div>
                                        </div>:''}
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingFive">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" type="button"
                                                        data-toggle="collapse" data-target="#collapseFive"
                                                        aria-expanded={this.state.navItem5?'true':'false'} aria-controls="collapseFive"
                                                        onClick={()=>this.setState({navItem5:!this.state.navItem5})}>
                                                    আমার পেমেন্ট ইনফরমেশন কি সুরক্ষিত? 
                                                </button>
                                            </h5>
                                        </div>
                                        {this.state.navItem5?<div id="collapseFive" className="collapse show" aria-labelledby="headingFive"
                                             data-parent="#accordionExample">
                                            <div className="card-body">
                                                <p>জী। আপনার পেমেন্ট ইনফরমেশন সম্পূর্ণ ভাবে সিকিউর। একমাত্র আপনি ব্যতীত তা আর সবার কাছে হিডেন।(আমাদের এডমিনিস্ট্রেটিভ মেম্বারদের কাছেও)</p>
                                            </div>
                                        </div>:''}
                                    </div>  
                                    <div className="card">
                                        <div className="card-header" id="headingSix">
                                            <h5 className="mb-0"> 
                                                <button className="btn btn-link collapsed" type="button"
                                                        data-toggle="collapse" data-target="#collapseSix"
                                                        aria-expanded={this.state.navItem6?'true':'false'} aria-controls="collapseSix"
                                                        onClick={()=>this.setState({navItem6:!this.state.navItem6})}>
                                                   পণ্য যদি ভাঙ্গা,ডিফারেন্ট কালার ইত্যাদি হয় তাহলে কি রিফান্ড ক্লেইম করতে পারবো?
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseSix" className={this.state.navItem6?"collapse show":"collapse"} aria-labelledby="headingSix"
                                             data-parent="#accordionExample">
                                            <div className="card-body">
                                                <p>অবশ্যই পারবেন। এ বিষয়ে বিস্তারিত জানতে আমাদের রিটার্ন এন্ড রিফান্ড পলিসি দেখুন।</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default Faq