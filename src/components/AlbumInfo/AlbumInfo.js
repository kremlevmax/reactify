import React from "react";
import "./AlbumInfo.css";

const AlbumInfo = ({ currentTrack, album }) => {
  const artists = [];
  album?.artists?.forEach((element) => {
    artists.push(element.name);
  });

  return (
    <div className='album-info__container'>
      <p className='album-info__name'>{currentTrack.name}</p>
      <p className='album-info__artist'>{artists?.join(", ")}</p>
      <p className='album-info__album'>{album?.name}</p>
      <p className='album-info__tracks-count'>
        Release Date: {album?.release_date}
      </p>
    </div>
  );
};

export default AlbumInfo;
