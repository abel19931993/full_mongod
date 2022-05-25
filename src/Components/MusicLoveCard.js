import React from 'react'
import { LoveMusic} from '../Data'
import styled from 'styled-components'
import MusicLoveCardItem from './MusicLoveCardItem'
import {FiChevronLeft} from 'react-icons/fi'
import {FiChevronRight} from 'react-icons/fi'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'
const Container = styled.div`

  /* display:flex;
  padding:0px 20px 20px 20px;
  justify-content:space-between; */
  overflow:hidden ;
  width:1115px ;
  padding-left:25px ;
  margin-left:1px ;
  padding-right:25px ;

`
const Tetxt = styled.h3`
color:white ;
padding:20px 0px 20px 20px ;

`
const Wrapper  =styled.div`
display:flex ;
width:40% ;
background-color: yellow;

`
const MusicLoveCard = () => {
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
    <Tetxt>Music you'll Love</Tetxt>
    <Container>
      {/* <Wrapper> */}
        <Slider {...settings}>
          
       {
          LoveMusic.map(item=>(
         <MusicLoveCardItem item={item}  key={item.id}/>
          ))
      } 
      </Slider>
      {/* </Wrapper> */}
     
  </Container>
    </>
     
      
  
    
)
}

export default MusicLoveCard