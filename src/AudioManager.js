import React, { Component } from 'react';
import WithResources from './Resource Manager/HOC/WithResources'

class AudioManager extends React.Component{
    constructor(props) {
        super(props);
        this.playSound = this.playSound.bind(this);
      }
      playSound(sound) 
      {
        var audio = new Audio(sound);
        audio.play();
      }
    }

export default WithResources(AudioManager);