import Vector from "../Vector/Vector";

export interface Physics {
  force: Vector;
  duration: number;
  elapsedTime: number;
  started: boolean;
}

<<<<<<< HEAD
export interface Audio {
  soundTrack: string;
=======
export class Audio {
  soundTrack: string = "";
>>>>>>> dev
}

export default interface Event {
  gameObject: any;
  // end showing wether this is an ending event or starting
  end: boolean;

  physics: Physics;

  audio: Audio;

  callback: (() => void) | null;
}
