import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "../../common/index.scss";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  getAllProductsFirestore,
  setSearchedProductsArray,
} from "../../../actions";
import axios from "axios";
import https from "http";
import request from "request";

// Import custom components
import Collection from "./collection";
import LogoBlock from "../common/logo-block";
import BlogSection from "../common/blogsection";
import HeaderThree from "../../common/headers/header-three";
import FooterTwo from "../../common/footers/footer-two";
import ThemeSettings from "../../common/theme-settings";
import CollectionTwo from "./collection2";
import {
  getAllFirestoreProducts,
  getAllFirestoreAliProductsList,
} from "../../../firebase/firebase.utils";
import "./main.css";

class Pets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBarValue: "",
    };
  }
  componentDidMount = async () => {
    const productsArray = await getAllFirestoreProducts();
    const aliProductsArray = await getAllFirestoreAliProductsList();
    this.props.getAllProductsFirestore([...productsArray, ...aliProductsArray]);
  };
  componentWillUnmount = () => {
    this.setState({ searchBarValue: "" });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSearchBarSubmit = (event) => {
    event.preventDefault();
    if (this.state.searchBarValue.length < 35) {
      this.props.history.push(
        `${process.env.PUBLIC_URL}/collection/${this.state.searchBarValue}`
      );
    } else {
      if (this.state.searchBarValue.includes("1688")) {
        let productId = this.state.searchBarValue.split("/")[4].split(".")[0];
        console.log(productId);
        this.props.history.push(`${process.env.PUBLIC_URL}/1688/${productId}`);
      } else {
        let indexOfid = this.state.searchBarValue.search("id");
        let subString = this.state.searchBarValue.slice(
          indexOfid,
          parseInt(indexOfid + 20)
        );
        let productId = subString.split("=")[1];
        console.log(productId);
        if (productId.includes("&")) {
          let exactProductId = productId.split("&")[0];
          console.log(exactProductId);
          this.props.history.push(
            `${process.env.PUBLIC_URL}/taobao/${exactProductId}`
          );
        } else {
          this.props.history.push(
            `${process.env.PUBLIC_URL}/taobao/${productId}`
          );
        }
      }
    }
  };

  _handleImgChange = async (e) => {
    // let reader = new FileReader();
    // const { pictures } = this.state;
    e.preventDefault();
    let file = e.target.files[0];

    // reader.onloadend = () => {
    //   pictures[i] = reader.result;
    //   this.setState({
    //     file: file,
    //     pictures,
    //   });
    // };
    if (file) {
      // reader.readAsDataURL(file);
      // const imgUrl = await uploadImage(file);
      const _EXTERNAL_URL = `https://taobao-1688-api-nodejs.herokuapp.com/uploadImage`;

      let data = new FormData();
      data.append("productImage", file);

      // let config = {
      //   header: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // };
      try {
        const imgUrl = await axios.post(_EXTERNAL_URL, data);
        console.log(imgUrl.data);
        this.props.history.push(
          `${process.env.PUBLIC_URL}/collection/${imgUrl.data}`
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>
            GlobalbuyBD | A cross border shopping platform for Bangladeshi Smart
            Shoppers
          </title>
        </Helmet>
        {/* <HeaderThree logoName={'logo/14.png'} /> */}
        <section className="p-0 small-slider">
          <Slider
            className="slide-1 home-slider"
            autoplay={true}
            autoplaySpeed={400}
            dots={true}
            infinite={true}
            speed={1000}
            slidesToScroll={1}
            arrows={true}
            slidesToShow={1}
          >
            <div>
              <div className="home home46">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <div className="slider-contain">
                        <div>
                          <h3>GlobalBuyBd এর সাথে</h3>
                          <h2 style={{ color: "white" }}>
                            বিশ্বের সেরা যে কোন ই-কমার্স প্লাটফর্ম থেকে পন্য
                            ক্রয় করুন খুব সহজে
                          </h2>
                          <h5>আমরা পোঁছে দিবো আপনার দরজায়</h5>
                          <Link
                            to="/collection/in-stock"
                            className="btn btn-solid"
                          >
                            shop now
                          </Link>
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
                          <h2 style={{ color: "white" }}>
                            বিশ্বের সেরা যে কোন ই-কমার্স প্লাটফর্ম থেকে পন্য
                            ক্রয় করুন খুব সহজে
                          </h2>
                          <h5>আমরা পোঁছে দিবো আপনার দরজায়</h5>
                          <Link
                            to="/collection/pre-order"
                            className="btn btn-solid"
                          >
                            pre order
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </section>

        <div className="search-bar-logo">
          <section className="section-b-space j-box pets-box ratio_square header-text-box">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="title1 title5">
                    <h4 className="header-h4" style={{ marginTop: "10px" }}>
                      Order Right Now
                    </h4>
                    <h2 className="title-inner1 taobao-support">
                      Supports taobao,1688,tmall links.
                    </h2>
                    <hr role="tournament6" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="searchbar-container">
            <form
              className="form_search"
              role="form"
              onSubmit={this.handleSearchBarSubmit}
              style={{ borderRadius: "0px", boxShadow: "none" }}
            >
              <input
                id="query search-autocomplete"
                type="search"
                placeholder="link from taobao,1688,tmall"
                value={this.state.searchBarValue}
                onChange={this.handleChange}
                name="searchBarValue"
                className="nav-search nav-search-field"
                aria-expanded="true"
              />
              <button
                type="submit"
                className="btn-search"
                style={{ width: "80px" }}
              >
                <i className="fa fa-search" style={{ marginLeft: "40px" }} />
              </button>
            </form>
            <div className="image-input-container">
              <i
                className="fa fa-camera search-by-image"
                style={{ cursor: "pointer" }}
              />
              <input
                className="upload-image"
                type="file"
                onChange={(e) => this._handleImgChange(e)}
              />
            </div>
          </div>
          <LogoBlock />
        </div>

        {/*Product Section*/}
        <CollectionTwo
          type={"others"}
          status={"in-stock"}
          title="NEW COLLECTION"
          subtitle="In Stock"
        />
        {/*Product Section End*/}

        {/*Banner Section*/}
        <section
          className="pt-0 banner-6 ratio2_1"
          style={{ marginBottom: "3rem" }}
        >
          <div className="container">
            <div className="row partition3">
              <div className="col-md-4">
                <Link
                  to={`${process.env.PUBLIC_URL}/collection/womens fashion`}
                >
                  <div className="collection-banner p-left">
                    <div className="img-part">
                      <img
                        src={`${
                          process.env.PUBLIC_URL
                        }/assets/images/pets/banner/1.jpg`}
                        className="img-fluid blur-up lazyload bg-img"
                        alt=""
                      />
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
                <Link
                  to={`${process.env.PUBLIC_URL}/collection/mobile accessories`}
                >
                  <div className="collection-banner p-right text-right">
                    <div className="img-part">
                      <img
                        src={`${
                          process.env.PUBLIC_URL
                        }/assets/images/pets/banner/2.jpg`}
                        className="img-fluid blur-up lazyload bg-img"
                        alt=""
                      />
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
                <Link to={`${process.env.PUBLIC_URL}/collection/kids fashion`}>
                  <div className="collection-banner p-left">
                    <div className="img-part">
                      <img
                        src={`${
                          process.env.PUBLIC_URL
                        }/assets/images/pets/banner/3.jpg`}
                        className="img-fluid blur-up lazyload bg-img"
                        alt=""
                      />
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
                <Link to={`${process.env.PUBLIC_URL}/collection/womens beauty`}>
                  <div className="collection-banner p-right">
                    <div className="img-part">
                      <img
                        src={`${
                          process.env.PUBLIC_URL
                        }/assets/images/pets/banner/4.jpg`}
                        className="img-fluid blur-up lazyload bg-img"
                        alt=""
                      />
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
                <Link to={`${process.env.PUBLIC_URL}/collection/womens shoes`}>
                  <div className="collection-banner p-left text-left">
                    <div className="img-part">
                      <img
                        src={`${
                          process.env.PUBLIC_URL
                        }/assets/images/pets/banner/5.jpg`}
                        className="img-fluid blur-up lazyload bg-img"
                        alt=""
                      />
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
                <Link
                  to={`${
                    process.env.PUBLIC_URL
                  }/collection/womens & mens watches`}
                >
                  <div className="collection-banner p-left">
                    <div className="img-part">
                      <img
                        src={`${
                          process.env.PUBLIC_URL
                        }/assets/images/pets/banner/6.jpg`}
                        className="img-fluid blur-up lazyload bg-img"
                        alt=""
                      />
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

        {/*Parallax banner*/}
        <section className="p-0 pet-parallax">
          <div className="full-banner parallax parallax-banner19  text-center p-center">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="banner-contain">
                    <h4>choose our cargos</h4>
                    <h3>get upto 30% off</h3>
                    <p>
                      for bulk order of any product we also provide our customer
                      an impressive service with ALG. if you are interseted to
                      enlarge your business and want to import product from
                      outside bangladeh. we are the most safe,secure and
                      reliable cargos in Bangladesh.{" "}
                    </p>
                    <a
                      target="_blank"
                      href="http://algcargos.com"
                      className="btn btn-solid black-btn"
                      tabIndex="0"
                    >
                      visit us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Parallax banner end*/}

        {/*Product Slider*/}
        <CollectionTwo
          type={"Kids"}
          status={"pre-order"}
          title="SAVE AND EXTRA"
          subtitle="Pre Order"
        />
        {/*Product Slider End*/}
        {/* <ThemeSettings/> */}
        {/* <FooterTwo logoName={'logo/14.png'}/> */}
      </div>
    );
  }
}

export default connect(
  null,
  { getAllProductsFirestore, setSearchedProductsArray }
)(Pets);
