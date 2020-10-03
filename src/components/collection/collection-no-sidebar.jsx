import React, {Component} from 'react';
import Slider from 'react-slick';
import '../common/index.scss';

// import custom Components
import ProductListing from './common/product-listing'
import Breadcrumb from "../common/breadcrumb";
import FilterBar from "./common/filter-bar";


class CollectionNoSideBar extends Component {

    state = {
        layoutColumns:2
    }

    LayoutViewClicked(colums) {
        this.setState({
            layoutColumns:colums
        })
    }

    render(){
        const {id}= this.props.match.params
        return (
            <div>
                <Breadcrumb title={id} />

                {/*Section Start*/}
                <section className="section-b-space">
                    <div className="collection-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="collection-content col">
                                    <div className="page-main-content">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="collection-product-wrapper">
                                                        <div className="product-top-filter">
                                                            <div className="container-fluid p-0">
                                                                <div className="row">
                                                                    <div className="col-12">
                                                                        <FilterBar onLayoutViewClicked={(colmuns) => this.LayoutViewClicked(colmuns)} {...this.props} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="product-wrapper-grid">
                                                            <div className="container-fluid">
                                                                <div className="row">
                                                                    <ProductListing colSize={this.state.layoutColumns} {...this.props}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Section End*/}

            </div>
        )
    }
}

export default CollectionNoSideBar;