import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import imageurl from "../Image/photo_2022-05-21_21-47-02.jpg";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { AllAudio } from "../Data";
import { addEpisode, removeEpsiode } from "../redux/playerRedux";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  
`;
const RowTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  color: whitesmoke ;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6px;
  transition: all 0.3s ease;
  :hover {
    background-color: whitesmoke;
    color: black ;
  }
`;
const RowList = styled.div`
  overflow-y: scroll;
  
`;
const TitleRowText = styled.div`
  justify-content: center;
  align-items: center;
  flex: 1;
  color: gray;
  overflow-y: hidden;
`;
const RowContainer = styled.div`
 color: whitesmoke ;
  display: flex;
  flex: 1;
  align-items: center;
`;
const ImageContainer = styled.div`
  margin: 6px;
`;
const Image = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 4px;
  object-fit: cover;
`;

const Button = styled.button`
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 24px;
  background: none;
  border: 1px solid;
  margin-right: 12px;
  width: 30px;
  height: 30px;
  color: whitesmoke;
  cursor: pointer;
  transition: all 0.3s ease;
  :hover {
    background-color: white;
    color: black;
  }
`;
const RowText = styled.h3``;
const DetailLists = () => {
  const episode = useSelector((state) => state.player);
  const indexs = useSelector((state)=>state.player.episodeIndex);

  const dispatch = useDispatch();
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [podcast, setPodcast] = useState([]);
  useEffect(() => {
    const getPodcast = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/podcast/${id}`);
        setPodcast(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPodcast();
  }, []);

  const [episodes, setEpisodes] = useState([]);
  useEffect(() => {
    const getPodcast = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/episode/${id}/epsiode`
        );

        setEpisodes(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPodcast();
  }, []);
  const handleClick = (index) => {
  
    if (episode.episodes.length >= 1) {
      dispatch(removeEpsiode());
    }

    dispatch(addEpisode({ episodes ,index}));
  
  };
  return (
    <Container>
      <RowTitle>
        <TitleRowText>Track</TitleRowText>
        <TitleRowText>Artists</TitleRowText>
        <TitleRowText>
          <AccessTimeIcon />
        </TitleRowText>
        <Button>
          <ShuffleIcon />
        </Button>
        <TitleRowText>Play Shuffle</TitleRowText>
      </RowTitle>
      <hr />
      <RowList>
        {episodes.map((p,index) => (
          <Row onClick={()=>handleClick(index)} >
            <RowContainer>
              <ImageContainer>
                <Image src={p.image}></Image>
              </ImageContainer>
              <RowText>{p.episode_name}</RowText>
            </RowContainer>
            <RowContainer>
              <RowText>{podcast.artist_name}</RowText>
            </RowContainer>
            <RowContainer>
              <RowText>{p.episode_length}</RowText>
            </RowContainer>
            <RowContainer>
              <Button>
                <PlayArrowIcon />
              </Button>
            </RowContainer>
          </Row>
        ))}
      </RowList>
    </Container>
  );
};

export default DetailLists;
