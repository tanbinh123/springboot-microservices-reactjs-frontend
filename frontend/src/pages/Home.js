import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
        <div>
          <h1>Simple Product</h1>
          <ul className="header">
            <li><a href="/">Home</a></li>
            <li><a href="/api/product">Product</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <div className="content">
             
          </div>
        </div>
    );
  }
}
 
export default Home;