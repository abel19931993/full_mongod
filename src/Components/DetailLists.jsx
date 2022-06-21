import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import imageurl from "../Image/photo_2022-05-21_21-47-02.jpg";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import { GoPlus } from "react-icons/go";
import { MdOutlineFavoriteBorder } from "react-icons/md";

import axios from "axios";
import { useLocation } from "react-router-dom";
import { AllAudio } from "../Data";
//import { addEpisode, removeEpsiode } from "../redux/playerRedux";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { BASE_URL, BASE_URL_LOCAL } from "../Env";
import { width } from "@mui/system";
import { podcastPlayerActions } from "../store/podcast-slice";
import { musicPlayerActions } from "../store/music-slice";
import { audioBookPlayerActions } from "../store/audioBook-slice";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;
const RowTitle = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 5px;
  color: whitesmoke;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6px;
  transition: all 0.3s ease;
  :hover {
    background-color: #191922;
    color: white;
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
  color: whitesmoke;
  display: flex;
  flex: 1;
  align-items: center;
`;
const Icon = styled.div`
  z-index: 2;
  width: 30px;
  height: 30px;
  color: white;
  border-radius: 50%;
  background-color: #191922;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.2);
    background-color: #72727d;
  }
`;
const Info = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-between;
`;
const InfoText = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;
const InfoBut = styled.div`
  padding-right: 10px;
  display: flex;
  justify-content: center;
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
const DetailLists = ({id}) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [music, setMusic] = useState([]);
  const [episodes,setEpisodes] = useState([])
  const [audiobook,setAudiobook] = useState([])
  if(location.pathname.split("/")[1] === "listArtist")
  {
    const artist_name = location.pathname.split("/")[2];
    useEffect(() => {
      const getMusic = async () => {
        try {
          const res = await axios.get(`${BASE_URL_LOCAL}/music/${artist_name}`);
          setMusic(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      getMusic();
    }, []);
  }
  else if(location.pathname.split("/")[1] === "listCategory")
  {
    const category = location.pathname.split("/")[2];
    useEffect(() => {
      const getMusic = async () => {
        try {
          const res = await axios.get(
            `${BASE_URL_LOCAL}/music/?category=${category}`
          );
          setMusic(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      getMusic();
    }, []);
  }
  else if(location.pathname.split("/")[1] === "music")
  {
    useEffect(() => {
      const getMusic = async () => {
        try {
          const res = await axios.get(
            `${BASE_URL_LOCAL}/music/albums/${id}`
          );
          setMusic(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      getMusic();
    }, []);
  }
 
  
 

  // const [episodes, setEpisodes] = useState([]);
  // useEffect(() => {
  //   const getPodcast = async () => {
  //     try {
  //       const res = await axios.get(
  //         `${BASE_URL_LOCAL}/episode/${id}/epsiode`
  //       );

  //       setEpisodes(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getPodcast();
  // }, []);
  const handleClick = (index) => {
    dispatch(musicPlayerActions.removeTrack());

    const tracks = music;

    dispatch(musicPlayerActions.addTrack({ tracks, index }));
    dispatch(podcastPlayerActions.removeEpisode());
    dispatch(audioBookPlayerActions.removeChapter());
  };
  if(location.pathname.split("/")[1] ==="listArtist" || location.pathname.split("/")[1] === "listCategory"|| location.pathname.split("/")[1] === "music" )
  {
    return (
    
      <Container>
        {console.log("from detaillist",music)}
        <RowTitle>
          <TitleRowText>Track </TitleRowText>
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
          {music.map((p, index) => (
            <Row onClick={() => handleClick(index)}>
              <RowContainer>
                <Info>
                  <InfoText>
                    <ImageContainer>
                      {/* <Image src={`${BASE_URL}${p.image}`}></Image> */}
                      <Image src={p.image}></Image>
                    </ImageContainer>
                    <RowText>{p.title}</RowText>
                  </InfoText>
                  <InfoBut>
                    <Icon>
                      <GoPlus />
                    </Icon>
                    <Icon>
                      <MdOutlineFavoriteBorder />
                    </Icon>
                  </InfoBut>
                </Info>
              </RowContainer>
  
              <RowContainer>
                <RowText>{p.artist_name}</RowText>
              </RowContainer>
              {/* <RowContainer>
                <RowText>{p.episode_length}</RowText>
              </RowContainer> */}
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
  }
  else if(location.pathname.split("/")[1] ==="podcast" )
  {
    return (
    
      <Container>
        {console.log("from detaillist",music)}
        <RowTitle>
          <TitleRowText>Track </TitleRowText>
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
          {music.map((p, index) => (
            <Row onClick={() => handleClick(index)}>
              <RowContainer>
                <Info>
                  <InfoText>
                    <ImageContainer>
                      {/* <Image src={`${BASE_URL}${p.image}`}></Image> */}
                      <Image src={p.image}></Image>
                    </ImageContainer>
                    <RowText>{p.title}</RowText>
                  </InfoText>
                  <InfoBut>
                    <Icon>
                      <GoPlus />
                    </Icon>
                    <Icon>
                      <MdOutlineFavoriteBorder />
                    </Icon>
                  </InfoBut>
                </Info>
              </RowContainer>
  
              <RowContainer>
                <RowText>{p.artist_name}</RowText>
              </RowContainer>
              {/* <RowContainer>
                <RowText>{p.episode_length}</RowText>
              </RowContainer> */}
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
  }
  else{
    return (
    
      <Container>
        {console.log("from detaillist",music)}
        <RowTitle>
          <TitleRowText>Track </TitleRowText>
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
          {music.map((p, index) => (
            <Row onClick={() => handleClick(index)}>
              <RowContainer>
                <Info>
                  <InfoText>
                    <ImageContainer>
                      {/* <Image src={`${BASE_URL}${p.image}`}></Image> */}
                      <Image src={p.image}></Image>
                    </ImageContainer>
                    <RowText>{p.title}</RowText>
                  </InfoText>
                  <InfoBut>
                    <Icon>
                      <GoPlus />
                    </Icon>
                    <Icon>
                      <MdOutlineFavoriteBorder />
                    </Icon>
                  </InfoBut>
                </Info>
              </RowContainer>
  
              <RowContainer>
                <RowText>{p.artist_name}</RowText>
              </RowContainer>
              {/* <RowContainer>
                <RowText>{p.episode_length}</RowText>
              </RowContainer> */}
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
  }
  
};

export default DetailLists;
