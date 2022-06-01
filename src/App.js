import './App.css';
import LeftMenu from './Components/LeftMenu';
import React from 'react';
import Music from './Pages/Music';
import Podcast from './Pages/Podcast';
import AudioBook from './Pages/AudioBook';
import Lyibrary from './Pages/Lyibrary';
import DetailPage from './Pages/DetailPage';
import PlayerComponent from './Components/PlayerComponent';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <LeftMenu/>
      <Routes>
      <Route path="/" element={<Music/> } />
      <Route path="/podcast" element={< Podcast/>} />
      <Route  path="/audiobook" element={<AudioBook/> }/>
      <Route  path="/lyibrary" element={<Lyibrary/> }/>
      <Route path="/detail/:id"  element={<DetailPage/>}/>
      <Route path='/playerComponnet' element={<PlayerComponent/>}/>
    </Routes>
  </BrowserRouter> 
  </div>
  )
}

export default App;
