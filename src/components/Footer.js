import React from 'react';
import $ from "jquery";

class Footer extends React.Component{
  render(){
    return (
      <div className="footer">
        <footer>
          <div className="footer-copyright">© Abhay Vincent 2020</div>
          <div className="footer-links">
            <a className="header-link" href="">Canada</a>
            <a className="header-link" href="">FAQ</a>
            <a className="header-link" href="">WeBlog</a>
          </div>
        </footer>
      </div>
    );
  }
  componentDidMount(){
    //$("footer").css("background","red")
  }
}

export default Footer;
