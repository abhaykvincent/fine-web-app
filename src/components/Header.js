import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import $ from "jquery";

class Header extends React.Component{
  render(){
    return (
      <div className="header">
          <header>
            <div className="logo-wrap"><Link to="/"><h1 className="logo">fine<span className="logo-web">web</span>art.io</h1></Link></div>
            <div className="header-links">
            <Link to="/login"><botton className="header-link header-link-highlight login">Login</botton></Link>
              <botton className="header-link header-link-extra">Create Account</botton>
            </div>
          </header>
      </div>
    );
  }
  componentDidMount(){
    //$("header").css("background","red")
  }
}

export default Header;
