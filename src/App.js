// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";

import { Home } from "./components/pages/Home";
import { Meditate } from "./components/pages/Meditate";
import { Sleep } from "./components/pages/Sleep";
import { Movement } from './components/pages/Movement';
import { CalmKids } from './components/pages/Calmkids';
import { ForWork } from './components/pages/Forwork';
import { Wisdom } from './components/pages/Wisdom';
import { Music } from './components/pages/Music';
import SideNav from './sidenav/sidenav'
// import RouterClass from './routes/route';

function App() {
  return (
    <React.Fragment>
      <SideNav/>
      {/* <RouterClass/> */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/meditate" element={<Meditate />} />
        <Route path="/sleep" element={< Sleep />} />
        <Route path="/music" element={< Music />} />
        <Route path="/for-work" element={< ForWork />} />
        <Route path="/wisdom" element={< Wisdom />} />
        <Route path="/calm-kids" element={< CalmKids />} />
        <Route path="/movement" element={< Movement />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
