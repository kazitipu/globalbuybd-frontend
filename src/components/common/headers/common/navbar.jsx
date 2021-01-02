import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navClose: { right: '0px' }
        }
    }

    componentWillMount() {
        if (window.innerWidth < 750) {
            this.setState({ navClose: { right: '-410px' } })
        }
        if (window.innerWidth < 1199) {
            this.setState({ navClose: { right: '-300px' } })
        }
    }

    openNav() {
        console.log('open')
        this.setState({ navClose: { right: '0px' } })
    }
    closeNav() {
        this.setState({ navClose: { right: '-410px' } })
    }

    onMouseEnterHandler() {
        if (window.innerWidth > 1199) {
            document.querySelector("#main-menu").classList.add("hover-unset");
        }
    }

    handleSubmenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if(event.target.nextElementSibling.classList.contains('opensubmenu'))
            event.target.nextElementSibling.classList.remove('opensubmenu')
        else{
            document.querySelectorAll('.nav-submenu').forEach(function (value) {
                value.classList.remove('opensubmenu');
            });
            document.querySelector('.mega-menu-container').classList.remove('opensubmenu')
            event.target.nextElementSibling.classList.add('opensubmenu')
        }
    }

    handleMegaSubmenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;
            
        if(event.target.parentNode.nextElementSibling.classList.contains('opensubmegamenu'))
            event.target.parentNode.nextElementSibling.classList.remove('opensubmegamenu')
        else{
            document.querySelectorAll('.menu-content').forEach(function (value) {
                value.classList.remove('opensubmegamenu');
            });
            event.target.parentNode.nextElementSibling.classList.add('opensubmegamenu')
        }
    }

    render() {
        return (
            <div>
                <div className="main-navbar">
                    <div id="mainnav" >
                        <div className="toggle-nav" onClick={this.openNav.bind(this)} >
                            <i className="fa fa-bars sidebar-bar"></i>
                        </div>
                        <ul className="nav-menu" style={this.state.navClose}>
                            <li className="back-btn" onClick={this.closeNav.bind(this)} >
                                <div className="mobile-back text-right">
                                    <span >Back</span>
                                    <i className="fa fa-angle-right pl-2" aria-hidden="true"></i>
                                </div>
                            </li>
                            <li onClick={this.closeNav.bind(this)}>
                                <Link to="/collection/in-stock" className="nav-link navigation-page" style={{"color":"red"}}>
                                    In Stock
                                </Link>
                            </li>
                            <li onClick={this.closeNav.bind(this)}>
                                <Link to="/collection/pre-order" className="nav-link new-arrival navigation-page">
                                    Pre Order
                                </Link>
                            </li>
                            <li onClick={this.closeNav.bind(this)}>
                                <Link to={`${process.env.PUBLIC_URL}/collection/new arrival`} className="nav-link navigation-page">
                                    New Arrival
                                </Link>
                            </li> 
                            <li >
                                <Link to={`${process.env.PUBLIC_URL}/collection/best selling`} className="nav-link navigation-page">
                                    Best Selling       
                                </Link>
                            </li> 
                            <li onClick={this.closeNav.bind(this)} >
                                <Link to={`${process.env.PUBLIC_URL}/collection/deals`} className="nav-link blinking-text navigation-page" style={{'color':"red"}}>
                                Flash Deals &nbsp;<i className="fa fa-bolt" aria-hidden="true"></i>
                                </Link>
                                
                            </li>
                            <li className="mega-menu">
                                <Link to="#" className="dropdown navigation-page" onClick={(e) => this.handleSubmenu(e)} >
                                    shop
                                    <span className="sub-arrow"></span>
                                </Link>
                                <div className="mega-menu-container">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col mega-box">
                                                <div className="link-section">
                                                    <div className="menu-title" >
                                                        <h5 onClick={(e) => this.handleMegaSubmenu(e)}>
                                                            Women's fashion
                                                            <span className="sub-arrow"></span>
                                                        </h5>
                                                    </div>
                                                    <div className="menu-content">
                                                        <ul>
                                                            <li onClick={this.closeNav.bind(this)}><Link to={`${process.env.PUBLIC_URL}/collection/womens dress`} >Dress</Link></li>
                                                            <li onClick={this.closeNav.bind(this)}><Link to={`${process.env.PUBLIC_URL}/collection/womens tees`} >Tees</Link></li>
                                                            <li onClick={this.closeNav.bind(this)}><Link to={`${process.env.PUBLIC_URL}/collection/womens sets`} >Women's Set</Link></li>
                                                            <li onClick={this.closeNav.bind(this)}><Link to={`${process.env.PUBLIC_URL}/collection/womens leggings`} >Leggings</Link></li>
                                                            <li onClick={this.closeNav.bind(this)}><Link to={`${process.env.PUBLIC_URL}/collection/womens skirt`} >Skirt</Link></li>
                                                            <li onClick={this.closeNav.bind(this)}><Link to={`${process.env.PUBLIC_URL}/collection/womens jeans`} >Jeans</Link></li>
                                                            <li onClick={this.closeNav.bind(this)}><Link to={`${process.env.PUBLIC_URL}/collection/womens shorts`} >Shorts</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mega-box">
                                                <div className="link-section">
                                                    <div className="menu-title" >
                                                        <h5 onClick={(e) => this.handleMegaSubmenu(e)}>
                                                            Men's fashion
                                                            <span className="sub-arrow"></span>
                                                        </h5>
                                                    </div>
                                                    <div className="menu-content">
                                                        <ul>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/collection/mens shirts`} >Shirts</Link></li>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/collection/mens t-shirts`} >T-shirts</Link></li>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/collection/mens sets`} >Men's Sets</Link></li>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/collection/mens casual pant`} >Casual Pants</Link></li>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/collection/mens jeans`} >Jeans</Link></li>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/collection/mens boxers`} >Boxers</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mega-box">
                                                <div className="link-section">
                                                    <div className="menu-title" >
                                                        <h5 onClick={(e) => this.handleMegaSubmenu(e)}>
                                                            Mobile {`&`} Accessories
                                                            <span className="sub-arrow"></span>
                                                        </h5>
                                                    </div>
                                                    <div className="menu-content" >
                                                        <ul>
                                                            <li className="up-text"><Link to={`${process.env.PUBLIC_URL}/collection/mobile phone`}>Mobile Phones</Link></li>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/collection/mobile phone accessories`} >Mobile Phone Accessories</Link></li>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/collection/mobile phone hot Brands`} >Hot Brands</Link></li>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/collection/mobile phone hot cases & covers`}>Hot Cases {`&`} Covers</Link></li>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/collection/moible featured accessories`} >Featured Accessories</Link></li>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/collection/mobile phone parts`} >Mobile Phone Parts</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mega-box">
                                                <div className="link-section">
                                                    <div className="menu-title" >
                                                        <h5 onClick={(e) => this.handleMegaSubmenu(e)}>
                                                            Jewelry {`&`} Watches
                                                            <span className="sub-arrow"></span>
                                                        </h5>
                                                    </div>
                                                    <div className="menu-content" >
                                                        <ul>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/collection/fine jewelry`}>Fine Jewelry</Link></li>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/collection/wedding & engagement`}>Wedding & Engagement</Link></li>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/collection/fashion jewelry`}>Fashion Jewelry</Link></li>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/collection/mens watches`}>Men's Watches</Link></li>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/collection/womens watches`}>Women's Watches</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mega-box">
                                                <div className="link-section">
                                                    <div className="menu-title">
                                                        <h5 onClick={(e) => this.handleMegaSubmenu(e)}>
                                                            Bags {`&`} Shoes
                                                            <span className="sub-arrow"></span>
                                                        </h5>
                                                    </div>
                                                    <div className="menu-content" >
                                                        <ul>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/collection/womens shoes`}>Women's Shoes</Link></li>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/collection/mens shoes`}>Men's Shoes</Link></li>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/collection/best selling shoes`}>Best selling Shoes</Link></li>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/collection/womens luggage & bags`}>Women's Luggage {`&`} Bags</Link></li>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/collection/mens luggage & bags`}>Men's Luggage {`&`} Bags</Link></li>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/collection/bags & accessories`}>Other Bags {`&`} Accessories</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mega-box">
                                                <div className="link-section">
                                                    <div className="menu-title" >
                                                        <h5 onClick={(e) => this.handleMegaSubmenu(e)}>
                                                            Toys,kids {`&`} babies
                                                            <span className="sub-arrow"></span>
                                                        </h5>
                                                    </div>
                                                    <div className="menu-content" >
                                                        <ul>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/collection/baby clothing & shoes`}>Baby Clothing {`&`} Shoes</Link></li>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/collection/boys clothing`}>Boy's Clothing</Link></li>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/collection/girls clothing`}>Girl's Clothing</Link></li>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/collection/toys & hobbies`}>Toys {`&`} Hobbies</Link></li>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/collection/kids shoes & bags`}>Shoes and Bags</Link></li>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/collection/kids accessories`}>Accessories</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <Link to="#" className="nav-link navigation-page" onClick={(e) => this.handleSubmenu(e)} >
                                    information
                                    <span className="sub-arrow"></span>
                                </Link>
                                <ul className="nav-submenu" >
                                    <li onClick={this.closeNav.bind(this)}><Link to={`${process.env.PUBLIC_URL}/pages/about-us`} >about_us</Link></li>
                                    <li onClick={this.closeNav.bind(this)}><Link to={`${process.env.PUBLIC_URL}/pages/contact`} >contact</Link></li>
                                    <li onClick={this.closeNav.bind(this)}><Link to={`${process.env.PUBLIC_URL}/pages/faq`} >FAQ</Link></li>
                                </ul>
                            </li>
                            <li >
                                <Link to="#" className="nav-link navigation-page" onClick={(e) => this.handleSubmenu(e)} >
                                    tax & shipping
                                    <span className="sub-arrow"></span>
                                </Link>
                                <ul className="nav-submenu">
                                    <li onClick={this.closeNav.bind(this)}><Link to={`${process.env.PUBLIC_URL}/pages/tax-and-Shipping`}>find your tax</Link></li>
                                    <li onClick={this.closeNav.bind(this)}><Link to={`${process.env.PUBLIC_URL}/pages/tax-and-Shipping`}>ship with us</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}


export default NavBar;
