import React from "react";
import { loginEndpoint } from "../../utils/spotify";
import spotifyLogo from "../../image/Spotify_Logo_RGB_Green.png";
import "./Login.css";

const Login = () => {
  return (
    <div className='login__container'>
      <img className='login__logo' src={spotifyLogo} alt='Spotify Logo' />
      <a href={loginEndpoint}>
        <div className='login__button'>LOG IN</div>
      </a>
    </div>
  );
};

export default Login;
