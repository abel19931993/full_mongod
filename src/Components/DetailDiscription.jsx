import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import imageurl from "../Image/photo_2022-05-21_21-47-02.jpg";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
//import { addEpisode, removeEpsiode } from "../redux/playerRedux";
import { Link } from "react-router-dom";
import { BASE_URL, BASE_URL_LOCAL } from "../Env";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #121217;
`;
const ImageContainer = styled.div`
  flex-basis: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const Desc = styled.div`
  flex-basis: 75%;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 36px;
  margin: 24px 0;
  color: whitesmoke;
`;
const Image = styled.img`
  width: 250px;
  height: 250px;
  margin: 15px;
  object-fit: cover;
  border-radius: 16px;
`;
const SubTitle = styled.h3`
  margin-bottom: 12px;
  font-size: 16px;
  color: whitesmoke;
`;
const DetailText = styled.p`
  margin-bottom: 6px;
  font-size: 12px;
  color: whitesmoke;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
`;
const Button = styled.button`
  border-radius: 24px;
  border: 1px solid;
  background-color: #ffb36c;
  width: 150px;
  height: 50px;
  transition: all 0.3s ease;
  :hover {
    background-color: white;
    color: black;
    transform: scale(1.1);
  }
`;
const SubButton = styled.div`
  margin-left: 24px;
  color: white;
`;

const DeatailDiscription = ({ Contents}) => {
  // const episode = useSelector((state) => state.player);
  const dispatch = useDispatch();
  const location = useLocation();
  const type = location.pathname.split("/")[1];
  
  const [episodes, setEpisodes] = useState([]);
  useEffect(() => {
    // const getPodcast = async () => {
    //   try {
    //     const res = await axios.get(
    //       `${BASE_URL}/episode/${id}/epsiode`
    //     );
    //     setEpisodes(res.data);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // getPodcast();
  }, []);
  const handleClick = (index) => {
    // if (episode.episodes.length >= 1) {
    //   dispatch(removeEpsiode());
    // }
    // dispatch(addEpisode({ episodes,index }));
  };
if(type === "music")
{ 
  return (
    <Container>
      <ImageContainer>
        {/* <Image src={`${BASE_URL}${Contents.image}`} /> */}
        <Image src={Contents.album_image} />
      </ImageContainer>
      <Desc>
        <Title>{Contents.artist_name}</Title>
        <SubTitle>{Contents.album_title}</SubTitle>
        <DetailText>{Contents.album_description}</DetailText>
        <ButtonContainer>
          <Button onClick={() => handleClick(0)}>
            <PlayArrowIcon />
          </Button>
          <SubButton>
            <FavoriteIcon />
          </SubButton>
        </ButtonContainer>
      </Desc>
    </Container>
  );
}
else if(type === "podcast") {
  return (
    <Container>
      <ImageContainer>
        {/* <Image src={`${BASE_URL}${Contents.image}`} /> */}
        <Image src={Contents.image} />
      </ImageContainer>
      <Desc>
        <Title>{Contents.podcasters}</Title>
        <SubTitle>{Contents.title}</SubTitle>
        <DetailText>{Contents.podcast_description}</DetailText>
        <ButtonContainer>
          <Button onClick={() => handleClick(0)}>
            <PlayArrowIcon />
          </Button>
          <SubButton>
            <FavoriteIcon />
          </SubButton>
        </ButtonContainer>
      </Desc>
    </Container>
  );
}
else{
  return (
    <Container>
      <ImageContainer>
        {/* <Image src={`${BASE_URL}${Contents.image}`} /> */}
        <Image src={Contents.image} />
      </ImageContainer>
      <Desc>
        <Title>{Contents.podcasters}</Title>
        <SubTitle>{Contents.title}</SubTitle>
        <DetailText>{Contents.podcast_description}</DetailText>
        <ButtonContainer>
          <Button onClick={() => handleClick(0)}>
            <PlayArrowIcon />
          </Button>
          <SubButton>
            <FavoriteIcon />
          </SubButton>
        </ButtonContainer>
      </Desc>
    </Container>
  );
}
}
export default DeatailDiscription;
