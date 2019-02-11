import React, { Component } from 'react';

class AudioManager extends React.Component{
    constructor(props) {
        super(props);
        this.sound = props.sound;
        this.playSound = this.playSound.bind(this);
      }

      playSound() 
      {
        console.log(this.sound)
        var audio = new Audio(this.sound);
        audio.play();
        console.log(audio)
        console.log(this.sounds)
      }
    }

export default AudioManager ;