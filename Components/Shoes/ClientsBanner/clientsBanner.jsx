import React from "react";

function ClientsBanner(props) {
  return (
    <div className="client-banner">
      <div className="content">{props.data.content}</div>
      <div className="logos">
        {Object.values(props.data.clientLogos).map(
          ({ src, alt }, id) =>
            src && (
              <img
                key={id}
                src={src}
                alt={alt || "alt"}
                // layout="fill"
              />
            )
        )}
      </div>
    </div>
  );
}

export default ClientsBanner;
