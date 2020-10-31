import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {setCurrentUser} from '../../actions'
import './login.css'
import {signInWithGoogle, singInWithFacebook} from '../../firebase/firebase.utils'
import {auth} from '../../firebase/firebase.utils'

import Breadcrumb from "../common/breadcrumb";

class Login extends Component {

    constructor(props) {
        super(props)

        this.state={
            email:'',
            password:'',
        }

    }

    handleSubmit = async event => {
        event.preventDefault();
    
        const { email, password } = this.state;
    
        try {
          await auth.signInWithEmailAndPassword(email, password);
          this.setState({ email: '', password: '' });
            if (this.props.history.location.state.from){
                this.props.history.push(this.props.history.location.state.from)
        }else{
          this.props.history.push('/')
        }
          
        } catch (error) {
          alert(error);
        }
      };
    
    handleChange = event => {
        const { value, name } = event.target;
    
        this.setState({ [name]: value });
      };

    signInWithGoogle =async ()=>{
        try{
            await signInWithGoogle()
            console.log(this.props.history.location)
            if (this.props.history.location.state){
                this.props.history.push(this.props.history.location.state.from)   
            }else{
              this.props.history.push('/')
            }
        }catch(error){
            alert(error)
        }
    }
    
    singInWithFacebook = async () =>{
        try{
            await singInWithFacebook()
        
                if (this.props.history.location.state){
                    this.props.history.push(this.props.history.location.state.from)  
            }else{
              this.props.history.push('/')
            }
        }catch(error){
            alert(error)
        }
    }

    onRegisterButtonClick =()=>{
        this.props.history.push('/pages/register')
    }

    render(){
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
                                        <div className='buttons'>
                                        <button type="submit" className="btn btn-solid" htmlFor='login'>Login</button> 
                                       <div className='social-link'><span> or sign in with: </span>
                                       <i onClick={this.singInWithFacebook} className='fa fa-facebook-official fb-button' aria-hidden='true'>
                                       </i> <i onClick={this.signInWithGoogle} className='fa fa-google google-button' aria-hidden='true'></i></div></div>
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
                                    <div style={{'cursor':'pointer'}} className="btn btn-solid" onClick={this.onRegisterButtonClick}>Register</div>
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