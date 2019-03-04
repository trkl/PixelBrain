import React, { Component } from "react";
import WithResources from "./Resource Manager/HOC/WithResources";

class AudioManager extends React.Component {
  constructor(props) {
    super(props);
    this.playSound = this.playSound.bind(this);
    this.resourceManager = props.resourceManager;
  }

  playSound(sound) {
    var audio = new Audio(this.resourceManager.getAudioPath(sound));
    // var audio = new Audio(this.props.resourceManager.getAudioPath(sound));
    audio.play();
  }
}

export default WithResources(AudioManager);
