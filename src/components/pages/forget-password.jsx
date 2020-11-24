import React, {Component} from 'react';
import Breadcrumb from "../common/breadcrumb";
import {auth} from './../../firebase/firebase.utils'

class ForgetPassword extends Component {

    constructor (props) {
        super (props)
        this.state={
            email:''
        }
    }

    handleChange =(event)=>{
        event.preventDefault()
        const {name,value} = event.target
        this.setState({[name]:value})
        console.log(this.state.email)
    }

    handleSubmit=(event)=>{
        event.preventDefault()  
        var emailAddress = this.state.email;
        console.log(emailAddress)
        auth.sendPasswordResetEmail(emailAddress).then(()=> {
            alert('Password reset email has been sent to your email address.Plesase check your email')
        }).catch((error)=> {
            alert(error.message)
        });
        this.setState({email:''})
    }

    render (){


        return (
            <div>
                <Breadcrumb title={'forget password'}/>
                
                
                {/*Forget Password section*/}
                <section className="pwd-page section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <h2>Forget Your Password</h2>
                                <form className="theme-form" onSubmit={this.handleSubmit}>
                                    <div className="form-row">
                                        <div className="col-md-12">
                                            <input type="text" className="form-control" id="email" name="email" value={this.state.email} onChange={this.handleChange}
                                                   placeholder="Enter Your Email" required />
                                        </div>
                                        <button  className="btn btn-solid">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default ForgetPassword