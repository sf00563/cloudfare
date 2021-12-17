import React from 'react';
import './App.css';
import Nav from './components/Nav.js';
import CreatePost from './components/CreatePost.js';
import Posts from './components/Posts.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/createpost" element={<CreatePost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
