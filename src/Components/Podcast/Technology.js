import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import EntertainmentItem from './EntertainmentItem'
import TechnologyItem from './TechnologyItem'
const Container = styled.div`
  display:flex;
  padding:20px 20px 0px 20px;
  justify-content:space-between;
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
  return (
      <>
      <Tetxt>Technology</Tetxt>
      <Container>
        {
           technologyPodcast.map(item=>(
           < TechnologyItem item={item}  key={item.id}/>
            ))
        }
    </Container>
      </>
    
  )
}

export default Technology