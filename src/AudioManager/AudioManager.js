import React, { Component } from 'react';
import sounda from './sounds/sfx_wing.wav'

class AudioManager extends React.Component{
    constructor(props) {
        super(props);
        this.playSound = this.playSound.bind(this);
      }

      playSound(sound) 
      {
        console.log(sound)
        var audio = new Audio(sounda);
        audio.play();
        console.log(audio)
        console.log(this.sounds)
      }
    }

export default AudioManager ;