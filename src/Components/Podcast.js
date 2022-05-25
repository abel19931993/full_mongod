import React from 'react'
import "../Styles/MainMenu.css"
// import Categories from './Categories';
import MusicLoveCard from './MusicLoveCard';
import LovedArtist from './LovedArtist';
import NewRelease from './NewRelease';
import Generes from './Generes';
import TopBar from './TopBar';
import Recent from './Podcast/Recent';
import Entertainment from './Podcast/Entertainment';
import Slider from './Slider';
import Technology from './Podcast/Technology';
import Categories from './Podcast/Categories';

const Podcast = () => {
  return (
    <div className='mainContainer' style={{ overflowY: 'scroll', }} >
         <TopBar/> 
        <Recent/>
        <Entertainment/> 
        <Technology/>
        <Categories/>
        </div>
    
  )
}

export default Podcast