import React from 'react';
import './css/App.scss'; 
import $ from "jquery";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";



class App extends React.Component{
  componentDidMount(){
    $(".App-header").css("opacity",0.3)
  }
  render(){
    return (
      <div className="App">
        <Header/>
        <div className="current-page grid-x">
          <Home/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
