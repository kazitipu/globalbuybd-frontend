import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.scss';
import {Link} from 'react-router-dom'
import "./details-top-tabs.css";

class DetailsTopTabsApi extends Component {
    render (){
        const {item} = this.props

        return (
            <section className="tab-product m-0">
                {item?
                <div className="row">
                    <div className="col-sm-12 col-lg-12">
                        <Tabs className="tab-content nav-material">
                            <TabList className="nav nav-tabs nav-material">
                                <Tab className="nav-item">
                                    <span className="nav-link active">
                                        <i className="icofont icofont-ui-home"></i>Specifications</span>
                                    <div className="material-border"></div>
                                </Tab>
                                <Tab className="nav-item">
                                    <span className="nav-link" ><i className="icofont icofont-man-in-glasses"></i>Overview</span>
                                    <div className="material-border"></div>
                                </Tab>
                                <Tab className="nav-item">
                                    <span className="nav-link" >
                                        <i className="icofont icofont-contacts"></i>Reviews({item.feedback?item.feedback.length:''})</span>
                                    <div className="material-border"></div>
                                </Tab>
                                <Tab className="nav-item">
                                    <span className="nav-link" >
                                        <i className="icofont icofont-contacts"></i>Write Review</span>
                                    <div className="material-border"></div>
                                </Tab>
                            </TabList>
                            <TabPanel className="tab-pane fade mt-4 show active">
                               
                                <table className="table table-striped mb-0">
                                    <tbody>
                                    {item.specs? item.specs.map((item,i)=>(<tr key={i}>
                                        <th>{item.name}:</th>
                                        <td>{item.value}</td>
                                    </tr>)
                                    )
                                    :
                                    ''      
                            }
                                    </tbody>
                                </table>
                            </TabPanel>
                            <TabPanel>
                                <p className="mt-4 p-0">
                                   {item.description?<div dangerouslySetInnerHTML={{__html: item.description}} /> :''}
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <div className="mt-4 text-center">
                                   {item.feedback && item.feedback.length >0? item.feedback.map((feedback,index)=> (<div class="media" key={index}>
                    <div class="pull-left"><i className="fa fa-user"></i></div>
                    <div class="media-body review-image">
                        <h4 class="media-heading" style={{"textAlign":"start"}}>{feedback.displayName}</h4>
                        <ul class="list-unstyled list-inline media-detail pull-left">
                            <li><i class="fa fa-calendar"></i>{feedback.date}</li>
                            <li><i class="fa fa-thumbs-up"></i> &nbsp;{feedback.country}</li>
                        </ul>
                        <p style={{'marginBottom':'1rem'}}>{feedback.content}</p>
                        <ul class="list-unstyled list-inline media-detail pull-left">
                            {feedback.info.Color?<li>Color:{feedback.info.Color}</li>:''}
                            {feedback.info.Logistics?<li>Logistics:{feedback.info.Logistics}</li>:''}
                            {feedback.info.Size?<li>Size:{feedback.info.Size}</li>:''}
                        </ul>
                        {feedback.photos.length > 0? feedback.photos.map((photo,index)=><img key={index} style={{'width':'10%'}} src={photo}></img>):''}
                        <ul class="list-unstyled list-inline media-detail pull-right">
                            <li class="">rating :</li>
                            <li class="">{feedback.rating}</li>
                        </ul>
                    </div>
                </div>)):<h2 style={{'textAlign':'center'}}>No reviews yet for this product</h2>}
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <form className="theme-form mt-4">
                                    <div className="form-row">
                                        <div className="col-md-12 ">
                                            <div className="media m-0">
                                                <label>Rating</label>
                                                <div className="media-body ml-3">
                                                    <div className="rating three-star">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" className="form-control" id="name" placeholder="Enter Your name" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="email">Email</label>
                                            <input type="text" className="form-control" id="email" placeholder="Email" required />
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="review">Review Title</label>
                                            <input type="text" className="form-control" id="review" placeholder="Enter your Review Subjects" required />
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="review">Review Description</label>
                                            <textarea className="form-control" placeholder="Wrire Your Testimonial Here" id="exampleFormControlTextarea1" rows="6"></textarea>
                                        </div>
                                        <div className="col-md-12">
                                            <button className="btn btn-solid" type="submit">Submit YOur Review</button>
                                        </div>
                                    </div>
                                </form>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>:''}
            </section>
        )
    }
}

export default DetailsTopTabsApi;