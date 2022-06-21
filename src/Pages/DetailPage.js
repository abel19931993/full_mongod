import React, { useEffect, useState } from "react";
import DetailDiscription from "../Components/DetailDiscription";
import DetailLists from "../Components/DetailLists";
import styled from "styled-components";
import "../Styles/MainMenu.css";
import TopBar from "../Components/TopBar";
import axios from "axios";
import { useLocation } from "react-router-dom";
const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100vh;
  margin-top: 50px;
  background-color: #121217;
`;
const DetailPage = ({ condition }) => {
  const location = useLocation();
  const type = location.pathname.split("/")[1];
  const [contents, setContents] = useState([]);
  if (type === "music") {
    useEffect(() => {
      const getAlbum = async () => {
        try {
          const res = await axios.get(`http://localhost:5000/album/${location.pathname.split("/")[3]}`);

          setContents(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      getAlbum();
    }, []);
  } else if (type === "podcast") {
    useEffect(() => {
      const getAlbum = async () => {
        try {
          const res = await axios.get(`http://localhost:5000/podcast/${location.pathname.split("/")[3]}`);

          setContents(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      getAlbum();
    }, []);
  } else {
    useEffect(() => {
      const getAlbum = async () => {
        try {
          const res = await axios.get(`http://localhost:5000/audiobook/${location.pathname.split("/")[3]}`);

          setContents(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      getAlbum();
    }, []);
  }

  return (
    <>
    {
      console.log("detailPage",contents)
    }
      <Div>
        <TopBar />
        {condition && <DetailDiscription Contents={contents} />}
        <DetailLists id={location.pathname.split("/")[3]} />
      </Div>
    </>
  );
};

export default DetailPage;
