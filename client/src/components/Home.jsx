import React from 'react';
import PostForm from './PostForm';
import PostsList from './PostsList';

const Home = ({ onPostCreated, refreshPosts }) => {
  return (
    <div className="container mx-auto p-4">
      <section className="text-center py-10 bg-blue-500 text-white rounded-lg mb-8">
        <h1 className="text-5xl font-bold mb-4">Welcome to Your MERN Blog!</h1>
        <p className="text-xl">Explore amazing posts and share your thoughts.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Add New Post</h2>
        <PostForm onPostCreated={onPostCreated} />
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">Latest Posts</h2>
        <PostsList key={refreshPosts} />
      </section>
    </div>
  );
};

export default Home; 