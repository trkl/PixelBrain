import React, { Component } from 'react';

class AudioManager extends React.Component{
    constructor(props) {
        super(props);
      }

      playSound(sound) 
      {
        console.log(sound)
        var audio = new Audio(sound);
        audio.play();
        console.log("audio")
      }
    }

export default AudioManager ;