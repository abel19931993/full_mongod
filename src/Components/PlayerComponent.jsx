import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import PlayerControls from "./PlayerControls";
import PlayerDetails from "./PlayerDetails";
import { AllAudio } from "../Data";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  padding: 25px;
  border-radius: 16px;
  box-shadow: 1px 1px 3px #ffffff83;
  color: red;
`;

const Audio = styled.audio``;
const Heading = styled.h4`
  color: orange;
  font-size: 12px;
  text-transform: uppercase;
  text-align: center;
`;
const Text = styled.p`
  color: #fff;
  font-size: 12px;
  text-align: center;
  font-weight: 400;
`;
const SliderContainer = styled.div`
  position: relative;
  width: auto;
  ::before {
    content: "";
    background-color: white;
    width: 99%;
    height: 4px;
    display: block;
    position: absolute;
    border-radius: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    opacity: 1;
  }
`;
const ProgersCover = styled.div`
  background-color: orange;
  width: 99%;
  height: 4px;
  display: block;
  position: absolute;
  border-radius: 10px;
  top: 50%;
  transform: translateY(-50%);
  user-select: none;
  pointer-events: none;
`;
const Thumb = styled.div`
  width: 20px;
  height: 20px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.7);
  z-index: 3;
  background-color: #452;
  position: absolute;
  border-radius: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  user-select: none;
`;
const Slider = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: orange;
  height: 2px;
  opacity: 0;
  width: 100%;
  cursor: pointer;
  margin: 8px auto;
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    opacity: 0;
    background: orangered;
    border-radius: 50%;
    cursor: pointer;
  }
  ::-moz-range-thumb {
    -moz-appearance: none;
    width: 18px;
    height: 18px;
    opacity: 0;
    background: orangered;
    border-radius: 50%;
    cursor: pointer;
  }
`;

const PlayerComponent = ({episodes,index}) => {

  const [audios,setAudios] = useState(episodes);
  const [currentSongIndex, setCurrentSongIndex] = useState(index);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  console.log("currentSongIndex "+currentSongIndex)
  console.log("Index value "+index)

  const [postion, setPostion] = useState(0);
  const [marginLeft, setMarginLeft] = useState(-20);
  const [percentage, setPercentage] = useState(0);
  const [progressBarWidth, setProgressBarWidth] = useState(0);
  const rangeRef = useRef();
  const onChange = (e) => {
    

    const audio = audioEl.current;
    audio.currentTime = (audio.duration / 100) * e.target.value;
    setPercentage(e.target.value);
  };
  useEffect(() => {
    const rangeWidth = rangeRef.current.getBoundingClientRect().width;

    const thumbWidth = 20;
    const centerThumb = (thumbWidth / 100) * percentage * -1;
    const centerProgeres =
      thumbWidth +
      (rangeWidth / 100) * percentage -
      (thumbWidth / 100) * percentage;
    setMarginLeft(centerThumb);
    setPostion(percentage);
    setProgressBarWidth(centerProgeres);
  }, [percentage]);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

  const skipSong = (forwards = true) => {
    if (forwards) {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp++;

        if (temp > audios.length - 1) {
          temp = 0;
        }
        return temp;
      });
    } else {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = audios.length - 1;
        }
        return temp;
      });
    }
  };
  const audioEl = useRef(null);

  const getCurrDuration = (e) => {
    const percent = (
      (e.currentTarget.currentTime / e.currentTarget.duration) *
      100
    ).toFixed(2);
    const time = e.currentTarget.currentTime;
    setPercentage(+percent);
    setCurrentTime(time.toFixed(2));
  };
  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > audios.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);
return (

<Container>
   
    <Audio
      src={  index>=currentSongIndex ? audios[index].episode_audio : audios[currentSongIndex].episode_audio }
      ref={audioEl}
      onLoadedData={(e) => {
        setDuration(e.currentTarget.duration.toFixed(2));
      }}
      onTimeUpdate={getCurrDuration}
    ></Audio>
    <Heading>Playing Now</Heading>
    {
    console.log( audios[currentSongIndex].episode_name) 
    }
    
    <PlayerDetails audio={audios[index]} />
    <PlayerControls
      isPlaying={isPlaying}
      setIsPlaying={setIsPlaying}
      SkipSong={skipSong}
      duration={duration}
      currentTime={currentTime}
    />
    <SliderContainer>
      <ProgersCover style={{ width: `${progressBarWidth}px` }}></ProgersCover>
      <Thumb
        style={{ left: `${postion}%`, marginLeft: `${marginLeft + 10}px` }}
      ></Thumb>
      <Slider
        ref={rangeRef}
        type="range"
        step="0.01"
        onChange={onChange}
        value={postion}
      />
    </SliderContainer>

    <Text>
      <strong>Next up:</strong>
      <marquee direction="right" scrollamount="3">
        {
        audios.length-1 === currentSongIndex?audios[0].episode_name
        :audios[nextSongIndex].episode_name
        }
        
      </marquee>
    </Text>
  </Container>

);}
  


export default PlayerComponent;
