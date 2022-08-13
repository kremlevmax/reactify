import React from "react";
import AlbumCover from "../AlbumCover/AlbumCover";
import AlbumInfo from "../AlbumInfo/AlbumInfo";
import "./SongCard.css";

const SongCard = ({ currentTrack, album }) => {
  return (
    <div className='song-card__container'>
      <AlbumCover url={album?.images[0]?.url} />
      <AlbumInfo currentTrack={currentTrack} album={album} />
    </div>
  );
};

export default SongCard;
