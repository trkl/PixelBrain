import { Component } from "react";

export enum Solid {
  solid,
  walkThrough
}

export default class GameObject extends Component {
  position = {
    x: null,
    y: null
  };
  velocity = {
    vX: null,
    vY: null
  };

  shape = {
    height: null,
    width: null
  };
}
