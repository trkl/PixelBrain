import GameObject from "../GameObject/GameObjectBase/GameObject";
import Vector from "../Vector/Vector";

interface Physics {
  forces: Array<Vector>;
  duration: number;
}

class Audio {
  soundTrack: string = "";
}

export default interface Event {
  gameObject: GameObject;
  // end showing wether this is an ending event or starting
  end: boolean;

  physics: Physics;

  audio: Audio;

  callback: (() => void) | null;
}
