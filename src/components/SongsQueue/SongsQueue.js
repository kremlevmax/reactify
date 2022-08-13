import React from "react";
import "./SongsQueue.css";

const SongsQueue = ({ tracks, setCurrentIndex }) => {
  const trackList = tracks.map((track, index) => {
    const minutes = Math.floor(track?.track.duration_ms / 60000);
    const seconds = ((track?.track.duration_ms % 60000) / 1000).toFixed(0);

    return (
      <div
        className='song-queue__track'
        key={track?.track.id}
        onClick={() => setCurrentIndex(index)}
      >
        <span>{track?.track.name}</span>
        <span>{minutes + ":" + (seconds < 10 ? "0" : "") + seconds}</span>
      </div>
    );
  });

  return (
    <div className='song-queue__container'>
      <p className='song-queue__title'>Up Next</p>
      <div className='song-queue__list'>{trackList}</div>
    </div>
  );
};

export default SongsQueue;
