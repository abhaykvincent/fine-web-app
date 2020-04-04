import React from 'react';
import $ from "jquery";

class Home extends React.Component{
  render(){
    return (
      <main className="home">
        <article>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam autem, adipisci sint officia in velit blanditiis quod provident illo quae, culpa cupiditate doloremque accusamus rerum. Velit nostrum doloribus porro officia!
        </article>
      </main>
    );
  }
  componentDidMount(){
    //$("header").css("background","red")
  }
}

export default Home;
