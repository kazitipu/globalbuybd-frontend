import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Breadcrumb extends Component {
    render (){
        const {title, parent} = this.props;
        return (
            <div className="breadcrumb-section" style={{backgroundColor:'#ff4c3b'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="page-title">
                                <h6 style={{color:'white', fontSize:'130%',fontWeight:'130%',fontFamily:'sans-serif'}}>{title}</h6>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <nav aria-label="breadcrumb" className="theme-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to={`${process.env.PUBLIC_URL}`} style={{color:'white'}}>Home</Link></li>
                                    {/* {parent?
                                    <li className="breadcrumb-item" aria-current="page">{parent}</li>:''}
                                    <li className="breadcrumb-item active" aria-current="page">{title}</li> */}
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Breadcrumb;