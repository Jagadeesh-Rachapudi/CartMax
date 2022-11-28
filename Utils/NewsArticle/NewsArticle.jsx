import React from "react";

function NewsArticle(props) {
  return (
    <div className="NewsA-Body">
      <div className="NewsA-Date">
        <div>20</div>
        <div>Jan</div>
      </div>
      <div className="NewsA-Image-Conatiner">
        <img src="https://picsum.photos/400/250" className="NewsA-Image" />
      </div>
      <div className="NewsA-Hedding">{props.title}</div>
      <div className="NewsA-Intro">FURNITURE</div>
      <div className="NewsA-Content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt Lorem ipsum dolor sit amet, consectetur adipisicing
        elit, sed do eiusmod tempor incididunt
      </div>
      <a href="#" className="NewsA-Readmore">
        Read More
      </a>  
    </div>
  );
}

export default NewsArticle;
