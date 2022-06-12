import React from 'react'
import { all } from '../../Data'
import styled from 'styled-components'
import CategoriesItem from './CategoriesItem'
// import { geners } from '../Data'
// import GenersItem from './GenersItem'
const Container = styled.div`
  display:flex;
  padding:20px 20px 0px 20px;
  justify-content:space-between;
  
`
const Tetxt = styled.h3`
color:white ;
padding:20px 20px 0px 20px ;
`
const Button = styled.button`
background-color: #121216;
border-radius: 50px;
border-width: 0;
box-shadow: rgba(25,25,25,.04) 0 0 1px 0,rgba(0,0,0,.1) 0 3px 4px 0;
color: white;
cursor: pointer;
display: inline-block;
font-family: Arial,sans-serif;
font-size: 1em;
border:0.1px solid white ;
height: 40px;
padding: 0 25px;
transition: all 200ms;
margin-left:45% ;
&:hover{
    background-color: #222227;
transform: scale(1.05);
 }
`
const Categories = () => {
  return (
      <>
      <Tetxt>All Categories</Tetxt>
      <Container>
        {
          
            all.map(item=>(
           <CategoriesItem item={item} key={item.id}/>
            ))
        }
    </Container>
    <Button>View All</Button>
      </>
    
  )
}

export default Categories