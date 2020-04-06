import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './css/App.scss'; 
import $ from "jquery";
import Header from "./components/Header";
import gsap from 'gsap';
import Home from "./components/Home";
import Login from "./components/Login";

import Footer from "./components/Footer";

class App extends React.Component{
  componentDidMount(){
  }
  render(){
    setTimeout(function(){
      $(".loader").hide(); 
      var tl = gsap.timeline();
      tl.to(".home-animate", 
      {x: 0,duration:1});

    }, 2000);
    
    return (
      <Router>
        <div className="loader">
          <img src='https://i.imgur.com/9I1p5AZ.gif' />
        </div>
          <div className="App">
            <Header/>
            <div className="current-page grid-x">

            <Switch>  
                <Route path="/login">
                  <Login/>
                </Route>
                
                <Route path="/">
                  <Home/>
                </Route>
            </Switch>

          </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
