import React from "react";
import "../Home.css";
import Product from "./Product";
//import sample from "./e.mp4";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
          alt=""
        />
        <div className="home_row">
          <Product name="✋ Elvis Camacho"  />
        </div>
      </div>
    </div>
  );
}

export default Home;
