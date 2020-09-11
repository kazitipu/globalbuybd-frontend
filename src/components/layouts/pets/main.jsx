import React, { Component } from 'react';
import {Helmet} from 'react-helmet'
import '../../common/index.scss';
import Slider from 'react-slick';
import {Link} from 'react-router-dom'

// Import custom components
import Collection from "./collection"
import LogoBlock from "../common/logo-block"
import BlogSection from "../common/blogsection";
import HeaderThree from "../../common/headers/header-three"
import FooterTwo from "../../common/footers/footer-two"
import ThemeSettings from "../../common/theme-settings"
import axios from 'axios'


class Pets extends Component {

    componentDidMount() {
        document.getElementById("color").setAttribute("href", `${process.env.PUBLIC_URL}/assets/css/color15.css` );
        console.log(this.props)
    //     axios({
    // "method":"GET",
    // "url":"https://ali-express1.p.rapidapi.com/search",
    // "headers":{
    // "content-type":"application/octet-stream",
    // "x-rapidapi-host":"ali-express1.p.rapidapi.com",
    // "x-rapidapi-key":"5c1d96e00emsh9bedadd36c08532p1ac2a8jsn5aad4eb79ad7",
    // "useQueryString":true
    // },"params":{
    // "from":"0",
    // "limit":"20",
    // "country":"BD",
    // "query":"umbrella"
    // }
    // })
    // .then((response)=>{
    //   console.log(response)
    // })
    // .catch((error)=>{
    //   console.log(error)
    // })
    }

    render(){
        return (
            <div>
                <Helmet>
                    <title>GlobalbuyBD | A cross border shopping platform for Bangladeshi Smart Shoppers</title>
                </Helmet>
                <HeaderThree logoName={'logo/14.png'} />
                <section className="p-0 small-slider">
                    <Slider className="slide-1 home-slider">
                        <div>
                            <div className="home home46">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <div className="slider-contain">
                                                    <div>
                                                        <h3>GlobalBuyBd এর সাথে</h3>
                                                        <h2>বিশ্বের সেরা যে কোন ই-কমার্স প্লাটফর্ম থেকে পন্য ক্রয় করুন খুব সহজে</h2>
                                                        <h5>আমরা পোঁছে দিবো আপনার দরজায়</h5>
                                                        <Link to="/left-sidebar/collection" className="btn btn-solid">shop now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div>
                            <div className="home home45">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <div className="slider-contain">
                                                    <div>
                                                    <h3>GlobalBuyBd এর সাথে</h3>
                                                    <h2>বিশ্বের সেরা যে কোন ই-কমার্স প্লাটফর্ম থেকে পন্য ক্রয় করুন খুব সহজে</h2>
                                                    <h5>আমরা পোঁছে দিবো আপনার দরজায়</h5>
                                                    <Link to="/left-sidebar/collection" className="btn btn-solid">shop now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </Slider>
                </section>

                {/*Logo Block section*/}
                <LogoBlock />
                {/*Logo Block section end*/}

                {/*Banner Section*/}
                <section className="pt-0 banner-6 ratio2_1">
                    <div className="container">
                        <div className="row partition3">
                            <div className="col-md-4">
                                <Link to="/left-sidebar/collection">
                                    <div className="collection-banner p-left">
                                        <div className="img-part">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/pets/banner/1.jpg`}
                                                 className="img-fluid blur-up lazyload bg-img" alt="" />
                                        </div>
                                        <div className="contain-banner banner-3">
                                            <div>
                                                <h2>fashion</h2>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-4">
                                <Link to="/left-sidebar/collection">
                                    <div className="collection-banner p-right text-right">
                                        <div className="img-part">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/pets/banner/2.jpg`}
                                                 className="img-fluid blur-up lazyload bg-img" alt="" />
                                        </div>
                                        <div className="contain-banner banner-3">
                                            <div>
                                                <h2>Accessorries</h2>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-4">
                                <Link to="/left-sidebar/collection">
                                    <div className="collection-banner p-left">
                                        <div className="img-part">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/pets/banner/3.jpg`}
                                                 className="img-fluid blur-up lazyload bg-img" alt="" />
                                        </div>
                                        <div className="contain-banner banner-3">
                                            <div>
                                                <h2>kids</h2>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="row partition3 banner-top-cls">
                            <div className="col-md-4">
                                <Link to="/left-sidebar/collection">
                                    <div className="collection-banner p-right">
                                        <div className="img-part">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/pets/banner/4.jpg`}
                                                 className="img-fluid blur-up lazyload bg-img" alt="" />
                                        </div>
                                        <div className="contain-banner banner-3">
                                            <div>
                                                <h2>beauty</h2>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-4">
                                <Link to="/left-sidebar/collection">
                                    <div className="collection-banner p-left text-left">
                                        <div className="img-part">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/pets/banner/5.jpg`}
                                                 className="img-fluid blur-up lazyload bg-img" alt="" />
                                        </div>
                                        <div className="contain-banner banner-3">
                                            <div>
                                                <h2>shoes</h2>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-4">
                                <Link to="/left-sidebar/collection">
                                    <div className="collection-banner p-left">
                                        <div className="img-part">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/pets/banner/6.jpg`}
                                                 className="img-fluid blur-up lazyload bg-img" alt="" />
                                        </div>
                                        <div className="contain-banner banner-3">
                                            <div>
                                                <h2>watches</h2>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Banner Section End*/}

                {/*Product Section*/}
                <Collection type={'pets'} title="TOP COLLECTION" subtitle="Special Offer"/>
                {/*Product Section End*/}

                {/*Parallax banner*/}
                <section className="p-0 pet-parallax">
                    <div className="full-banner parallax parallax-banner19  text-center p-center">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="banner-contain">
                                        <h4>choose our cargos</h4>
                                        <h3>get upto 30% off</h3>
                                        <p>for bulk order of any product we also provide our customer an impressive service with ALG.
                                            if you are interseted to enlarge your business and want to import product from outside bangladeh.
                                            we are the most safe,secure and reliable cargos in Bangladesh. </p>
                                        <a target ='_blank' href="http://algcargos.com" className="btn btn-solid black-btn" tabIndex="0">visit us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Parallax banner end*/}

                {/*Product Slider*/}
                <Collection type={'pets'} title="SAVE AND EXTRA" />
                {/*Product Slider End*/}

                {/* Blog Section Section*/}
                <div className="container ">
                    <div className="row">
                        <div className="col">
                            <div className="title1 title5">
                                <h4>Recent Story</h4>
                                <h2 className="title-inner1">from the blog</h2>
                                <hr role="tournament6" />
                            </div>
                        </div>
                    </div>
                </div>
                <section className="section-b-space p-t-0 ratio2_3">
                    <BlogSection />
                </section>
                {/* Blog Section End*/}
                <ThemeSettings/>
                <FooterTwo logoName={'logo/14.png'}/>
            </div>
        )
    }
}


export default Pets;