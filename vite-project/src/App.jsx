import { useEffect, useState } from 'react'

useEffect(()  => {
  async function fetchBlogPosts() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Failed to fetch blog posts');
      }
    }
  }
})

export default App
