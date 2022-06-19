import React from "react";
import styled from "styled-components";
import imageurl from "../Image/photo_2022-05-21_21-47-02.jpg";
import { BASE_URL,BASE_URL_LOCAL} from '../Env'
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 4px auto;
  align-items: center;
`;
const ImageContainer = styled.div`
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: inset 6px 6px 12px rgb(0, 0, 0, 0.6);
`;
const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
`;
const Title = styled.h3`
  color: #fff;
  font-size: 24px;
  /* text-shadow: 6px 6px 12px rgb(0, 0, 0, 0.6); */
  align-items: center;
  margin-bottom: 6px;
  text-overflow: clip;
`;
const ArtistTitle = styled.h4`
  color: #fff;
  font-size: 12px;
  text-shadow: 6px 6px 12px rgb(0, 0, 0, 0.6);
  align-items: center;
  margin-bottom: 6px;
`;

const PlayerDetails = (props) => {
 
  return (
    <Container>
      <ImageContainer>
        <Image src={`${BASE_URL}${props.audio.image}`}></Image>
      </ImageContainer>

      <marquee direction="right" scrollamount="3">
        <Title>{props.audio.episode_name}</Title>
      </marquee>
      <ArtistTitle>{props.audio.artist}</ArtistTitle>
    </Container>
  );
};

export default PlayerDetails;