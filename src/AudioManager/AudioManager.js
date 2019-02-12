import React, { Component } from 'react';
import resourceManager from '../Resource Manager/Resource Manager';
import WithResources from '../Resource Manager/HOC/WithResources';

class AudioManager extends React.Component{
    constructor(props) {
        super(props);
        this.playSound = this.playSound.bind(this);
        this.resourceManager = new resourceManager();
      }

<<<<<<< HEAD
      playSound(sound) 
      {
        console.log(sound)
        var audio = new Audio(sound);
=======
      playSound(sound) {
        var audio = new Audio(this.resourceManager.getAudioPath(sound));
        // var audio = new Audio(this.props.resourceManager.getAudioPath(sound));
>>>>>>> 767b5c90e902d5d662d079ac72b8cbd7ed4621e3
        audio.play();
      }
    }

export default AudioManager;