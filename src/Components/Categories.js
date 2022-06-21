import React from 'react'
import { AllCatgories } from '../Data'
import styled from 'styled-components'
import CategoryItem from './CategoryItem'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'
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
const Categories = () => {
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
      <Tetxt>All Categories</Tetxt>
      <Container>
      <Slider {...settings}>
        {
          
            AllCatgories.map(item=>(
           <CategoryItem item={item}  key={item.id}/>
            ))
        }
         </Slider>
    </Container>
      </>
    
  )
}

export default Categories