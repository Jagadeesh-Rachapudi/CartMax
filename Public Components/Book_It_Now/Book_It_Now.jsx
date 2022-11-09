import React from "react";
import { Button } from "react-bootstrap";
function Book_It_Now(props) {
  return (
    <div>
      <Button class="btn btn-danger">
        <div className="HedderRedButton">{props.content}</div>
      </Button>
    </div>
  );
}

export default Book_It_Now;
