import { Component } from "react";
import Vector from "./../../Vector/Vector";

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
