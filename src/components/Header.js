import React from 'react';
import $ from "jquery";

class Header extends React.Component{
  render(){
    return (
      <div className="header">
          <header>
            <div className="logo-wrap"><h1 className="logo">fine<span className="logo-web">web</span>art.io</h1></div>
            <div className="header-links">
              <botton className="header-link header-link-highlight">Login</botton>
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
