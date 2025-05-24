export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="relative">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <div className="absolute top-0 left-0 animate-spin rounded-full h-12 w-12 border-t-2 border-blue-300"></div>
      </div>
      <p className="ml-4 text-gray-600 text-lg">Loading posts...</p>
    </div>
  )
}
