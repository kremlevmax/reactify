import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Home.css";

//Components
import Library from "../Library/Library";
import Player from "../Player/Player";
import Favorites from "../../screens/Favorites";
import Feed from "../../screens/Feed";
import Sidebar from "../Sidebar/Sidebar";
import Login from "../Login/Login";
import { useState } from "react";
import { useEffect } from "react";
import { setClientToken } from "../../utils/spotify";

export const Home = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const localStorageToken = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";

    if (!localStorageToken && hash) {
      const hashToken = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", hashToken);
      setToken(hashToken);
      setClientToken(hashToken);
    } else {
      setToken(localStorageToken);
      setClientToken(localStorageToken);
    }
  }, []);

  return !token ? (
    <Login />
  ) : (
    <Router>
      <div className='home__container'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Library />} />
          <Route path='/feed' element={<Feed />} />
          <Route path='/library' element={<Library />} />
          <Route path='/player' element={<Player />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
};
