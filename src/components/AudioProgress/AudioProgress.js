import React, { useState, useEffect, useCallback } from "react";
import "./AudioProgress.css";
import ProgressCircle from "../ProgressCircle/ProgressCircle";
import WaveAnimation from "../WaveAnimation/WaveAnimation";
import Controls from "../Controls/Controls";
import { useRef } from "react";

const AudioProgress = ({
  currentTrack,
  tracks,
  currentIndex,
  setCurrentIndex,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);
  var audioSrc = tracks[currentIndex]?.track.preview_url;

  const audioRef = useRef(new Audio(tracks[0]?.track.preview_url));

  const intervalRef = useRef();

  const { duration } = audioRef.current;

  const currentPercentage = duration ? (trackProgress / duration) * 100 : 0;

  const startTimer = useCallback(() => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        handleNext();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  }, [audioRef]);

  useEffect(() => {
    if (audioRef.current.src) {
      if (isPlaying) {
        audioRef.current.play();
        startTimer();
      } else {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    } else {
      if (isPlaying) {
        audioRef.current = new Audio(audioSrc);
        audioRef.current.play();
        startTimer();
      } else {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    }
  }, [isPlaying, audioSrc, startTimer]);

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(audioSrc);
    setTrackProgress(audioRef.current.currentTime);
    audioRef.current.play();
    setIsPlaying(true);
  }, [currentIndex, audioSrc]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  const handleNext = () => {
    if (currentIndex < tracks.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else setCurrentIndex(0);
  };

  const handlePrev = () => {
    if (currentIndex - 1 < 0) setCurrentIndex(tracks.length - 1);
    else setCurrentIndex(currentIndex - 1);
  };

  const addZero = (n) => {
    return n > 9 ? "" + n : "0" + n;
  };

  const artists = [];
  currentTrack?.album?.artists.forEach((artist) => {
    artists.push(artist.name);
  });

  return (
    <div className='audio-progress__container'>
      <div className='audio-progress__left-body'>
        <ProgressCircle
          percentage={currentPercentage}
          isPlaying={true}
          image={currentTrack?.album?.images[0]?.url}
          size={300}
          color='#3a0ca3'
        />
      </div>
      <div className='audio-progress__right-body'>
        <p className='audio-progress__song-title'>{currentTrack?.name}</p>
        <p className='audio-progress__song-artist'>{artists.join(" | ")}</p>

        <div className='song-duration'>
          <p className='duration'>0:{addZero(Math.round(trackProgress))}</p>
          <div className='song-duration__line'>
            <div
              className='song-duration__inner'
              style={{ width: `${currentPercentage}%` }}
            ></div>
          </div>
          <p className='duration'>0:30</p>
        </div>
        <WaveAnimation isPlaying={isPlaying} />
        <Controls
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          handleNext={handleNext}
          handlePrev={handlePrev}
          tracks={tracks}
        />
      </div>
    </div>
  );
};

export default AudioProgress;
