import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {setCurrentUser} from '../../actions'

import Breadcrumb from "../common/breadcrumb";

class Login extends Component {

    constructor (props) {
        super (props)

        this.state={
            email:'',
            password:'',
        }

    }

    handleChange = (event) => {
        console.log(this.state.email)
        console.log(this.state.password)
        const {name, value} = event.target
        this.setState({[name]:value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.setCurrentUser(this.state)
        this.setState({email:'', password:''})
        this.props.history.push('/')
        
    }

    render(){
        console.log(this.props)
        return (
            <div>
                <Breadcrumb title={'Login'}/>
                
                
                {/*Login section*/}
                <section className="login-page section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h3>Login</h3>
                                <div className="theme-card">
                                    <form className="theme-form" name='login' onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="text" name="email" className="form-control" id="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}
                                                   required="" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="review">Password</label>
                                            <input type="password" name="password" className="form-control" id="review" value={this.state.password} onChange={this.handleChange}
                                                   placeholder="Enter your password" required="" />
                                        </div>
                                        <button type="submit" className="btn btn-solid" htmlFor='login'>Login</button> 
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6 right-login">
                                <h3>New Customer</h3>
                                <div className="theme-card authentication-right">
                                    <h6 className="title-font">Create An Account</h6>
                                    <p>Sign up for a free account at our store. Registration is quick and easy. It
                                        allows you to be able to order from our shop. To start shopping click
                                        register.</p>
                                    <Link to="/pages/register" className="btn btn-solid">Register</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default connect(null,{setCurrentUser})(Login);