import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostsList from './components/PostsList';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';

function App() {
  const [refreshPosts, setRefreshPosts] = useState(false);

  const handlePostCreated = useCallback(() => {
    setRefreshPosts(prev => !prev);
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Home onPostCreated={handlePostCreated} refreshPosts={refreshPosts} />} />
              <Route path="/posts" element={
                <div className="container mx-auto p-4">
                  <h1 className="text-3xl font-bold mb-4">All Posts</h1>
                  <PostsList key={refreshPosts} />
                </div>
              } />
              <Route path="/about" element={<About />} />
            </Routes>
          </ErrorBoundary>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 