import { Component } from "react";

export default class GameObject extends Component {
  position = {
    x: null,
    y: null
  };

  acceleration = {
    x: null,
    y: null
  };

  velocity = {
    x: null,
    y: null
  };

  weight = 0;

  forces = [[]];

  hitBox = {
    height: null,
    width: null
  };
}
