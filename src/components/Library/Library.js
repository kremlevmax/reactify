import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../../utils/spotify";
import { AiFillPlayCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
import Screen from "../Screen/Screen";
import "./Library.css";

const Library = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    apiClient.get("me/playlists").then((res) => setPlaylists(res.data.items));
  }, []);

  const navigate = useNavigate();

  const playPlaylist = (id) => {
    navigate("/player", { state: { id: id } });
  };

  return (
    <Screen>
      <div className='library__container'>
        <div className='library__playlists-container'>
          {playlists.map((playlist) => (
            <div
              key={playlist.id}
              className='library__playlist-container'
              onClick={() => playPlaylist(playlist.id)}
            >
              <img
                src={playlist.images[0].url}
                className='library__playlist-image'
                alt='Playlist Cover'
              />
              <p className='library__playlist-title'>{playlist.name}</p>
              <p className='library__playlist-tracks'>
                {playlist.tracks.total} Songs
              </p>
              <div className='library__playlist-fade'>
                <IconContext.Provider
                  value={{
                    size: "50px",
                    className: "library__playlist-play-icon",
                  }}
                >
                  <AiFillPlayCircle />
                </IconContext.Provider>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Screen>
  );
};

export default Library;
