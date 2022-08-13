import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import apiClient from "../../utils/spotify";
import Screen from "../Screen/Screen";
import SongCard from "../SongCard/SongCard";
import SongsQueue from "../SongsQueue/SongsQueue";
import "./Player.css";

const Player = () => {
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      apiClient.get(`playlists/${location.state?.id}/tracks`).then((res) => {
        setTracks(res.data.items);
        setCurrentTrack(res.data.items[0].track);
      });
    }
  }, [location.state]);

  useEffect(() => {
    setCurrentTrack(tracks[currentIndex]?.track);
  }, [currentIndex, tracks]);

  return (
    <Screen>
      <div className='player__container'>
        <div className='player__left-part'></div>
        <div className='player__right-part'>
          <SongCard currentTrack={currentTrack} album={currentTrack?.album} />
          <SongsQueue tracks={tracks} setCurrentIndex={setCurrentIndex} />
        </div>
      </div>
    </Screen>
  );
};

export default Player;
