export default class Event {
  gameObject = null;
  // end showing wether this is an ending event or starting
  end = false;

  physics = {
    forces: [],
    duration: null
  };

  audio = {
    soundTrack: ""
  };

  callback = null;
}
