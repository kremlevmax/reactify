import React, { useState, useEffect } from "react";
import "./Sidebar.css";

//Components
import SidebarButton from "../SidebarButton/SidebarButton";

//Icons
import { MdFavorite, MdSpaceDashboard } from "react-icons/md";
import { FaGripfire, FaPlay, FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import apiClient from "../../utils/spotify";

const Sidebar = () => {
  const [image, setImage] = useState("https://via.placeholder.com/50");

  useEffect(() => {
    apiClient.get("me").then((res) => setImage(res.data.images[0].url));
  }, []);

  return (
    <div className='sidebar__container'>
      <img src={image} className='sidebar__profile-img' alt='profile-img' />
      <div>
        <SidebarButton title='Feed' to='/feed' icon={<MdSpaceDashboard />} />
        <SidebarButton title='Trending' to='/trending' icon={<FaGripfire />} />
        <SidebarButton title='Player' to='/player' icon={<FaPlay />} />
        <SidebarButton
          title='Favorites'
          to='/favorites'
          icon={<MdFavorite />}
        />
        <SidebarButton title='Library' to='/' icon={<IoLibrary />} />
      </div>
      <SidebarButton title='Sign Out' to='' icon={<FaSignOutAlt />} />
    </div>
  );
};

export default Sidebar;
