import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import LoomVideos from './LoomVideos';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path='/loom' element= {<LoomVideos/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;