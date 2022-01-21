import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Homepage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shop/Shop.component';
import Header from './components/header/Header.Component';
import SignInAndSignUpPage from './pages/signIn-signUp/SignIn-SignUp.Components';

import { auth } from './components/firebase/Firebase.utils'


class App extends Component {
constructor(props) {
  super(props)

  this.state = {
     currentUser:null
  }
}

unsubscribeFromAuth = null

componentDidMount(){
  this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>{
    this.setState({
      currentUser:user
    });
    console.log(user);
  })
}
componentWillUnmount(){
  this.unsubscribeFromAuth();
}
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }

}

export default App;
