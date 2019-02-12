export default class Event {
  gameObject = null;

  physics = {
    forces: [],
    duration: null
  };
  audio = {
    soundTrack: ""
  };
  callback = null;
}
