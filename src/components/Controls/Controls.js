import React from "react";
import "./Controls.css";
import { IconContext } from "react-icons";
import { FaPause } from "react-icons/fa";
import { IoPlaySkipBack, IoPlaySkipForward, IoPlay } from "react-icons/io5";

export default function Controls({
  isPlaying,
  setIsPlaying,
  handleNext,
  handlePrev,
}) {
  return (
    <IconContext.Provider value={{ size: "35px" }}>
      <div className='controls__container'>
        <span className='controls__button' onClick={handlePrev}>
          <IoPlaySkipBack />
        </span>
        <span
          className='controls__button'
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <FaPause /> : <IoPlay />}
        </span>
        <span className='controls__button' onClick={handleNext}>
          <IoPlaySkipForward value={{ className: "controls__button" }} />
        </span>
      </div>
    </IconContext.Provider>
  );
}
