# Simple API Fetcher

A clean and responsive Next.js application that fetches and displays posts from the JSONPlaceholder API.

## Features

- 🚀 **Fast Loading**: Built with Next.js for optimal performance
- 🎨 **Clean UI**: Modern design using Tailwind CSS
- 🔍 **Search Functionality**: Real-time search through post titles and content
- ⚡ **Loading States**: Smooth loading animations while fetching data
- ❌ **Error Handling**: User-friendly error messages with retry functionality
- 📱 **Responsive Design**: Works perfectly on desktop and mobile devices
- 🎯 **Grid Layout**: Posts displayed in a responsive card grid
- 📄 **Modal Posts**: Click "Read more" to view full post content in a modal
- 🏠 **Professional Layout**: Complete with header navigation and footer
- 🎭 **Custom Favicon**: App logo as favicon for brand consistency

## Developer

**GitHub**: [NaijaB0T](https://github.com/NaijaB0T)

## API

This app fetches data from: `https://jsonplaceholder.typicode.com/posts`

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
   ```bash
   cd Simple_Api_Fetcher
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
Simple_Api_Fetcher/
├── src/
│   ├── app/
│   │   ├── layout.js          # Root layout with header/footer
│   │   ├── page.js            # Main page component
│   │   ├── icon.svg           # App favicon (auto-detected by Next.js)
│   │   └── globals.css        # Global styles
│   └── components/
│       ├── Header.js          # Navigation header
│       ├── Footer.js          # Footer with links and social icons
│       ├── PostList.js        # Grid container for posts
│       ├── PostCard.js        # Individual post card with modal trigger
│       ├── PostModal.js       # Modal for full post content
│       ├── SearchBar.js       # Search input component
│       ├── LoadingSpinner.js  # Loading animation
│       └── ErrorMessage.js    # Error display component
├── public/
│   └── favicon.svg           # Backup favicon
├── package.json
├── next.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Technologies Used

- **Next.js 14**: React framework with App Router
- **React 18**: JavaScript library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework
- **JSONPlaceholder**: Fake REST API for testing and prototyping

## Features Breakdown

### Modal Post Viewer
- Click "Read more" on any post card to open detailed view
- Full post content displayed in a clean modal
- Keyboard support (ESC to close)
- Click outside modal to close
- Prevents background scrolling when open

### Professional Layout
- Fixed header with navigation and branding
- Footer with quick links, resources, and social media
- Responsive navigation for mobile devices
- Consistent branding throughout the app

### Search Functionality
- Real-time filtering of posts
- Searches through both title and content
- Case-insensitive matching
- Clear search button for easy reset

### Loading & Error States
- Animated loading spinner during API calls
- Comprehensive error handling with retry button
- User-friendly error messages

### Responsive Design
- Mobile-first approach
- Responsive grid layout (1 column on mobile, 2 on tablet, 3 on desktop)
- Optimized for all screen sizes

### Favicon & Branding
- Custom SVG favicon matching the app logo
- Consistent blue color scheme (#2563eb)
- Professional branding elements
