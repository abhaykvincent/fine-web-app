import React from 'react';
import './css/App.scss'; 
import $ from "jquery";
import Header from "./components/Header";



class App extends React.Component{
  componentDidMount(){
    $(".App-header").css("opacity",0.3)
  }
  render(){
    return (
      <div className="App">
        <Header/>
      </div>
    );
  }
}

export default App;
