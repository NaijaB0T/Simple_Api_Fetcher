import { useState } from 'react'
import PostModal from './PostModal'

export default function PostCard({ post }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6 border border-gray-200">
        <div className="flex items-start justify-between mb-3">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
            Post #{post.id}
          </span>
          <span className="text-xs text-gray-500">
            User {post.userId}
          </span>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2 capitalize">
          {post.title}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
          {post.body}
        </p>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
          >
            Read more →
          </button>
        </div>
      </div>

      <PostModal 
        post={post} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  )
}
