import React from 'react'
import "../Styles/MainMenu.css"
// import Categories from './Categories';
import Musics from '../Components/Musics';
import Artists from '../Components/Artists';
import NewRelease from '../Components/NewRelease';
import NewAlbum from '../Components/NewAlbum';
import TopBar from '../Components/TopBar';
import Categories from '../Components/Categories';
const Music = () => {
  return (
    <>
   
    <div className='mainContainer' style={{ overflowY: 'scroll', marginTop:"50px"}} >
    <TopBar/> 
          <Musics/> 
          <Artists/>
          <Categories/>
          <NewRelease/>
          <NewAlbum/>
        </div>
        </>
  )
}

export default Music