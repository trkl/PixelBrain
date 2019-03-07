import { render, cleanup } from "react-testing-library";
import { constructMockHoc } from "react-mock-hoc-utils";
import React from "react";
import AudioManager from "./AudioManager";

const test = { playSound: jest.fn() };

// const AudioManager = constructMockHoc("AudioManager.js")
//                 .mock('../../../../Resource Manager/HOC/WithResources.js')
//                 .with({resourceManager })
//                 .create();

let soundPlayed = false;
window.HTMLMediaElement.prototype.play = sound => (soundPlayed = true);

describe("AudioManager plays sound", () => {
  it("PlaySound function works", () => {
    const audioManager = new AudioManager();
    audioManager.playSound("sfx_die.wav");
    expect(soundPlayed).toBeTruthy();
  });
});
