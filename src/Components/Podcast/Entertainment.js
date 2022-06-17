import React, { useEffect, useState } from "react";
import styled from "styled-components";
import EntertainmentItem from "./EntertainmentItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
const Container = styled.div`
  overflow: hidden;
  width: 1220px;
  padding-left: 25px;
  margin-left: 1px;
  padding-right: 25px;
`;
const Tetxt = styled.h3`
  color: white;
  padding: 20px 20px 20px 30px;
`;
const Entertainment = () => {
  
  const [entertainmentPodcast, setEntertainmentPodcast] = useState([]);
  useEffect(() => {
    const getPodcast = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/podcast/?category=Entertainment"
        );
        setEntertainmentPodcast(res.data);
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
      <Tetxt>Entertainment</Tetxt>
      <Container>
        <Slider {...settings}>
          {entertainmentPodcast.map((item) => (
            <EntertainmentItem
              item={item}
              podcastItem={item._id}
              key={item.id}
            />
          ))}
        </Slider>
      </Container>
    </>
  );
};

export default Entertainment;
