import React from 'react';
import $ from "jquery";
import gsap from 'gsap';
import '../css/Home.scss';

class Home extends React.Component{
  render(){
    return (
      <main className="home">
        <article className="home-left">
          <h1   className="home-head    home-animate">We Blog about intresting</h1>
          <h1   className="home-head-sub home-animate">Websites</h1>
          <p    className="home-content " >We are source visually and performantly interesting websites, technologies 
            and developers, designed to help web developers and designers explore the world 
            of web and design and get inspired.
          </p>
          <div  className="home-links   ">
            <div className="home-link home-link-highlight">Top Web Arts</div>
            <div className="home-link">Top Technologies</div>
          </div>
        </article>
      </main>
    );
  }
  componentDidMount(){
  }
}

export default Home;
