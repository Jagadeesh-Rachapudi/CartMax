import React from "react";
import NewsArticle from "../../../Utils/NewsArticle/NewsArticle";

function Fint() {
  return (
    <div className="FInt-Body">
      <div className="FInt-Intro">INTERIOR DECOR STORIES</div>
      <div className="FInt-Hedding">News & updates</div>
      <div className="FInt-Artciles">
        <div className="FInt-Article Fint-Hide1">
          <NewsArticle title="A Modern, Pastel shared baby and Toddler Room" />
        </div>
        <div className="FInt-Article Fint-Hide2">
          <NewsArticle title="The menu space New York Show Room Designed" />
        </div>
        <div className="FInt-Article Fint-Hide3">
          <NewsArticle title="A Modern, Pastel shared baby and Toddler Room" />
        </div>
      </div>
    </div>
  );
}

export default Fint;
