import React, {Component} from 'react';

import Breadcrumb from "../common/breadcrumb";
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'
import {Link} from 'react-router-dom'
import './register.css'

class Register extends Component {
    constructor() {
        super();
    
        this.state = {
          displayName: '',
          email: '',
          password: '',
          confirmPassword: ''
        };
      }
    
      handleSubmit = async event => {
        event.preventDefault();
    
        const { displayName, email, password, confirmPassword } = this.state;
    
        if (password !== confirmPassword) {
          alert("passwords don't match");
          return;
        }
    
        try {
          const { user } = await auth.createUserWithEmailAndPassword(
            email,
            password
          );
    
          await createUserProfileDocument(user, { displayName });
    
          this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
          });
          this.props.history.push('/')
        } catch (error) {
          alert(error);
        }
      };
    
      handleChange = event => {
        const { name, value } = event.target;
    
        this.setState({ [name]: value });
      };

    render (){
        const {displayName,email,password,confirmPassword} = this.state


        return (
            <div>
                <Breadcrumb title={'create account'}/>
                
                
                {/*Regsiter section*/}
                <section className="register-page section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h3>create account</h3>
                                <div className="theme-card">
                                    <form className="theme-form" onSubmit={this.handleSubmit}>
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="name">Display Name</label>
                                                <input type="text" className="form-control" id="name" name='displayName'
                                                       placeholder="Display Name" required="" value={displayName} onChange={this.handleChange} />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="email">Emai</label>
                                                <input type="email" className="form-control" id="email" name='email'
                                                       placeholder="email" required="" value={email} onChange={this.handleChange} />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="password">Password</label>
                                                <input type="password" className="form-control" id="password" name='password'
                                                       placeholder="password" required="" value={password} onChange={this.handleChange} />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="confirm Password">confirm Password</label>
                                                <input type="password" className="form-control" id="confirm Password" name='confirmPassword'
                                                       placeholder="confirm password" required="" value={confirmPassword} onChange={this.handleChange} />
                                            </div>
                                            <button type='submit' className="btn btn-solid">create Account</button>
                                            <Link to='/pages/login' className="btn btn-solid" style={{'marginLeft':'1rem'}}>Login</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default Register;