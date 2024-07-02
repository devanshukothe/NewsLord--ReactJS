import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import About from './Components/About';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/business" element={<News key="business" pageSize={12} country="in" category="business" />} />
          <Route path="/entertainment" element={<News key="entertainment" pageSize={12} country="in" category="entertainment" />} />
          <Route path="/general" element={<News key="general" pageSize={12} country="in" category="general" />} />
          <Route path="/health" element={<News key="health" pageSize={12} country="in" category="health" />} />
          <Route path="/science" element={<News key="science" pageSize={12} country="in" category="science" />} />
          <Route path="/sports" element={<News key="sports" pageSize={12} country="in" category="sports" />} />
          <Route path="/technology" element={<News key="technology" pageSize={12} country="in" category="technology" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
