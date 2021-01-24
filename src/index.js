import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ScrollContext } from "react-router-scroll-4";
import { IntlReducer as Intl, IntlProvider } from "react-redux-multilingual";
import "./index.scss";

// Import custom components
import store from "./store";
import translations from "./constants/translations";

// Layouts
import Pets from "./components/layouts/pets/main";

//Collection Pages
import CollectionNoSidebar from "./components/collection/collection-no-sidebar";

// Product Pages
import NoSideBar from "./components/products/no-sidebar";
import SearchedProduct from "./components/products/searchedProduct";
import Product1688 from "./components/products/product1688";

// Features
import Layout from "./components/app";
import Cart from "./components/cart";
import Compare from "./components/compare/index";
import wishList from "./components/wishlist/wishlist";
import checkOut from "./components/checkout";
import orderSuccess from "./components/checkout/success-page";
import Payment from "./components/pages/dashboard/payment";

// Extra Pages
import aboutUs from "./components/pages/about-us";
import PageNotFound from "./components/pages/404";
import lookbook from "./components/pages/lookbook";
import Login from "./components/pages/login";
import Register from "./components/pages/register";
import Search from "./components/pages/search";
import Collection from "./components/pages/collection";
import ForgetPassword from "./components/pages/forget-password";
import Contact from "./components/pages/contact";
import Dashboard from "./components/pages/dashboard/dashboard";
import MyCart from "./components/pages/dashboard/my-cart";
import MyWishlist from "./components/pages/dashboard/my-wishlist.jsx";
import MyOrders from "./components/pages/dashboard/my-orders";
import MyPayments from "./components/pages/dashboard/my-payments";
import Faq from "./components/pages/faq";
import HowToOrder from "./components/pages/howToOrder";
import Privacy from "./components/pages/privacy";
import Refund from "./components/pages/refund";
import TermsAndCondition from "./components/pages/termsAndCondition";
import TaxAndShipping from "./components/pages/taxAndShipping";

// Blog Pages
import RightSide from "./components/blogs/right-sidebar";
import Details from "./components/blogs/details";
import BlogPage from "./components/blogs/blog-page";

// Theme Element
import ElementTitle from "./components/features/theme/element-title";
import ElementBanner from "./components/features/theme/element-banner";
import ElementSlider from "./components/features/theme/element-slider";
import ElementCategory from "./components/features/theme/element-category";
import ElementService from "./components/features/theme/element-service";
import ElementRatio from "./components/features/theme/element-ratio";

// Product Elements
import ElementProductBox from "./components/features/product/element-product-box";
import ElementProductSlider from "./components/features/product/element-product-slider";
import ElementProductNoSlider from "./components/features/product/element-product-no-slider";
import ElementMultipleSlider from "./components/features/product/element-multiple-slider";
import ElementProductTab from "./components/features/product/element-product-tab";

// Portfolio Features
import GridCols from "./components/features/portfolio/grid-cols";
import MasonaryGridCols from "./components/features/portfolio/masonary-grid-cols";

import FbMessenger from "./components/facebookMessenger/facebookMessenger";

class Root extends React.Component {
  render() {
    // store.dispatch(getAllProducts());

    return (
      <Provider store={store}>
        <IntlProvider translations={translations} locale="en">
          <BrowserRouter basename={"/"}>
            <ScrollContext>
              <Switch>
                <Layout>
                  <FbMessenger />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/`}
                    component={Pets}
                  />

                  {/*Routes For custom Features*/}
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/cart`}
                    component={Cart}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/wishlist`}
                    component={wishList}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/compare`}
                    component={Compare}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/checkout`}
                    component={checkOut}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/order-success`}
                    component={orderSuccess}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/order-success/:id`}
                    component={Payment}
                  />

                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/sales/orders`}
                    component={aboutUs}
                  />

                  {/*Routes For Single Product*/}
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/product/:id`}
                    component={NoSideBar}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/taobao/:id`}
                    component={SearchedProduct}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/1688/:id`}
                    component={Product1688}
                  />

                  {/*Routes For Extra Pages*/}
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/pages/about-us`}
                    component={aboutUs}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/pages/refund-policy`}
                    component={Refund}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/pages/terms-and-coditions`}
                    component={TermsAndCondition}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/pages/faq`}
                    component={Faq}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/pages/how-to-order`}
                    component={HowToOrder}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/pages/tax-and-Shipping`}
                    component={TaxAndShipping}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/pages/privacy-policy`}
                    component={Privacy}
                  />

                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/pages/lookbook`}
                    component={lookbook}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/pages/login`}
                    component={Login}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/pages/register`}
                    component={Register}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/pages/search`}
                    component={Search}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/pages/collection`}
                    component={Collection}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/pages/forget-password`}
                    component={ForgetPassword}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/pages/contact`}
                    component={Contact}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/pages/dashboard`}
                    component={Dashboard}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/pages/dashboard/my-cart`}
                    component={MyCart}
                  />
                  <Route
                    exact
                    path={`${
                      process.env.PUBLIC_URL
                    }/pages/dashboard/my-wishlist`}
                    component={MyWishlist}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/pages/dashboard/my-orders`}
                    component={MyOrders}
                  />
                  <Route
                    exact
                    path={`${
                      process.env.PUBLIC_URL
                    }/pages/dashboard/my-payments`}
                    component={MyPayments}
                  />

                  {/*Features*/}
                  {/*Theme Elements*/}
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/features/element-title`}
                    component={ElementTitle}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/features/element-banner`}
                    component={ElementBanner}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/features/element-slider`}
                    component={ElementSlider}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/features/element-category`}
                    component={ElementCategory}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/features/element-service`}
                    component={ElementService}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/features/element-ratio`}
                    component={ElementRatio}
                  />

                  {/*Product Elements*/}
                  <Route
                    exact
                    path={`${
                      process.env.PUBLIC_URL
                    }/features/element-product-box`}
                    component={ElementProductBox}
                  />
                  <Route
                    exact
                    path={`${
                      process.env.PUBLIC_URL
                    }/features/element-product-slider`}
                    component={ElementProductSlider}
                  />
                  <Route
                    exact
                    path={`${
                      process.env.PUBLIC_URL
                    }/features/element-product-no-slider`}
                    component={ElementProductNoSlider}
                  />
                  <Route
                    exact
                    path={`${
                      process.env.PUBLIC_URL
                    }/features/element-product-multiple-slider`}
                    component={ElementMultipleSlider}
                  />
                  <Route
                    exact
                    path={`${
                      process.env.PUBLIC_URL
                    }/features/element-product-tab`}
                    component={ElementProductTab}
                  />

                  {/*Portfolios*/}
                  <Route
                    exact
                    path={`${
                      process.env.PUBLIC_URL
                    }/features/portfolio-grid/:columns`}
                    component={GridCols}
                  />
                  <Route
                    exact
                    path={`${
                      process.env.PUBLIC_URL
                    }/features/portfolio-masonary/:columns`}
                    component={MasonaryGridCols}
                  />

                  {/*Blog Pages*/}
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/blog/right-sidebar`}
                    component={RightSide}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/blog/details`}
                    component={Details}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/blog/blog-page`}
                    component={BlogPage}
                  />

                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/collection/:id`}
                    component={CollectionNoSidebar}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/collection/uploads/:id`}
                    component={CollectionNoSidebar}
                  />
                </Layout>
                <Route exact component={PageNotFound} />
              </Switch>
            </ScrollContext>
          </BrowserRouter>
        </IntlProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
