import React from 'react'
import { recent } from '../../Data'
import styled from 'styled-components'
import RecentItem from './RecentItem'
const Container = styled.div`
  display:flex;
  padding:20px 20px 0px 20px;
  justify-content:space-between;
`
const Tetxt = styled.h3`
color:white ;
padding:20px 20px 0px 20px ;

`
const Recent = () => {
  return (
      <>
      <Tetxt>Recent</Tetxt>
      <Container>
        {
           recent.map(item=>(
           <RecentItem item={item}  key={item.id}/>
            ))
        }
    </Container>
      </>
    
  )
}

export default Recent