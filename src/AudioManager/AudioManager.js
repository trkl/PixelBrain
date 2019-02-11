import React, { Component } from 'react';
import resourceManager from '../Resource Manager/Resource Manager';

class AudioManager extends React.Component{
    constructor(props) {
        super(props);
        this.playSound = this.playSound.bind(this);
        this.resourceManager = new resourceManager();
      }

      playSound(sound) {
        var audio = new Audio(this.resourceManager.getAudioPaths(sound));
        audio.play();
      }
    }

export default AudioManager;