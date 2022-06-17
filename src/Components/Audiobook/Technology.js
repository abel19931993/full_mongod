import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import TechnologyItem from './TechnologyItem'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Container = styled.div`
  overflow: hidden;
  width: 1115px;
  padding-left: 25px;
  margin-left: 1px;
  padding-right: 25px;
`
const Tetxt = styled.h3`
color:white ;
padding:20px 20px 0px 20px ;

`
const Technology = () => {
  const [technologyPodcast, setTechnologyPodcast] = useState([]);
  useEffect(() => {
    const getPodcast = async () => {
      try {
        const res = await axios.get(
        'http://localhost:5000/podcast/?category=Technology'
        );
        setTechnologyPodcast(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPodcast();
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
      <Tetxt>Technology</Tetxt>
      <Container>
      <Slider {...settings}>
        {
           technologyPodcast.map(item=>(
           < TechnologyItem item={item}  key={item.id}   podcastItem={item._id} />
            ))
        }
          </Slider>
    </Container>
      </>
    
  )
}

export default Technology