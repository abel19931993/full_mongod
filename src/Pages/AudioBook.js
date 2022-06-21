import React, { useEffect, useState } from 'react'
import "../Styles/MainMenu.css"
// import Categories from './Categories';

// import LovedArtist from '../Components/Artists';
import NewRelease from '../Components/NewRelease';
import Generes from '../Components/Generes';
import TopBar from '../Components/TopBar';
import Recent from '../Components/Audiobook/Recent';
import Entertainment from '../Components/Audiobook/Entertainment';
import Slider from '../Components/Slider';
import Technology from '../Components/Audiobook/Technology';
import Categories from '../Components/Audiobook/Categories';
import axios from 'axios';
const AudioBook = () => {
  const [allAudiobook,setAllAudiobook] = useState([]);
  useEffect(()=>{
    const getAudiobooks = async ()=>{
      try{
     const res = await axios.get(`http://localhost:5000/audiobook`);
     setAllAudiobook(res.data)
      }
      catch(err){
console.log(err)
      }
   
    }
    getAudiobooks()
  
  },[])
  return (
    <>

    <div className='mainContainer' style={{ overflowY: 'scroll', marginTop:"50px" }} >
        <TopBar/> 
        <Recent allAudiobook={allAudiobook}/>
        <Entertainment allAudiobook={allAudiobook}/> 
        <Technology allAudiobook={allAudiobook}/>
        <Categories allAudiobook={allAudiobook}/>
       
    </div>
        </>
  )
}

export default AudioBook