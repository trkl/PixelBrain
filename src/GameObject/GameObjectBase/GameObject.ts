import Vector from "./../../Vector/Vector";
import PropTypes, { element } from "prop-types";
import DecInc from "../DecInc";
import { type } from "os";

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
  forces: Vector[] = [];
  hitBox = new Vector();
  elementType: any = null;

  static defaultProps = {
    position: new Vector(),
    acceleration: new Vector(),
    velocity: new Vector(),
    gravity: 1,
    weight: 0,
    forces: [],
    hitBox: new Vector(),
    elementType: null
  };

  static propTypes = {
    position: PropTypes.instanceOf(Vector).isRequired,
    acceleration: PropTypes.instanceOf(Vector).isRequired,
    velocity: PropTypes.instanceOf(Vector).isRequired,
    gravity: PropTypes.number.isRequired,
    weight: PropTypes.number.isRequired,
    forces: PropTypes.arrayOf(PropTypes.instanceOf(Vector)).isRequired,
    hitBox: PropTypes.instanceOf(Vector).isRequired
  };
}
