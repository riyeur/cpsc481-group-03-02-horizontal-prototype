import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Reviews from './pages/Reviews.jsx'
import CreatePost from './pages/CreatePost.jsx'
import ReadReview from './pages/ReadReview.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/read-review" element={<ReadReview />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)