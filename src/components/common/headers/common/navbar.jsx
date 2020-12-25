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
                                <Link to="/" className="nav-link navigation-page">
                                    New Arrival
                                </Link>
                            </li> 
                            <li >
                                <Link to="/" className="nav-link navigation-page">
                                    Best Selling
        
                                </Link>
                            </li> 
                            <li onClick={this.closeNav.bind(this)} >
                                <Link to="/" className="nav-link blinking-text navigation-page" style={{'color':"red"}}>
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
                                                            <li onClick={this.closeNav.bind(this)}><Link to={'/'} >Dresses</Link></li>
                                                            <li onClick={this.closeNav.bind(this)}><Link to={'/'} >Tees</Link></li>
                                                            <li onClick={this.closeNav.bind(this)}><Link to={'/'} >Women's Sets</Link></li>
                                                            <li onClick={this.closeNav.bind(this)}><Link to={'/'} >Leggings</Link></li>
                                                            <li onClick={this.closeNav.bind(this)}><Link to={'/'} >Skirts</Link></li>
                                                            <li onClick={this.closeNav.bind(this)}><Link to={'/'} >Jeans</Link></li>
                                                            <li onClick={this.closeNav.bind(this)}><Link to={'/'} >Shorts</Link></li>
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
                                                            <li><Link to={'/'} >Shirts</Link></li>
                                                            <li><Link to={'/'} >T-shirts</Link></li>
                                                            <li><Link to={'/'} >Men's Sets</Link></li>
                                                            <li><Link to={'/'} >Casual Pants</Link></li>
                                                            <li><Link to={'/'} >Jeans</Link></li>
                                                            <li><Link to={'/'} >Boxers</Link></li>
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
                                                            <li className="up-text"><Link to={'/'} >Mobile Phones</Link></li>
                                                            <li><Link to={'/'} >Mobile Phone Accessories</Link></li>
                                                            <li><Link to={'/'} >Hot Brands</Link></li>
                                                            <li><Link to={'/'} >Hot Cases {`&`} Covers</Link></li>
                                                            <li><Link to={'/'} >Featured Accessories</Link></li>
                                                            <li><Link to={'/'} >Mobile Phone Parts</Link></li>
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
                                                            <li><Link to={`${process.env.PUBLIC_URL}/`}>Fine Jewelry</Link></li>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/`}>Wedding {`&`} Engagement</Link></li>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/`}>Fashion Jewelry</Link></li>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/`}>Men's Watches</Link></li>
                                                            <li><Link to={`${process.env.PUBLIC_URL}/`}>Women's Watches</Link></li>
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
                                                            <li><Link to="/">Women's Shoes</Link></li>
                                                            <li><Link to="/">Men's Shoes</Link></li>
                                                            <li><Link to="/">Best selling Shoes</Link></li>
                                                            <li><Link to="/">Women's Luggage {`&`} Bags</Link></li>
                                                            <li><Link to="/">Men's Luggage {`&`} Bags</Link></li>
                                                            <li><Link to="/">Other Bags {`&`} Accessories</Link></li>
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
                                                            <li><Link to="/">Baby Clothing {`&`} Shoes</Link></li>
                                                            <li><Link to="/">Boy's Clothing</Link></li>
                                                            <li><Link to="/">Girl's Clothing</Link></li>
                                                            <li><Link to="/">Toys {`&`} Hobbies</Link></li>
                                                            <li><Link to="/">Shoes and Bags</Link></li>
                                                            <li><Link to="/">Accessories</Link></li>
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
                                    pages
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
                                    <li onClick={this.closeNav.bind(this)}><Link to={`${process.env.PUBLIC_URL}/blog/blog-page`} >find your tax</Link></li>
                                    <li onClick={this.closeNav.bind(this)}><Link to={`${process.env.PUBLIC_URL}/blog/right-sidebar`} >ship with us</Link></li>
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
