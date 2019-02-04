export enum State {
  solid,
  walkThrough
}

export default class GameObject {
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

  state = State.solid;
}
