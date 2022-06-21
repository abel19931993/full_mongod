import React from 'react'
import styled from 'styled-components'
import {MdFavoriteBorder} from 'react-icons/md'
import {BsPlayFill} from 'react-icons/bs'
import {BiDotsHorizontalRounded} from 'react-icons/bi'
import { useDispatch, useSelector } from "react-redux";
import { musicPlayerActions } from '../store/music-slice'
import { podcastPlayerActions } from '../store/podcast-slice'
import { audioBookPlayerActions } from '../store/audioBook-slice'
// var image = require('../../Image/photo_2022-05-21_21-47-31.jpg');
const Infoi = styled.div`
opacity:0;
 position:absolute ;
background-color:rgba(0,0,0,0.2);
top: 0vh;
left:0vh;
padding-top:21vh ;
padding-left:1vh ;
height:30vh; 
width:90% ;
display:flex;`
const Container = styled.div`
 flex:1; 
 /* margin:3px; */
 width:20vw ;
 margin:4px ;
 /* margin-left:20px ; */
 height:40vh;
 
 position:relative ;

 &:hover ${Infoi}{
    opacity : 1;
 }
 
 `
 
const Image = styled.img`
 border-radius:5px ;
 width:90% ;
 height:30vh ;
 object-fit:cover ;

`
const Icon = styled.div`
width:40px ;
height:40px ;
border-radius: 50%;
background-color:white ;
display:flex ;
align-items:center ;
justify-content:center ;
margin:5px ;
transition:all 0.2s ease;
&:hover{
    transform:scale(1.2) ;
}
`
const Info = styled.div`
margin-top:5px ;
text-align: left;
`
const Title = styled.h1`
color:white ;
font-size:15px ;
font-weight:bold ;
`
const ArtistName = styled.p`
color:white ;
font-size:15px ;

`
const Date = styled.p`
color:white ;
font-size:15px ;
font-weight:bold ;
`
const MusicItem= ({item,index,Musics}) => {
  var track = useSelector((state) => state.music.tracks);
  var trackInde = useSelector((state) => state.music.trackIndex);
 const dispatch = useDispatch();
  const handleClick = (index) =>{ 
  
      dispatch(musicPlayerActions.removeTrack());
    let tracks = Musics
    dispatch(musicPlayerActions.addTrack ({tracks,index}))
     dispatch(podcastPlayerActions.removeEpisode())
     dispatch(audioBookPlayerActions.removeChapter())

  }

  return (
    
    <Container>
   
        <Image src={item.image}/>
         <Infoi>
        <Icon onClick={()=>handleClick(index)}><BsPlayFill/></Icon>
          <Icon><MdFavoriteBorder/></Icon>
        
        </Infoi>
        <Info>
         <Title>{item. title}</Title>
         <ArtistName>{item.artist_name}</ArtistName>
         
          {/* console.log(new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(item.updatedAt)))) */}
         
         <Date>{item. title}</Date>
          </Info>
        
    </Container>
  )
}





export default MusicItem;