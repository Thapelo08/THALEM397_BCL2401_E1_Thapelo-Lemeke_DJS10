import { useEffect, useState } from 'react'

function BlogPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


useEffect(()  => {
  async function fetchBlogPosts() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Failed to fetch blog posts');
      }

      const fetchedPosts = await response.json();
      setPosts(fetchedPosts);
      setLoading(false);
      } catch (error) {
        setError('Data fetching failed');
        setLoading(false);
      }
  }
  fetchBlogPosts();
},[])

if (loading) {
  return <div>Loading...</div>;
}

if (error) {
  return <div className="error-message">Error: {error}</div>;
}
 
return (
  <idv className="blog-posts">
    <h1>Blog Posts</h1>
    <ul>
      {posts.map(post => (
        <li key={post.id} className="post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  </idv>
);
}

export default BlogPosts;
