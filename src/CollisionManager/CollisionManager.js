export default class CollisionManger {
  static _instance = null;

  static get instance() {
    if (CollisionManger._instance === null)
      CollisionManger._instance = new CollisionManger();
    return CollisionManger._instance;
  }

  gameObjects = [undefined];

  add = collisionZone => {
    let i = -1;
    while (this.gameObjects[++i] !== undefined) {
      this.gameObjects[i] = collisionZone;
      return i;
    }
    return this.gameObjects.push(collisionZone) - 1;
  };

  remove = number => (this.gameObjects[number] = undefined);

  collisionDetected(obj1, obj2) {
    const position1 = obj1.position.plus(obj1.offset);
    const position2 = obj2.position.plus(obj2.offset);
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
      if (!obj1) continue;
      for (let j = i + 1; j < length; ++j) {
        const obj2 = this.gameObjects[j];
        if (!obj2) continue;
        if (this.collisionDetected(obj1, obj2)) {
          if (obj1.collision.has(obj2)) continue;

          collisions.push([
            {
              object: obj1.props.parent,
              collisionZone: obj2
            },
            {
              object: obj2.props.parent,
              collisionZone: obj1
            }
          ]);
          obj1.collision.add(obj2);
        } else {
          if (obj1.collision.delete(obj2)) {
            const gameObj1 = obj1.props.parent;
            const gameObj2 = obj2.props.parent;

            gameObj1.onCollisionEnd &&
              gameObj1.onCollisionEnd({
                object: gameObj2,
                collisionZone: obj2
              });
            gameObj2.onCollisionEnd &&
              gameObj2.onCollisionEnd({
                object: gameObj1,
                collisionZone: obj1
              });
          }
        }
      }
    }
    for (const collision of collisions) {
      collision.forEach((element, idx) => {
        const { object } = element;
        object.handleCollision &&
          object.handleCollision(collision[Number(!idx)]);
      });
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
