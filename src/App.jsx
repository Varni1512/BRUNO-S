import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogPage from './components/BlogPage';
import Blog from './components/Blog';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogPage />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
};

export default App;
