//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

import React from "react";
import ReactDOM from "react-dom";

var name = "Mihaela";
var d = new Date();
var year = d.getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {name} </p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
