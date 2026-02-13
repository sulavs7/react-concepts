import React from "react";
import PropTypes from "prop-types";

function Student({ name = "Guest", age = 0, isStudent = false }) {
  //es6 default parameters is a javascript feature
  return (
    <div className="student">
      <p>Name: {name}</p>
      <p>age: {age}</p>
      <p>isStudent: {isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

export default Student;
