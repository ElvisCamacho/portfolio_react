import React from "react";
import "../Product.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import Footer from "./Footer";
import { connect } from "react-redux";
import { increment } from "../action";

function Product(props) {
  // increment = () => {
  //   this.props.dispatch({ type: "INCREMENT" });
  // };

  return (
    <div className="product">
      <div className="product_info">
        <h1>{props.name}</h1>
      </div>

      <ul className="social">
        <li>
          <a href="https://www.facebook.com/elvis.dk.camacho/">
            <FacebookIcon />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/elviscamacho/">
            <LinkedInIcon />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/camachocv/">
            <InstagramIcon />
          </a>
        </li>
        <li>
          <a href="https://github.com/elviscamacho">
            <GitHubIcon />
          </a>
        </li>
      </ul>
      <div className="header_optionBasket">
        <button onClick={props.increment}>Like this profile</button>
        <ThumbUpAltIcon />

        <span className="header_OptionLineTwo header_basketCount">
          {props.count}
        </span>
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  count: state.count,
});
// the connect dispatch the increment as a prop
export default connect(mapStateToProps, { increment })(Product);
