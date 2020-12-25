import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual'
import './index.scss';

// Import custom components
import store from './store';
import translations from './constants/translations'
import { getAllProducts } from './actions'

// Layouts
import Pets from './components/layouts/pets/main';


//Collection Pages
import CollectionLeftSidebar from "./components/collection/collection-left-sidebar";
import CollectionNoSidebar from "./components/collection/collection-no-sidebar";
import CollectionRightSidebar from "./components/collection/collection-right-sidebar";
import CollectionFullWidth from "./components/collection/collection-full-width";
import CollectionMetro from "./components/collection/collection-metro";

// Product Pages
// import LeftSideBar from "./components/products/left-sidebar";
import RightSideBar from "./components/products/right-sidebar";
import NoSideBar from "./components/products/no-sidebar";
import LeftImage from "./components/products/left-image";
import RightImage from "./components/products/right-image";
import Accordian from "./components/products/accordian";
import ColumnLeft from "./components/products/column-left";
import ColumnRight from "./components/products/column-right";
import Column from "./components/products/column";
import Vertical from "./components/products/vertical";

// Features
import Layout from './components/app'
import Cart from './components/cart'
import Compare from './components/compare/index'
import wishList from './components/wishlist/wishlist'
import checkOut from './components/checkout'
import orderSuccess from './components/checkout/success-page'
import Payment from './components/pages/dashboard/payment'

// Extra Pages
import aboutUs from './components/pages/about-us'
import PageNotFound from './components/pages/404'
import lookbook from './components/pages/lookbook'
import Login from './components/pages/login'
import Register from './components/pages/register'
import Search from './components/pages/search'
import Collection from './components/pages/collection'
import ForgetPassword from './components/pages/forget-password'
import Contact from './components/pages/contact'
import Dashboard from './components/pages/dashboard/dashboard'
import MyCart from './components/pages/dashboard/my-cart'
import MyWishlist from './components/pages/dashboard/my-wishlist.jsx'
import MyOrders from './components/pages/dashboard/my-orders'
import MyPayments from './components/pages/dashboard/my-payments'
import Faq from './components/pages/faq'
import HowToOrder from './components/pages/howToOrder'
import Privacy from './components/pages/privacy'
import Refund from './components/pages/refund'
import TermsAndCondition from './components/pages/termsAndCondition'
import TaxAndShipping from './components/pages/taxAndShipping'

// Blog Pages
import RightSide from './components/blogs/right-sidebar'
import Details from './components/blogs/details'
import BlogPage from './components/blogs/blog-page'

// Theme Element
import ElementTitle from "./components/features/theme/element-title"
import ElementBanner from "./components/features/theme/element-banner";
import ElementSlider from "./components/features/theme/element-slider";
import ElementCategory from "./components/features/theme/element-category";
import ElementService from "./components/features/theme/element-service";
import ElementRatio from "./components/features/theme/element-ratio";

// Product Elements
import ElementProductBox from "./components/features/product/element-product-box"
import ElementProductSlider from "./components/features/product/element-product-slider"
import ElementProductNoSlider from "./components/features/product/element-product-no-slider"
import ElementMultipleSlider from "./components/features/product/element-multiple-slider"
import ElementProductTab from "./components/features/product/element-product-tab"

// Portfolio Features
import GridCols from "./components/features/portfolio/grid-cols"
import MasonaryGridCols from "./components/features/portfolio/masonary-grid-cols"

import FbMessenger from './components/facebookMessenger/facebookMessenger'

class Root extends React.Component {


