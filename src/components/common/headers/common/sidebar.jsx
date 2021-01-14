import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './sidebar.css'

class SideBar extends Component {


    closeNav() {
        var closemyslide = document.getElementById("mySidenav");
        if (closemyslide)
            closemyslide.classList.remove('open-side');
    }

    handleSubmenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if(event.target.nextElementSibling.classList.contains('opensub1'))
            event.target.nextElementSibling.classList.remove('opensub1')
        else{
            document.querySelectorAll('.opensub1').forEach(function (value) {
                value.classList.remove('opensub1');
            });
            event.target.nextElementSibling.classList.add('opensub1')
        }
    }
    handleSubTwoMenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if(event.target.nextElementSibling.classList.contains('opensub2'))
            event.target.nextElementSibling.classList.remove('opensub2')
        else{
            document.querySelectorAll('.opensub2').forEach(function (value) {
                value.classList.remove('opensub2');
            });
            event.target.nextElementSibling.classList.add('opensub2')
        }
    }
    handleSubThreeMenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if(event.target.nextElementSibling.classList.contains('opensub3'))
            event.target.nextElementSibling.classList.remove('opensub3')
        else{
            document.querySelectorAll('.opensub3').forEach(function (value) {
                value.classList.remove('opensub3');
            });
            event.target.nextElementSibling.classList.add('opensub3')
        }
    }
    handleSubFourMenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if(event.target.nextElementSibling.classList.contains('opensub4'))
            event.target.nextElementSibling.classList.remove('opensub4')
        else{
            document.querySelectorAll('.opensub4').forEach(function (value) {
                value.classList.remove('opensub4');
            });
            event.target.nextElementSibling.classList.add('opensub4')
        }
    }

    handleMegaSubmenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if(event.target.nextElementSibling.classList.contains('opensidesubmenu'))
            event.target.nextElementSibling.classList.remove('opensidesubmenu')
        else{
            event.target.nextElementSibling.classList.add('opensidesubmenu')
        }
    }

    render() {
        return (
            <div id="mySidenav" className="sidenav">
                <a href="javascript:void(0)" className="sidebar-overlay" style={{opacity:'0'}} onClick={this.closeNav}></a>
                <nav>
                    <a onClick={this.closeNav}>
                        <div className="sidebar-back text-left" style={{color:'#ff4c3b'}}>
                            <i className="fa fa-angle-left pr-2" aria-hidden="true"></i> Back
                        </div>
                    </a>
                    <ul id="sub-menu" className="sidebar-menu">
                        <li>
                            <Link to="#" onClick={(e) => this.handleMegaSubmenu(e)}>
                                clothing
                                <span className="sub-arrow"></span>
                            </Link>
                            <ul className="mega-menu clothing-menu">
                                <li>
                                    <div className="row m-0">
                                        <div className="col-xl-4">
                                            <div className="link-section">
                                                <h5>women's fashion</h5>
                                                <ul>
                                                    <li>
                                                        <Link to={`${process.env.PUBLIC_URL}/collection/womens dress`} onClick={this.closeNav}>dresses</Link>
                                                    </li>
                                                    <li>
                                                    <Link to={`${process.env.PUBLIC_URL}/collection/womens skirts`} onClick={this.closeNav}>skirts</Link>
                                                    </li>
                                                    <li>
                                                        <Link to={`${process.env.PUBLIC_URL}/collection/womens western wear`} onClick={this.closeNav}>westarn wear</Link>
                                                    </li>
                                                    <li>
                                                        <Link to={`${process.env.PUBLIC_URL}/collection/womens ethic wear`} onClick={this.closeNav}>ethic wear</Link>
                                                    </li>
                                                    <li>
                                                        <Link to={`${process.env.PUBLIC_URL}/collection/womens sport wear`} onClick={this.closeNav}>sport wear</Link>
                                                    </li>
                                                </ul>
                                                <h5>men's fashion</h5>
                                                <ul>
                                                    <li>
                                                        <Link to={`${process.env.PUBLIC_URL}/collection/mens sports wear`} onClick={this.closeNav}>sports wear</Link>
                                                    </li>
                                                    <li>
                                                        <Link to={`${process.env.PUBLIC_URL}/collection/mens western wear`} onClick={this.closeNav}>western wear</Link>
                                                    </li>
                                                    <li>
                                                        <Link to={`${process.env.PUBLIC_URL}/collection/mens ethic wear`} onClick={this.closeNav}>ethic wear</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-xl-4">
                                            <div className="link-section">
                                                <h5>accessories</h5>
                                                <ul>
                                                    <li>
                                                        <Link to={`${process.env.PUBLIC_URL}/collection/fashion jewelry`} onClick={this.closeNav}>fashion jewellery</Link>
                                                    </li>
                                                    <li>
                                                        <Link to={`${process.env.PUBLIC_URL}/collection/caps and hats`} onClick={this.closeNav}>caps and hats</Link>
                                                    </li>
                                                    <li>
                                                        <Link to={`${process.env.PUBLIC_URL}/collection/precious jewelry`} onClick={this.closeNav}>precious jewellery</Link>
                                                    </li>
                                                    <li>
                                                        <Link to={`${process.env.PUBLIC_URL}/collection/necklace`} onClick={this.closeNav}>necklaces</Link>
                                                    </li>
                                                    <li>
                                                        <Link to={`${process.env.PUBLIC_URL}/collection/earrings`} onClick={this.closeNav}>earrings</Link>
                                                    </li>
                                                    <li>
                                                        <Link to={`${process.env.PUBLIC_URL}/collection/wrist wear`} onClick={this.closeNav}>wrist wear</Link>
                                                    </li>
                                                    <li>
                                                        <Link to={`${process.env.PUBLIC_URL}/collection/ties`} onClick={this.closeNav}>ties</Link>
                                                    </li>
                                                    <li>
                                                        <Link to={`${process.env.PUBLIC_URL}/collection/cufflinks`} onClick={this.closeNav}>cufflinks</Link>
                                                    </li>
                                                    <li>
                                                        <Link to={`${process.env.PUBLIC_URL}/collection/pockets squares`} onClick={this.closeNav}>pockets squares</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-xl-4">
                                            <a href="#" className="mega-menu-banner">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/mega-menu/fashion.jpg`} alt="" className="img-fluid"/>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="#" onClick={(e) => this.handleSubmenu(e)}>
                                bags
                                <span className="sub-arrow"></span>
                            </Link>
                            <ul>
                                <li>
                                    <Link to={`${process.env.PUBLIC_URL}/collection/shopper bag`} onClick={this.closeNav}>shopper bags</Link>
                                </li>
                                <li>
                                    <Link to={`${process.env.PUBLIC_URL}/collection/laptop bag`} onClick={this.closeNav}>laptop bags</Link>
                                </li>
                                <li>
                                    <Link to={`${process.env.PUBLIC_URL}/collection/clutches`} onClick={this.closeNav}>clutches</Link>
                                </li>
                                <li>
                                    <Link to="#" onClick={(e) => this.handleSubTwoMenu(e)} >
                                        purses
                                        <span className="sub-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li>
                                            <Link to={`${process.env.PUBLIC_URL}/collection/ladies purses`} onClick={this.closeNav}>purses</Link>
                                        </li>
                                        <li>
                                            <Link to={`${process.env.PUBLIC_URL}/collection/womens wallets`} onClick={this.closeNav}>wallets</Link>
                                        </li>
                                        <li>
                                            <Link to={`${process.env.PUBLIC_URL}/collection/ladies leather`} onClick={this.closeNav}>leathers</Link>
                                        </li>
                                        <li>
                                            <Link to={`${process.env.PUBLIC_URL}/collection/ladies satchels`} onClick={this.closeNav}>satchels</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="#" onClick={(e) => this.handleSubmenu(e)}>
                                footwear
                                <span className="sub-arrow"></span>
                            </Link>
                            <ul>
                                <li>
                                    <Link to={`${process.env.PUBLIC_URL}/collection/spor shoes`} onClick={this.closeNav}>sport shoes</Link>
                                </li>
                                <li>
                                    <Link to={`${process.env.PUBLIC_URL}/collection/formal shoes`} onClick={this.closeNav}>formal shoes</Link>
                                </li>
                                <li>
                                    <Link to={`${process.env.PUBLIC_URL}/collection/casual shoes`} onClick={this.closeNav}>casual shoes</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to={`${process.env.PUBLIC_URL}/collection/watches`}>
                                watches
                            </Link>
                        </li>
                        <li>
                            <Link to="#" onClick={(e) => this.handleSubmenu(e)}>
                                Accessories
                                <span className="sub-arrow"></span>
                            </Link>
                            <ul>
                                <li>
                                    <Link to={`${process.env.PUBLIC_URL}/collection/fashion jewelry`} onClick={this.closeNav}>fashion jewellery</Link>
                                </li>
                                <li>
                                    <Link to={`${process.env.PUBLIC_URL}/collection/caps and hats`} onClick={this.closeNav}>caps and hats</Link>
                                </li>
                                <li>
                                    <Link to={`${process.env.PUBLIC_URL}/collection/precious jewelry`} onClick={this.closeNav}>precious jewellery</Link>
                                </li>
                                <li>
                                    <Link to="#" onClick={(e) => this.handleSubTwoMenu(e)} >
                                        more..
                                        <span className="sub-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li>
                                            <Link to={`${process.env.PUBLIC_URL}/collection/necklace`} onClick={this.closeNav}>necklaces</Link>
                                        </li>
                                        <li>
                                            <Link to={`${process.env.PUBLIC_URL}/collection/earrings`} onClick={this.closeNav}>earrings</Link>
                                        </li>
                                        <li>
                                            <Link to={`${process.env.PUBLIC_URL}/collection/wrist wear`} onClick={this.closeNav}>wrist wear</Link>
                                        </li>
                                        <li>
                                            <Link to="#" onClick={(e) => this.handleSubThreeMenu(e)} >
                                                accessories
                                                <span className="sub-arrow"></span>
                                            </Link>
                                            <ul>
                                            <li>
                                                <Link to={`${process.env.PUBLIC_URL}/collection/accessory gift sets`} onClick={this.closeNav}>accessory gift sets</Link>
                                            </li>
                                            <li>
                                                <Link to={`${process.env.PUBLIC_URL}/collection/travel accessories`} onClick={this.closeNav}>travel accessories</Link>
                                            </li>
                                            <li>
                                                <Link to={`${process.env.PUBLIC_URL}/collection/phone cases`} onClick={this.closeNav}>phone cases</Link>
                                            </li>
                                                <li>
                                                    <Link to={`${process.env.PUBLIC_URL}/collection/helmets`} onClick={this.closeNav}>helmets</Link>
                                                </li>
                                                <li>
                                                    <Link to={`${process.env.PUBLIC_URL}/collection/scarves`} onClick={this.closeNav}>scarves</Link>
                                                </li>
                                               
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to={`${process.env.PUBLIC_URL}/collection/belts`} onClick={this.closeNav}>belts & more</Link>
                                        </li>
                                        <li>
                                            <Link to={`${process.env.PUBLIC_URL}/collection/wearable`} onClick={this.closeNav}>wearable</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to={`${process.env.PUBLIC_URL}/collection/house of design`} onClick={this.closeNav}>house of design</Link>
                        </li>
                        <li>
                            <Link to="#" onClick={(e) => this.handleSubmenu(e)}>
                                beauty & personal care
                                <span className="sub-arrow"></span>
                            </Link>
                            <ul>
                                <li>
                                    <Link to={`${process.env.PUBLIC_URL}/collection/womens makeup`} onClick={this.closeNav}>makeup</Link>
                                </li>
                                <li>
                                    <Link to={`${process.env.PUBLIC_URL}/collection/womens skincare`} onClick={this.closeNav}>skincare</Link>
                                </li>
                                <li>
                                    <Link to={`${process.env.PUBLIC_URL}/collection/premium beauty`} onClick={this.closeNav}>premium beauty</Link>
                                </li>
                                <li>
                                    <Link to="#" onClick={(e) => this.handleSuTwobmenu(e)}>
                                        more
                                        <span className="sub-arrow"></span>
                                    </Link>
                                    <ul>
                                        <li>
                                            <Link to={`${process.env.PUBLIC_URL}/collection/fragrances`} onClick={this.closeNav}>fragrances</Link>
                                        </li>
                                        <li>
                                            <Link to={`${process.env.PUBLIC_URL}/collection/luxury beauty`} onClick={this.closeNav}>luxury beauty</Link>
                                        </li>
                                        <li>
                                            <Link to={`${process.env.PUBLIC_URL}/collection/hair care`} onClick={this.closeNav}>hair care</Link>
                                        </li>
                                        <li>
                                            <Link to={`${process.env.PUBLIC_URL}/collection/tools and brushes`} onClick={this.closeNav}>tools & brushes</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to={`${process.env.PUBLIC_URL}/collection/home and decor`} onClick={this.closeNav}>home & decor</Link>
                        </li>
                        <li>
                            <Link to={`${process.env.PUBLIC_URL}/collection/kitchen`} onClick={this.closeNav}>kitchen</Link>
                        </li>
                    </ul>
                </nav>
            </div>

        )
    }
}


export default SideBar;