import React, { useEffect } from 'react'
import { LoveMusic} from '../Data'
import styled from 'styled-components'
import { BASE_URL,BASE_URL_LOCAL} from '../Env'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'
import { NewReleased } from '../Data'
import NewReleaseItem from './NewReleaseItem'
import { useState } from 'react'
import axios from 'axios'
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
const NewRelease = () => {
  
  const [musics,setMusics] = useState([]);
  useEffect(()=>{ 
  const getMusic = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL_LOCAL}/music/?new=new`
      
      );
      setMusics(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  getMusic();
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
      <Tetxt>New Release Music</Tetxt>
      <Container>
      <Slider {...settings}>
        {
            musics.map((item,index)=>(
           <NewReleaseItem item={item} Musics={musics} index={index} key={item.id}/>
            ))
        }
         </Slider>
    </Container>
      </>
    
  )
}

export default NewRelease