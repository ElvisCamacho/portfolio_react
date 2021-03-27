import React from "react";
import "../About.css";

function About(props) {
  return (
    <div className="about">
      <img
        className="profile_pic"
        src="https://scontent.fcph3-1.fna.fbcdn.net/v/t1.0-9/55771730_10157245853987698_3574841390883930112_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=174925&_nc_ohc=AveXxlZ8dr4AX_9S8ym&_nc_ht=scontent.fcph3-1.fna&oh=cff274004572bc304832a1c4ff6e19b9&oe=6081BD09"
        alt=""
      />
      <div className="about_me">
        <h1>{props.about}</h1>
        <p>{props.firstParagraph}</p>
        <p>{props.lastParagraph}</p>
        <h5>{props.contactME}</h5>
        <p>{props.email}</p>
        <p>{props.telefone}</p>
      </div>
    </div>
  );
}

export default About;
