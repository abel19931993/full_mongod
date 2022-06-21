import React from "react";
import "../Styles/LeftMenu.css";
import { FaEllipsisH, FoEllipsisH } from "react-icons/fa";

import pic from "../../src/Image/logo1.png";
import MenuList from "./MenuList";
import Menu from "./Menu";
// import MenuPlayList from "./MenuPlayList";
import TrackList from "./TrackList";
import PlayerComponent from "./PlayerComponent";
import { useSelector } from "react-redux";
const LeftMenu = () => {
  const tracks = useSelector((state) => state.music.tracks);
  const trackIndex = useSelector((state) => state.music.trackIndex);
  const episodes = useSelector((state) => state.podcast.episodes);
  const episodeIndex = useSelector((state) => state.podcast.episodeIndex);
  const chapters = useSelector((state) => state.audioBook.chapters);
  const chapterIndex = useSelector((state) => state.audioBook.chapterIndex);
  return (
    <div className="leftMenu">
      <div className="logoContainer">
        <img src={pic} />
        <h2>Awud</h2>
      </div>

      <Menu MenuObject={MenuList} />
      {
        console.log("Left",tracks)
      }
      {tracks.length != 0 ? (
        <PlayerComponent contents={tracks} index={trackIndex} />
      ) : episodes.length != 0 ? (
        <PlayerComponent contents={episodes} index={episodeIndex} />
      ) : chapters.length != 0 ? (
        <PlayerComponent contents={chapters} index={chapterIndex} />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default LeftMenu;
