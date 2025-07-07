import React, { useEffect, useState } from 'react';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5001';

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Ensure the URL is always absolute
        const url = new URL('/api/posts', API_BASE_URL).toString();
        console.log('Fetching from URL:', url, 'with API_BASE_URL:', API_BASE_URL); // Temporarily added for debugging
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="text-center text-lg">Loading posts...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error.message}</div>;
  }

  return (
    <div className="mt-8">
      {posts.length === 0 ? (
        <p className="text-center text-gray-600">No posts available.</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <li key={post._id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-blue-600 mb-2">{post.title}</h2>
              <p className="text-gray-700 mb-4">{post.content}</p>
              <p className="text-sm text-gray-500"><em>By: {post.author}</em></p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostsList; 