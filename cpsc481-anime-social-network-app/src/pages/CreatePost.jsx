import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import VerticalBar from '../components/VerticalBar'
import './CreatePost.css'

function CreatePost() {
  const navigate = useNavigate()
  const [selectedAnime, setSelectedAnime] = useState('')
  const [selectedSeason, setSelectedSeason] = useState('')

  return (
    <div className='main-page create-post-wrapper'>
      <VerticalBar />
      <div className='create-post-page'>
        <div className='create-post-header'>
          <button className='create-post-link' onClick={() => navigate('/')}>← return</button>
          <button className='create-post-link create-post-translate'>Translate</button>
        </div>

        <input className='create-post-title' type='text' placeholder='Title...' />

        <div className='create-post-tags'>
          <select className='anime-select' value={selectedAnime} onChange={(e) => setSelectedAnime(e.target.value)}>
            <option value='' disabled>Anime</option>
            <option value='aot'>Attack on Titan</option>
            <option value='jjk'>Jujutsu Kaisen</option>
            <option value='nana'>Nana</option>
            <option value='op'>One Piece</option>
          </select>
          <select className='season-select' disabled={!selectedAnime} value={selectedSeason} onChange={(e) => setSelectedSeason(e.target.value)}>
            <option value='' disabled>Season</option>
            <option value='1'>Season 1</option>
            <option value='2'>Season 2</option>
            <option value='3'>Season 3</option>
          </select>
          <select className='episode-select' defaultValue='' disabled={!selectedSeason}>
            <option value='' disabled>Episode</option>
            <option value='1'>Episode 1</option>
            <option value='2'>Episode 2</option>
            <option value='3'>Episode 3</option>
            <option value='4'>Episode 4</option>
            <option value='5'>Episode 5</option>
          </select>
        </div>

        <textarea className='create-post-body' placeholder='Text...' />

        <div className='create-post-actions'>
          <button className='create-post-button' onClick={() => navigate('/')}>Post</button>
        </div>
      </div>
    </div>
  )
}

export default CreatePost