import React from 'react';
import $ from "jquery";
import "../css/Login.scss";

class Login extends React.Component{
  render(){
    return (
      <main className="login">
        <article className="login-page">
          <div className="left">
            <h1></h1>
            <h1></h1>
            <p>
            </p>
          </div>
          <div className="right">
            <div className="login-panel">
              <h1 className="login-head">Login</h1>
              <form >
                <label className="input-label username-label" htmlFor="username">Username</label>
                <input className="input-full"  type="text" name="username" id="username"/>

                <label className="input-label password-label" htmlFor="password">Password</label>
                <input className="input-full" type="text" name="password" id="password"/>

                <div className="login-button">Login</div>
              </form>
            </div>
          </div>
          
        </article>
      </main>
    );
  }
  componentDidMount(){
    //$("header").css("background","red")
  }
}

export default Login;
