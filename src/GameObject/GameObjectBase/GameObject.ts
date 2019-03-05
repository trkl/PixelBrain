import Vector from "./../../Vector/Vector";
import PropTypes, { element } from "prop-types";
import DecInc from "../DecInc";
import { Component } from "react";



export default class GameObject {
  constructor(gameObject: GameObject) {
    for (let i in gameObject) {
      //@ts-ignore
      this[i] = gameObject[i];
    }
  }
  position = new Vector();
  acceleration = new Vector();
  velocity = new Vector();
  gravity: number | undefined;
  weight!: number;
  force: Vector = new Vector();
  hitBox = new Vector();
  elementType: any = null;
  drag: number = 0;
  cameraFollows: boolean = false;

  static defaultProps = {
    position: new Vector(),
    acceleration: new Vector(),
    velocity: new Vector(),
    gravity: 1,
    weight: 0,
    force: new Vector(),
    hitBox: new Vector(),
    elementType: null,
    drag: 0,
    cameraFollows: false
  };

  static propTypes = {
    position: PropTypes.instanceOf(Vector).isRequired,
    acceleration: PropTypes.instanceOf(Vector).isRequired,
    velocity: PropTypes.instanceOf(Vector).isRequired,
    gravity: PropTypes.number.isRequired,
    weight: PropTypes.number.isRequired,
    force: PropTypes.instanceOf(Vector).isRequired,
    hitBox: PropTypes.instanceOf(Vector).isRequired,
    drag: PropTypes.number.isRequired,
    cameraFollows: PropTypes.bool.isRequired
  };
}
