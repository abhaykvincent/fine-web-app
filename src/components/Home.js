import React from 'react';
import $ from "jquery";

class Home extends React.Component{
  render(){
    return (
      <main className="home">
        <article></article>
      </main>
    );
  }
  componentDidMount(){
    //$("header").css("background","red")
  }
}

export default Home;
