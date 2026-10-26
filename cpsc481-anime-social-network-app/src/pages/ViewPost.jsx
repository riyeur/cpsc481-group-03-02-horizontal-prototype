import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import VerticalBar from '../components/VerticalBar'
import './ViewPost.css'

function ViewPost() {
  const navigate = useNavigate()
  const [selectedAnime, setSelectedAnime] = useState('')
  const [selectedSeason, setSelectedSeason] = useState('')

  return (
    <div className='main-page view-post-wrapper'>
      <VerticalBar />
      <div className='view-post-page'>
        <div className='view-post-header'>
          <button className='view-post-link' onClick={() => navigate('/')}>← return</button>
          <select className='translate-button' defaultValue=''>
            <option value='' disabled>🌐 Translate</option>
            <option value='english'>English</option>
            <option value='french'>Français</option>
            <option value='spanish'>Español</option>
          </select>
        </div>

        <div className='post-item'>
          <div className='top-items'>
            <img src='/profile_pic.png' alt='sean_1917' height='60' width='auto' />
            <span className='post-username'>sean_1917</span>
            <span className='language-label'>Written in English</span>
            <p className='date-posted'>2026-10-24</p>
          </div>
          <div className='post-tags'>
            <button className='post-tag'>Jujutsu Kaisen</button>
            <button className='post-tag'>Season 2</button>
            <button className='post-tag'>Episode 14</button>
          </div>
          <p className='post-title'>Top 5 Characters Change my mind</p>
          <p className='post-content'>
            1. Gojo, 2. Nanami, 3. Megumi, 4. Nobara, 5. Todo. Nobody else comes close
            in terms of presence and how much they add to every fight they are in.
            Tell me where I am wrong.
          </p>
          <div className='likes-and-comments'>
            <p>❤︎ 14K</p>
            <p>🗨 300</p>
          </div>
        </div>

        <p className='replies-heading'>Replies ▾</p>

        <div className='reply'>
          <div className='top-items'>
            <img src='/profile_pic.png' alt='jane_loves_anime' height='40' width='auto' />
            <span className='post-username'>jane_loves_anime</span>
            <span className='language-label'>Written in English</span>
          </div>
          <p className='reply-text'>Nanami should be number one, no contest.</p>
          <div className='reply-actions'>
            <button className='reply-action'>Reply</button>
          </div>

          <div className='reply reply-nested'>
            <div className='top-items'>
              <img src='/profile_pic.png' alt='wilson123' height='40' width='auto' />
              <span className='post-username'>wilson123</span>
              <span className='language-label'>Written in Français</span>
            </div>
            <p className='reply-text'>Super liste, je mettrais Gojo en premier aussi.</p>
            <p className='translated-note'>
              Translated from Français – <button className='reply-action'>Show Original</button>
            </p>
            <div className='reply-actions'>
              <button className='reply-action'>Reply</button>
            </div>
          </div>

          <div className='reply reply-nested'>
            <div className='top-items'>
              <img src='/profile_pic.png' alt='you' height='40' width='auto' />
              <span className='post-username'>you</span>
              <span className='language-label'>Written in English</span>
            </div>
            <p className='reply-text'>Agreed, Gojo easily takes the top spot.</p>
            <div className='reply-actions'>
              <button className='reply-action'>Reply</button>
              <button className='reply-action'>Edit</button>
              <button className='reply-action'>Delete</button>
            </div>
          </div>
        </div>

        <div className='reply-box'>
          <textarea className='reply-input' placeholder='Reply...' />
          <div className='reply-box-actions'>
            <button className='create-post-button'>Post Reply</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewPost