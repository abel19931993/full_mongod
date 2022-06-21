import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Infoi = styled.div`
opacity:0;
 position:absolute ;
background-color:rgba(0,0,0,0.8);
top: 0vh;
left:0vh;
padding-top:21vh ;
padding-left:1vh ;
height:15vh; 
width:90% ;
display:flex;`
const Container = styled.div`
 flex:1; 
 margin:4px;
 height:15vh;
 width:40vh;
 position:relative ;
 &:hover ${Infoi}{
    opacity : 1;
 }
 `
const Image = styled.img`
 border-radius:5px ;
 width:90% ;
 height:15vh ;
 background-color:#f5fbfd;
 object-fit:cover ;

`
const Info = styled.div`
position:absolute ;
top: 0;
left:0;
width:90% ;
height:15vh;
display:flex ;
align-items:center ;
justify-content:center ;
/* background-color:red ; */
`
const Title = styled.h1`
color:white ;
font-size:20px ;
`

const CategoryItem = ({item}) => {
  return (
    <Link to={`/listCategory/${item.title}`}>
    <Container >
     
        <Image src={item.img}/>
        <Infoi>
        
        </Infoi>
        <Info>
            <Title>{item.title}</Title>
        </Info>
        
    </Container>
    </Link>
  )
}

export default CategoryItem