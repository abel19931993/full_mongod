import React from 'react'
import styled from 'styled-components'
import {MdFavoriteBorder} from 'react-icons/md'
import {BsPlayFill} from 'react-icons/bs'
import {BiDotsHorizontalRounded} from 'react-icons/bi'
import { useDispatch, useSelector } from "react-redux";
import { musicPlayerActions } from '../store/music-slice'
import { podcastPlayerActions } from '../store/podcast-slice'
import { audioBookPlayerActions } from '../store/audioBook-slice'
import { Link, useNavigate } from 'react-router-dom'
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
const ArtistName = styled.p`
color:white ;
font-size:15px ;

`
const ArtistItem = ({item,index,artists,artist_name}) => {
  var track = useSelector((state) => state.music.tracks);
  var trackInde = useSelector((state) => state.music.trackIndex);
 
  const dispatch = useDispatch();
  const history = useNavigate();
  
  const hadleClickCon =(index)=>{
     history(`/listArtist/${artist_name}`)
  }
  return (
    <Container onClick={()=>hadleClickCon(index)}>
      {/* <Link to={`/list/${artist_name}`}> */}
        <Image src={item.image}/>
        <Infoi>
        
        </Infoi>
        <Info>
            <ArtistName >{item. artist_name}</ArtistName >
        </Info>
        {/* </Link> */}
    </Container>
  )
}

export default ArtistItem