import React, {Component} from 'react';
import {Link} from "react-router-dom"
import { withTranslate } from 'react-redux-multilingual'

import {SlideUpDown} from "../../services/script"
import { ToastContainer } from 'react-toastify';

class ThemeSettings extends Component {

    constructor(props){
        super(props);

        this.state = {
            divName:'RTL',
            themeLayout: false
        }
    }


    /*=====================
     Tap on Top
     ==========================*/
    componentWillMount(){
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll = () => {
        if (document.documentElement.scrollTop > 600) {
            document.querySelector(".tap-top").style = "display: block";
        } else {
            document.querySelector(".tap-top").style = "display: none";
        }
    }
    clickToTop(){
        window.scroll({top: 0, left: 0, behavior: 'smooth' })
    }

    componentDidMount() {
        SlideUpDown('setting-title');
    }

    openSetting = () => {
        document.getElementById("setting_box").classList.add('open-setting');
        document.getElementById("setting-icon").classList.add('open-icon');
    }
    closeSetting = () => {
        document.getElementById("setting_box").classList.remove('open-setting');
        document.getElementById("setting-icon").classList.remove('open-icon');
    }

    // Color Picker
    changeColor(event, color){
        var elems = document.querySelectorAll(".color-box li");
        [].forEach.call(elems, function(elemt) {
            elemt.classList.remove('active');
        })

        event.target.classList.add('active');
        console.log(color)
        document.getElementById("color").setAttribute("href", `${process.env.PUBLIC_URL}/assets/css/`+color+`.css` );
    }

    ChangeRtl(divName){
        if(divName === 'RTL') {
            document.body.classList.add('rtl');
            this.setState({divName: 'LTR'});
        }else{
            document.body.classList.remove('rtl');
            this.setState({divName: 'RTL'});
        }
    }

    changeThemeLayout() {
        this.setState({
            themeLayout:!this.state.themeLayout
        })
    }

    render() {
        if(this.state.themeLayout){
            document.body.classList.add('dark');
        }else{
            document.body.classList.remove('dark');
        }
        let tap_to_top = {display: 'none'}

        return (
            <div>
                <a href="javascript:void(0)" onClick={() => this.openSetting()}>
                    <div className="setting-sidebar" id="setting-icon">
                        <div>
                            <i className="fa fa-cog" aria-hidden="true"></i>
                        </div>
                    </div>
                </a>
                <div id="setting_box" className="setting-box">
                    <a href="javascript:void(0)" className="overlay" onClick={() => this.closeSetting()}></a>
                    <div className="setting_box_body">
                        <div onClick={() => this.closeSetting()}>
                            <div className="sidebar-back text-left">
                                <i className="fa fa-angle-left pr-2" aria-hidden="true"></i> Back
                            </div>
                        </div>
                        <div className="setting-body">
                            <div className="setting-title">
                                <h4>color option</h4>
                            </div>
                            <div className="setting-contant">
                                <ul className="color-box">
                                    <li className="color1 active" onClick={(e) => this.changeColor(e, 'color1')}></li>
                                    <li className="color2" onClick={(e) => this.changeColor(e, 'color2')}></li>
                                    <li className="color3" onClick={(e) => this.changeColor(e, 'color3')}></li>
                                    <li className="color4" onClick={(e) => this.changeColor(e, 'color4')}></li>
                                    <li className="color5" onClick={(e) => this.changeColor(e, 'color5')}></li>
                                    <li className="color6" onClick={(e) => this.changeColor(e, 'color6')}></li>
                                    <li className="color7" onClick={(e) => this.changeColor(e, 'color7')}></li>
                                    <li className="color8" onClick={(e) => this.changeColor(e, 'color8')}></li>
                                    <li className="color9" onClick={(e) => this.changeColor(e, 'color9')}></li>
                                    <li className="color10" onClick={(e) => this.changeColor(e, 'color10')}></li>
                                    <li className="color11" onClick={(e) => this.changeColor(e, 'color11')}></li>
                                    <li className="color12" onClick={(e) => this.changeColor(e, 'color12')}></li>
                                    <li className="color13" onClick={(e) => this.changeColor(e, 'color13')}></li>
                                    <li className="color14" onClick={(e) => this.changeColor(e, 'color14')}></li>
                                    <li className="color15" onClick={(e) => this.changeColor(e, 'color15')}></li>
                                    <li className="color16" onClick={(e) => this.changeColor(e, 'color16')}></li>
                                    <li className="color17" onClick={(e) => this.changeColor(e, 'color17')}></li>
                                    <li className="color18" onClick={(e) => this.changeColor(e, 'color18')}></li>
                                </ul>
                            </div>  
                        </div>
                    </div>
                </div>
                <div className="sidebar-btn dark-light-btn">
                    <div className="dark-light">
                        <div
                            className="theme-layout-version"
                            onClick={() => this.changeThemeLayout()}
                        >{this.state.themeLayout?'day':'night'}</div>
                    </div>
                </div>
                <div className="tap-top" onClick={this.clickToTop} style={tap_to_top}>
                    <div>
                        <i className="fa fa-angle-double-up"></i>
                    </div>
                </div>

                <ToastContainer/>
            </div>
        );
    }
}

export default withTranslate(ThemeSettings);
