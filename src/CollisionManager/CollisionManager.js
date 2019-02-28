export default class CollisionManger {
  static _instance = null;

  static get instance() {
    if (CollisionManger._instance === null)
      CollisionManger._instance = new CollisionManger();
    return CollisionManger._instance;
  }

  gameObjects = [];

  add = collisionZone => {
    this.gameObjects.push(collisionZone);
  };
  remove = collisionZone =>
    this.gameObjects.filterInPlace(zone => zone !== collisionZone);

  collisionDetected(obj1, obj2) {
    const position1 = obj1.props.position;
    const position2 = obj2.props.position;
    const bottomRight1 = position1.plus(obj1.dimensions);
    const bottomRight2 = position2.plus(obj2.dimensions);
    return (
      position1.x < bottomRight2.x &&
      bottomRight1.x > position2.x &&
      position1.y < bottomRight2.y &&
      bottomRight1.y > position2.y
    );
  }

  handleCollisions = () => {
    const collisions = [];

    for (let i = 0, length = this.gameObjects.length; i < length; ++i) {
      const obj1 = this.gameObjects[i];
      for (let j = i + 1; j < length; ++j) {
        const obj2 = this.gameObjects[j];

        if (this.collisionDetected(obj1, obj2)) {
          collisions.push([
            obj1.props.parent.props.parent,
            obj2.props.parent.props.parent
          ]);
        }
      }
    }
    for (const collision of collisions) {
      collision.forEach(
        (element, idx) =>
          element.handleCollision &&
          element.handleCollision(collision[Number(!idx)])
      );
    }
  };
}

// eslint-disable-next-line no-extend-native
Array.prototype.filterInPlace = function(predicate) {
  for (let i = 0; i < this.length; ++i) {
    if (predicate(this[i])) {
      this[this.length - 1] = this[i];
      this.pop();
    }
  }
};
