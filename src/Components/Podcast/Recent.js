import React from 'react'
import { recent } from '../../Data'

import styled from 'styled-components'
import RecentItem from './RecentItem'
import { BASE_URL,BASE_URL_LOCAL} from '../../Env'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'
const Container = styled.div`
  overflow: hidden;
  width: 1220px;
  padding-left: 25px;
  margin-left: 1px;
  padding-right: 25px;
`
const Tetxt = styled.h3`
color:white ;
padding:20px 20px 20px 30px ;

`
const Recent = () => {
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
      {
        console.log(BASE_URL)
      }
      <Tetxt>Recent</Tetxt>
      <Container>
      <Slider {...settings}>
        {
           recent.map(item=>(
           <RecentItem item={item}  key={item.id}/>
            ))
        }
          </Slider>
    </Container>
      </>
    
  )
}

export default Recent