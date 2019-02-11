import { Component } from "react";
import Vector from "./../../Vector/Vector";
// const vector = new Vector();
// vector.matrix = [2, 5];
// console.log(vector);
// console.log(vector.x);

export default class GameObject extends Component {
  position = new Vector();
  acceleration = new Vector();
  velocity = new Vector();

  weight = 0;

  forces = [];

  hitBox = {
    height: null,
    width: null
  };
}
