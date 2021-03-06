import React, { Component } from "react";

import FormInput from "../form-input/FormInput.component";
import CustomButton from "../custom-button/CustomButton.component";

import {signInWithGoogle} from '../../components/firebase/Firebase.utils'

import './signin.style.scss'

 class SignInPage extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          email: '',
          password: ''
        };
      }
    
      handleSubmit = event => {
        event.preventDefault();
    
        this.setState({ email: '', password: '' });
      };
    
      handleChange = event => {
        const { value, name } = event.target;
    
        this.setState({ [name]: value });
      };
    
      render() {
        return (
          <div className='sign-in'>
            <h2 className="title">I already have an account</h2>
            <span>Sign in with your email and password</span>
    
            <form onSubmit={this.handleSubmit}>
              <FormInput
                name='email'
                type='email'
                handleChange={this.handleChange}
                value={this.state.email}
                label='email'
                required
              /> 
              <FormInput
                name='password'
                type='password'
                value={this.state.password}
                handleChange={this.handleChange}
                label='password'
                required
              />
             <div className="buttons">
             <CustomButton type='submit'> Sign in </CustomButton>
              <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                {' '}Sign IN with Google{' '}
              </CustomButton>
             </div>
            </form>
          </div>
        );
      }
    }
    

export default SignInPage;
