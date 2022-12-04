import React from "react";

function CategeoryListing(props) {
  return (
    <div className="categeory-listing">
      <div
        className="heading"
        dangerouslySetInnerHTML={{
          __html: props.data.heading,
        }}
      ></div>
      <div className="categeories">
        {Object.values(props.data.categeories).map(
          ({ categeoryTitle, featureImage }, id) => (
            <div key={id} className="categeory">
              {featureImage?.src && (
                <img
                  src={featureImage.src}
                  alt={featureImage.alt || "alt"}
                  // layout="fill"
                />
              )}
              <h5>{categeoryTitle}</h5>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default CategeoryListing;