    render() {
        
        // store.dispatch(getAllProducts());

        return(
        	<Provider store={store}>
                <IntlProvider translations={translations} locale='en'>
				<BrowserRouter basename={'/'} >
					<ScrollContext>
						<Switch>
                            
                            <Layout>
                            <FbMessenger />
                            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Pets}/>

                            {/*Routes For custom Features*/}
								<Route exact path={`${process.env.PUBLIC_URL}/cart`} component={Cart}/>
								<Route exact path={`${process.env.PUBLIC_URL}/wishlist`} component={wishList}/>
								<Route exact path={`${process.env.PUBLIC_URL}/compare`} component={Compare}/>
								<Route exact path={`${process.env.PUBLIC_URL}/checkout`} component={checkOut}/>
								<Route exact path={`${process.env.PUBLIC_URL}/order-success`} component={orderSuccess}/>
								<Route exact path={`${process.env.PUBLIC_URL}/order-success/:id`} component={Payment}/>

								<Route exact path={`${process.env.PUBLIC_URL}/sales/orders`} component={aboutUs}/>

                          
								{/*Routes For Single Product*/}
								{/* <Route exact path={`${process.env.PUBLIC_URL}/product/:id`} component={LeftSideBar}/> */}
                                <Route exact path={`${process.env.PUBLIC_URL}/product/:id`} component={NoSideBar}/>
								{/* <Route path={`${process.env.PUBLIC_URL}/right-sidebar/product/:id`} component={RightSideBar}/>
								<Route path={`${process.env.PUBLIC_URL}/col-left/product/:id`} component={ColumnLeft}/>
								<Route path={`${process.env.PUBLIC_URL}/col-right/product/:id`} component={ColumnRight}/>
								<Route path={`${process.env.PUBLIC_URL}/accordian/product/:id`} component={Accordian}/>
								<Route path={`${process.env.PUBLIC_URL}/column/product/:id`} component={Column}/>
								<Route path={`${process.env.PUBLIC_URL}/left-image/product/:id`} component={LeftImage}/>
								<Route path={`${process.env.PUBLIC_URL}/right-image/product/:id`} component={RightImage}/>
								<Route path={`${process.env.PUBLIC_URL}/vertical/product/:id`} component={Vertical}/>
								 */}

								

								{/*Routes For Extra Pages*/}
                                <Route exact path={`${process.env.PUBLIC_URL}/pages/about-us`} component={aboutUs}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/pages/refund-policy`} component={Refund}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/pages/terms-and-coditions`} component={TermsAndCondition}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/pages/faq`} component={Faq}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/pages/how-to-order`} component={HowToOrder}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/pages/tax-and-Shipping`} component={TaxAndShipping}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/pages/privacy-policy`} component={Privacy}/>

                                <Route exact path={`${process.env.PUBLIC_URL}/pages/lookbook`} component={lookbook}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/pages/login`} component={Login}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/pages/register`} component={Register}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/pages/search`} component={Search}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/pages/collection`} component={Collection}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/pages/forget-password`} component={ForgetPassword}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/pages/contact`} component={Contact}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/pages/dashboard`} component={Dashboard}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/pages/dashboard/my-cart`} component={MyCart}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/pages/dashboard/my-wishlist`} component={MyWishlist}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/pages/dashboard/my-orders`} component={MyOrders}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/pages/dashboard/my-payments`} component={MyPayments}/>
                               

								{/*Features*/}
								{/*Theme Elements*/}
                                <Route exact path={`${process.env.PUBLIC_URL}/features/element-title`} component={ElementTitle}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/features/element-banner`} component={ElementBanner}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/features/element-slider`} component={ElementSlider}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/features/element-category`} component={ElementCategory}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/features/element-service`} component={ElementService}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/features/element-ratio`} component={ElementRatio}/>

								{/*Product Elements*/}
                                <Route exact path={`${process.env.PUBLIC_URL}/features/element-product-box`} component={ElementProductBox}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/features/element-product-slider`} component={ElementProductSlider}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/features/element-product-no-slider`} component={ElementProductNoSlider}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/features/element-product-multiple-slider`} component={ElementMultipleSlider}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/features/element-product-tab`} component={ElementProductTab}/>

								{/*Portfolios*/}
                                <Route exact path={`${process.env.PUBLIC_URL}/features/portfolio-grid/:columns`} component={GridCols}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/features/portfolio-masonary/:columns`} component={MasonaryGridCols}/>

								{/*Blog Pages*/}
                                <Route exact  path={`${process.env.PUBLIC_URL}/blog/right-sidebar`} component={RightSide}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/blog/details`} component={Details}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/blog/blog-page`} component={BlogPage}/>

                                
                                   
								{/*Routes For Features (Product Collection) */}
								{/* <Route path={`${process.env.PUBLIC_URL}/collection/:categoryId`} component={CollectionLeftSidebar}/> */}
								<Route exact path={`${process.env.PUBLIC_URL}/collection/:id`} component={CollectionNoSidebar}/>
								{/* <Route path={`${process.env.PUBLIC_URL}/right-sidebar/collection`} component={CollectionRightSidebar}/>
								<Route path={`${process.env.PUBLIC_URL}/full-width/collection`} component={CollectionFullWidth}/>
								<Route path={`${process.env.PUBLIC_URL}/metro/collection`} component={CollectionMetro}/> */}

                            </Layout>
                            <Route exact component={PageNotFound}/>
                         </Switch>
					  </ScrollContext>
					</BrowserRouter>
                </IntlProvider>
			</Provider>
    	);
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));


