import React from 'react';
import $ from "jquery";

class Login extends React.Component{
  render(){
    return (
      <main className="login">
        <article>
          <h1>Login</h1>
          <h1>Websites</h1>
          <p>We are source visually and performantly interesting websites, technologies 
            and developers, designed to help web developers and designers explore the world 
            of web and design and get inspired.
          </p>
          <div className="home-links">
            <button>Top Web Arts</button>
            <button>Top Technologies</button>
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
