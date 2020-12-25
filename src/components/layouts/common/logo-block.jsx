import React, { Component } from 'react';
import Slider from 'react-slick';

import {Slider6} from "../../../services/script";
import './logo-block.css'

class LogoBlock extends Component {

    render (){
        return (
            <section className="section-b-space logo-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Slider {...Slider6} className="slider-6 no-arrow" autoplay>
                                <div>
                                    <div className="logo-block">
                                        <a href='https://alibaba.com/' target='_blank'>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/logos/1.png`} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-block">
                                        <a href='https://aliexpress.com/' target='_blank'>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/logos/2.png`} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-block">
                                        <a href='https://taobao.com/' target='_blank'>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/logos/3.png`} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-block">
                                        <a href='https://tmall.com/' target='_blank'>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/logos/4.png`} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-block">
                                        <a href='https://1688.com/' target='_blank'>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/logos/5.png`} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-block">
                                        <a href='https://jd.com/' target='_blank'>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/logos/6.png`} alt="" />
                                        </a>
                                    </div>
                                </div> 
                                {/* <div>
                                    <div className="logo-block">
                                        <a href={null}>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/logos/7.png`} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-block">
                                        <a href={null}>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/logos/8.png`} alt="" />
                                        </a>
                                    </div>
                                </div>   */}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default LogoBlock;