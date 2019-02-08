import React, { Component } from 'react';

class AudioManager extends React.Component{
    constructor(props) {
        super(props);
        this.playSound = this.playSound.bind(this);
      }
      playSound(sound) 
      {
        console.log("audio")
        var audio = new Audio(sound);
        audio.play();
        console.log("audio")
      }
    }

export default AudioManager ;