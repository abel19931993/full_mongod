import React from "react";
import styled from "styled-components";
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 50vh;
  background-color: black;
`;
const Image = styled.img`
  border-radius: 5px;
  width: 90%;
  height: 35vh;
  object-fit: cover;
`;
const Info = styled.div`
  margin-top: 5px;
  text-align: center;
`;
const Title = styled.h1`
  color: white;
  font-size: 15px;
  font-weight: bold;
`;
const ArtistName = styled.p`
  color: white;
  font-size: 15px;
`;
const Date = styled.p`
  font-size: 15px;
  font-weight: bold;
`;
const NewReleaseItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.musicTitle}</Title>
        <ArtistName>{item.artistName}</ArtistName>
      </Info>
    </Container>
  );
};

export default NewReleaseItem;
