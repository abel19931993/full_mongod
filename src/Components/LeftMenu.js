import React from 'react'
import "../Styles/LeftMenu.css"
import {FaEllipsisH, FoEllipsisH} from 'react-icons/fa'

import pic from "../../src/Image/logo1.png";
import MenuList from './MenuList';
import Menu from './Menu';
import MenuPlayList from './MenuPlayList';
import TrackList from "./TrackList"
import PlayerComponent from './PlayerComponent';
import { useSelector } from 'react-redux';
const LeftMenu = () => {
    const episodes =  useSelector((state) => state.player.episodes);
    const index = useSelector((state)=>state.player.episodeIndex)
    return (
        
        <div className='leftMenu'>
      
            <div className='logoContainer'>
               <img  src={pic} />
                <h2>Awud</h2>
             
                </div>
           
            
            <Menu  MenuObject={MenuList}/>
       
          { episodes.length !=0? <PlayerComponent episodes={episodes} index={index}/>:<div></div>}
        </div>
    )
}

export default LeftMenu
