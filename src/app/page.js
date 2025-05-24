'use client'

import { useState, useEffect } from 'react'
import PostList from '../components/PostList'
import SearchBar from '../components/SearchBar'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorMessage from '../components/ErrorMessage'

export default function Home() {
  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchPosts()
  }, [])

  useEffect(() => {
    filterPosts()
  }, [posts, searchTerm])

  const fetchPosts = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
      const data = await response.json()
      setPosts(data)
    } catch (err) {
      setError(`Failed to fetch posts: ${err.message}`)
    } finally {
      setLoading(false)
    }
  }

  const filterPosts = () => {
    if (!searchTerm.trim()) {
      setFilteredPosts(posts)
    } else {
      const filtered = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.body.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredPosts(filtered)
    }
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <SearchBar onSearch={setSearchTerm} searchTerm={searchTerm} />
      </div>

      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} onRetry={fetchPosts} />}
      
      {!loading && !error && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <p className="text-gray-600">
              Showing {filteredPosts.length} of {posts.length} posts
              {searchTerm && ` for "${searchTerm}"`}
            </p>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Clear search
              </button>
            )}
          </div>
          
          <PostList posts={filteredPosts} />
          
          {filteredPosts.length === 0 && posts.length > 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No posts found matching "{searchTerm}"</p>
              <button
                onClick={() => setSearchTerm('')}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Show all posts
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
