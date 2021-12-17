import '../App.css';
import React, { useState, useEffect } from 'react';
import Post from './Post.js';
import { Link } from 'react-router-dom';

function Posts() {

  useEffect(() => {
    fetchPosts();
  }, []);

  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const data = await fetch('https://my-worker.samf23987423.workers.dev');
    const userPosts = await data.json();
    setPosts(userPosts.posts);
  }

  return (
    <div className="posts">
      {posts ? posts.map(post => (
        <Post key={post.id} postTitle={post.postTitle} name={post.name} description={post.description} />
      )) : <div className='no-posts-container'><h4>No posts found!</h4><Link className="create" to="/createpost"><button>Create Post</button></Link></div>}
    </div>
  );
}

export default Posts;