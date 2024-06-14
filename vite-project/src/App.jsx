import { useEffect, useState } from 'react'

function BlogPosts() {
  const [posts, setPosts] = useState([]);


useEffect(()  => {
  async function fetchBlogPosts() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Failed to fetch blog posts');
      }

      const fetchedPosts = await response.json();
      setPosts(fetchedPosts);
      

    }
  }
})

}



export default App
