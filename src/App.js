import './App.css';
import LeftMenu from './Components/LeftMenu';
import React from 'react';
import Music from './Pages/Music';
import Podcast from './Pages/Podcast';
import AudioBook from './Pages/AudioBook';
import Lyibrary from './Pages/Lyibrary';
import DetailPage from './Pages/DetailPage';
import DetailLists from './Components/DetailLists';
import PlayerComponent from './Components/PlayerComponent';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useSelector } from 'react-redux';
import TopBar from './Components/TopBar';
import Login from './Components/auth/Login';
function App() {
  const isLoggedIn = useSelector(state=>state.auth.isLoggedIn)
  console.log(isLoggedIn)
  return (
   
    <div className="App">
     <BrowserRouter>
     {
     
      !isLoggedIn &&  <Login />
      
     }
     {
      isLoggedIn && 
      <>
        <LeftMenu/>
      <Routes>
      <Route path="/" element={<Music/> } />
      <Route path="/podcast" element={< Podcast/>} />
      <Route  path="/audiobook" element={<AudioBook/> }/>
      <Route  path="/lyibrary" element={<Lyibrary/> }/>
      <Route path="/music/detail/:id"  element={<DetailPage  condition={isLoggedIn}/>}/>
       <Route path="/podcast/detail/:id"  element={<DetailPage  condition={isLoggedIn}/>}/>
       <Route path="audiobook/detail/:id"  element={<DetailPage  condition={isLoggedIn}/>}/>
       <Route path="/detail/:id"  element={<DetailPage  condition={isLoggedIn}/>}/>
      <Route path='/listArtist/:artist_name' element={<DetailPage condition={!isLoggedIn} />}/>
      <Route path='/listCategory/:category' element={<DetailPage condition={!isLoggedIn} />}/>
      <Route path='/playerComponnet' element={<PlayerComponent/>}/>
    </Routes>
    </>
      
     }
     
  </BrowserRouter> 
  </div>
  )
}

export default App;
