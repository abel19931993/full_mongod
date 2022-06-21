import React, { useEffect, useState } from 'react'

import styled from 'styled-components'
import ArtistItem from './ArtistItem'
import axios from 'axios'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'
import { BASE_URL_LOCAL ,BASE_URL} from '../Env'
const Container = styled.div`
 overflow:hidden ;
  width:1220px ;
  padding-left:25px ;
  margin-left:1px ;
  padding-right:25px ;
`
const Tetxt = styled.h3`
color:white ;
padding:20px 20px 0px 30px ;

`
const Artists = () => {
  const [artists,setArtists] = useState([])
  useEffect(()=>{ 
    const getArtists = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL_LOCAL}/music`,
        );
        const result = res.data.reduce((finalArray,current)=>{
          let obj= finalArray.find((item)=>item.artist_name === current.artist_name);
          
          if(obj)
          {
            
            return finalArray;
          }
          else{
          
            return finalArray.concat([current])
          }
        },[])
        setArtists(result);
      } catch (err) {
        console.log(err);
      }
    };
    getArtists();
  }, []);
  const settings = {
    // lazyLoad:true,
    infinite: false,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 4,
    // autoplay:true,
    // speed:2000,
    // autoplaySpeed:2000,
    // cssEase:"linear"
  };
  return (
      <>
     
      <Tetxt>Artists</Tetxt>
      <Container>
      <Slider {...settings}>
        {
          
            artists.map((item,index)=>(
           <ArtistItem item={item} artists={artists} artist_name={item.artist_name} index={index} key={item.id}/>
            ))
        }
         </Slider>
    </Container>
      </>
    
  )
}

export default Artists