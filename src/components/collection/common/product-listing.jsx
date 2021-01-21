import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { getTotal, getCartProducts } from "../../../reducers";
import {
  addToCart,
  addToWishlist,
  addToCompare,
  getAllProductsFirestore,
  setSearchedProductsArray,
} from "../../../actions";
import { getVisibleproducts } from "../../../services";
import ProductListItem from "./product-list-item";
import {
  auth,
  addCartItemTofirestore,
  addWishlistTofirestore,
  getAllFirestoreProducts,
  getAllFirestoreAliProductsList,
} from "../../../firebase/firebase.utils";
import axios from "axios";
import { Helmet } from "react-helmet";
import themeSettings from "../../common/theme-settings";
import { withRouter } from "react-router-dom";

class ProductListing extends Component {
  constructor(props) {
    super(props);

    this.state = { limit: 5, hasMoreItems: true, page: 1, notFound: false };
  }

  componentDidMount = async () => {
    console.log(this.props.match.params.id);
    if (
      this.props.match.params.id == "in-stock" ||
      this.props.match.params.id == "pre-order"
    ) {
      const productsArray = await getAllFirestoreProducts();
      const aliProductsArray = await getAllFirestoreAliProductsList();
      console.log(aliProductsArray);
      this.props.getAllProductsFirestore([
        ...productsArray,
        ...aliProductsArray,
      ]);
    } else {
      const _EXTERNAL_URL = `https://taobao-1688-api-nodejs.herokuapp.com/collection/${
        this.props.match.params.id
      },${this.state.page}`;

      const response = await axios.get(_EXTERNAL_URL);
      console.log(response);
      if (response.data.items) {
        this.props.setSearchedProductsArray(response.data.items.item);
      } else {
        this.props.setSearchedProductsArray([]);
      }
    }
    setTimeout(() => {
      this.setState({ notFound: true });
    }, 30000);
  };

  componentWillMount() {
    this.fetchMoreItems();
    this.unlisten = this.props.history.listen(async (location, action) => {
      if (
        this.props.match.params.id == "in-stock" ||
        this.props.match.params.id == "pre-order"
      ) {
        const productsArray = await getAllFirestoreProducts();
        const aliProductsArray = await getAllFirestoreAliProductsList();
        console.log(aliProductsArray);
        this.props.getAllProductsFirestore([
          ...productsArray,
          ...aliProductsArray,
        ]);
      } else {
        this.props.setSearchedProductsArray([]);
        console.log("i am called");
        const _EXTERNAL_URL = `https://taobao-1688-api-nodejs.herokuapp.com/collection/${
          this.props.match.params.id
        },${this.state.page}`;

        const response = await axios.get(_EXTERNAL_URL);
        console.log(response);
        if (response.data.items) {
          this.props.setSearchedProductsArray(response.data.items.item);
        } else {
          this.props.setSearchedProductsArray([]);
        }
      }
    });
  }

  componentWillUnmount() {
    this.props.setSearchedProductsArray([]);
    // this.unlisten()
  }

  fetchMoreItems = async () => {
    // a fake async api call
    setTimeout(() => {
      this.setState({
        limit: this.state.limit + 5,
      });
    }, 1000);

    // if ((this.state.limit < 200 && this.props.match.params.id !=='in-stock') && this.props.match.params.id !=='pre-order'){
    //     this.setState({ hasMoreItems: true });
    //     this.setState({page:this.state.page+1})
    //     const _EXTERNAL_URL = `http://localhost:5000/${this.props.match.params.id},${this.state.page}`;

    //     const response = await axios.get(_EXTERNAL_URL)
    //     console.log(response)
    //     if (response.data){
    //         this.props.setSearchedProductsArray(response.data.items.item)
    //     }
    // }
    if (this.state.limit < 200) {
      this.setState({ hasMoreItems: true });
      return;
    }
  };

  addToReduxAndFirestoreCart = (product, qty) => {
    const { addToCart } = this.props;
    auth.onAuthStateChanged(
      async (userAuth) => await addCartItemTofirestore(userAuth, product, qty)
    );
    addToCart(product, qty);
  };

  addToReduxAndFirestoreWishlist = (product) => {
    const { addToWishlist } = this.props;
    console.log(this.props);
    auth.onAuthStateChanged(
      async (userAuth) => await addWishlistTofirestore(userAuth, product)
    );
    addToWishlist(product);
  };

  render() {
    const { products, symbol, addToCompare } = this.props;
    console.log(products);
    return (
      <div>
        <Helmet>
          <title>{this.props.match.params.id}</title>
        </Helmet>

        <div className="product-wrapper-grid">
          <div className="container-fluid">
            {products.length > 0 ? (
              <InfiniteScroll
                dataLength={this.state.limit} //This is important field to render the next data
                next={this.fetchMoreItems}
                hasMore={this.state.hasMoreItems}
                loader={<div className="loading-cls" />}
                endMessage={
                  <p className="seen-cls seen-it-cls">
                    <b>Yay! You have seen it all</b>
                  </p>
                }
              >
                <div className="row">
                  {products.slice(0, this.state.limit).map((product, index) => (
                    // { productsList.map((product, index) =>
                    <div
                      className={`${
                        this.props.colSize === 3
                          ? "col-xl-3 col-md-6 col-grid-box"
                          : "col-lg-" + this.props.colSize
                      }`}
                      key={index}
                    >
                      <ProductListItem
                        product={product}
                        symbol={symbol}
                        onAddToCompareClicked={() => addToCompare(product)}
                        onAddToWishlistClicked={() =>
                          this.addToReduxAndFirestoreWishlist(product)
                        }
                        onAddToCartClicked={() =>
                          this.addToReduxAndFirestoreCart(product, 1)
                        }
                        key={index}
                      />
                    </div>
                  ))}
                </div>
              </InfiniteScroll>
            ) : this.state.notFound ? (
              <div className="row">
                <div className="col-sm-12 text-center section-b-space mt-5 no-found">
                  <img
                    src={`${
                      process.env.PUBLIC_URL
                    }/assets/images/empty-search.jpg`}
                    className="img-fluid mb-4"
                  />
                  <h3>
                    Sorry! Couldn't find the product you were looking For!!!{" "}
                  </h3>
                  <p>
                    Please check if you have misspelt something or try searching
                    with other words.
                  </p>
                  <Link
                    to={`${process.env.PUBLIC_URL}/`}
                    className="btn btn-solid"
                  >
                    continue shopping
                  </Link>
                </div>
              </div>
            ) : (
              <div
                className="loader-wrapper"
                style={{
                  display: "block",
                  left: "0",
                  height: "80vh",
                  bottom: "0",
                  top: "20vh",
                }}
              >
                <div className="loader" />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  console.log(state.searchedProducts.products);
  let products;
  if (
    ownProps.match.params.id == "in-stock" ||
    ownProps.match.params.id == "pre-order"
  ) {
    products = state.data.products.filter(
      (product) => product.availability === ownProps.match.params.id
    );
  } else {
    products = state.searchedProducts.products;
  }
  return {
    products,
    symbol: state.data.symbol,
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {
      addToCart,
      addToWishlist,
      addToCompare,
      getAllProductsFirestore,
      setSearchedProductsArray,
    }
  )(ProductListing)
);
