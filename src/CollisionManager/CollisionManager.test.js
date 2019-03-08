import CollisionManager from "./CollisionManager";
import Vector from "../Vector/Vector";
import { isMainThread } from "worker_threads";

describe("CollisionManager", () => {
  let collisionZone, collisionZone2, collisionZone3;
  beforeEach(() => {
    collisionZone = {
      props: { parent: {} },
      dimensions: new Vector([20, 20]),
      position: new Vector(),
      offset: new Vector(),
      collision: new Set()
    };
    collisionZone2 = {
      props: { parent: {} },
      dimensions: new Vector([20, 20]),
      position: new Vector(),
      offset: new Vector(),
      collision: new Set()
    };
    collisionZone3 = {
      props: { parent: {} },
      dimensions: new Vector([20, 20]),
      position: new Vector(),
      offset: new Vector(),
      collision: new Set()
    };
    CollisionManager.instance.gameObjects = [];
  });
  it("adding and removing collisionZone should work", () => {
    const index = CollisionManager.instance.add(collisionZone);
    expect(CollisionManager.instance.gameObjects.length).toEqual(1);
    expect(CollisionManager.instance.gameObjects[index]).toBe(collisionZone);
    CollisionManager.instance.remove(index);
    expect(CollisionManager.instance.gameObjects[index]).toBe(undefined);
  });
  it("Collision should be detected if two collisionZones overLap", () => {
    const idx1 = CollisionManager.instance.add(collisionZone);
    const idx2 = CollisionManager.instance.add(collisionZone2);
    CollisionManager.instance.handleCollisions();
    expect(collisionZone.collision.has(collisionZone2)).toBeTruthy();
  });
  it("Collisions should trigger handleCollision on parent of both colliders", () => {
    collisionZone.props.parent.handleCollision = jest.fn();
    collisionZone2.props.parent.handleCollision = jest.fn();
    const idx1 = CollisionManager.instance.add(collisionZone);
    const idx2 = CollisionManager.instance.add(collisionZone2);
    CollisionManager.instance.handleCollisions();
    expect(collisionZone.props.parent.handleCollision).toHaveBeenCalledTimes(1);
    expect(collisionZone2.props.parent.handleCollision).toHaveBeenCalledTimes(
      1
    );
  });
  it("no collision should be triggered", () => {
    collisionZone.props.parent.handleCollision = jest.fn();
    collisionZone2.props.parent.handleCollision = jest.fn();
    collisionZone.offset = new Vector([20, 20]);
    const idx1 = CollisionManager.instance.add(collisionZone);
    const idx2 = CollisionManager.instance.add(collisionZone2);
    CollisionManager.instance.handleCollisions();
    expect(collisionZone.props.parent.handleCollision).not.toHaveBeenCalled();
    expect(collisionZone2.props.parent.handleCollision).not.toHaveBeenCalled();
  });
  it("collision should occur first, then not occur", () => {
    collisionZone.props.parent.handleCollision = jest.fn();
    collisionZone2.props.parent.handleCollision = jest.fn();
    collisionZone.props.parent.onCollisionEnd = jest.fn();
    collisionZone2.props.parent.onCollisionEnd = jest.fn();
    const idx1 = CollisionManager.instance.add(collisionZone);
    const idx2 = CollisionManager.instance.add(collisionZone2);
    CollisionManager.instance.handleCollisions();
    expect(collisionZone.props.parent.handleCollision).toHaveBeenCalledTimes(1);
    expect(collisionZone2.props.parent.handleCollision).toHaveBeenCalledTimes(
      1
    );
    collisionZone.offset = new Vector([20, 20]);
    CollisionManager.instance.handleCollisions();
    expect(
      collisionZone.props.parent.handleCollision
    ).not.toHaveBeenCalledTimes(2);
    expect();
    expect(
      collisionZone2.props.parent.handleCollision
    ).not.toHaveBeenCalledTimes(2);
  });

  it("adding removing filling in undefined", () => {
    const idx = CollisionManager.instance.add(collisionZone);
    CollisionManager.instance.remove(idx);
    const idx1 = CollisionManager.instance.add(collisionZone2);
    expect(idx).toEqual(idx1);
  });

  it("running handleCollision with undefined in front", () => {
    const idx = CollisionManager.instance.add(collisionZone);
    const idx1 = CollisionManager.instance.add(collisionZone2);
    const idx2 = CollisionManager.instance.add(collisionZone3);
    CollisionManager.instance.remove(idx);
    CollisionManager.instance.handleCollisions();
    expect(collisionZone2.collision.has(collisionZone3)).toBeTruthy();
  });
  it("running handleCollision with undefined in back", () => {
    const idx = CollisionManager.instance.add(collisionZone);
    const idx1 = CollisionManager.instance.add(collisionZone2);
    const idx2 = CollisionManager.instance.add(collisionZone3);
    CollisionManager.instance.remove(idx2);
    CollisionManager.instance.handleCollisions();
    CollisionManager.instance.handleCollisions();

    expect(collisionZone.collision.has(collisionZone2)).toBeTruthy();
  });
});
