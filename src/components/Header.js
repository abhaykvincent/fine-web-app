import React from 'react';
import $ from "jquery";

class Header extends React.Component{
  render(){
    return (
      <div className="App">
          <header>Header</header>
      </div>
    );
  }
  componentDidMount(){
    //$("header").css("background","red")
  }
}

export default Header;
