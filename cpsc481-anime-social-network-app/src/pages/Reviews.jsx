import './Reviews.css'
import VerticalBar from '../components/VerticalBar.jsx'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Review = ({profilePicture, username, tag1, tag2, title, content, rating, numberOfLikes, datePosted, isRecommended}) => {
  return (
    <div className='review-item'>
      <div className='top-items'>
        <img src={profilePicture} alt={username} className='review-profile-picture' height="60" width="auto" />
        <text className='review-username'>{username}</text>
        <p className='date-posted'>{datePosted}</p>
      </div>
      <div className='tags-and-recommended'>
        <div className='review-tags-review-page'>
          <button className='review-tag-review-page'>{tag1}</button>
          <button className='review-tag-review-page'>{tag2}</button>
        </div>
        {isRecommended && (<span className='recommended-tag'>Recommended</span>)}
      </div>
      <div className='review-title-rating'>
        <p className='review-title'>{title}</p>
        <p className='review-rating'>{rating}/10</p>
      </div>
      <p className='review-content'>{content}</p>
      <button className='read-review-button'>Read Review</button>
      <div className='likes-and-comments'>
        <p>❤︎⁠ {numberOfLikes}</p>
      </div>
    </div>
  )
}

const ReviewTwo = ({profilePicture, username, tag1, tag2, tag3, title, content, numberOfLikes, datePosted}) => {
  return (
    <div className='review-item'>
      <div className='top-items'>
        <img src={profilePicture} alt={username} className='review-profile-picture' height="60" width="auto" />
        <text className='review-username'>{username}</text>
        <p className='date-posted'>{datePosted}</p>
      </div>
      <div className='review-tags-review-page'>
        <button className='review-tag-review-page'>{tag1}</button>
        <button className='review-tag-review-page'>{tag2}</button>
        <button className='review-tag-review-page'>{tag3}</button>
      </div>
      <div className='review-title-rating'>
        <p className='review-title'>{title}</p>
      </div>
      <p className='review-content'>{content}</p>
      <button className='read-review-button'>Read Review</button>
      <div className='likes-and-comments'>
        <p>❤︎⁠ {numberOfLikes}</p>
      </div>
    </div>
  )
}

function App() {
  const [selectedAnime, setSelectedAnime] = useState('');
  const [selectedSeason, setSelectedSeason] = useState('');

  const navigate = useNavigate();

  return (
    <div className='main-page'>
      <VerticalBar />
      <div className='align-translate-search-reviews-page'>
        <div className='review-tags-by-search-bar'>
          <select className='anime-select-reviews-page' defaultValue='' value={selectedAnime} onChange={(e) => setSelectedAnime(e.target.value)}>
            <option value='' disabled>Anime</option>
            <option value='aot'>Attack on Titan</option>
            <option value='jjk'>Jujutsu Kaisen</option>
            <option value='nana'>Nana</option>
            <option value='op'>One Piece</option>
          </select>
          <select className='season-select-reviews-page' defaultValue='' disabled={!selectedAnime} value={selectedSeason} onChange={(e) => setSelectedSeason(e.target.value)}>
            <option value='' disabled>Season</option>
            <option value='1'>Season 1</option>
            <option value='2'>Season 2</option>
            <option value='3'>Season 3</option>
          </select>
          <select className='episode-select-reviews-page' defaultValue='' disabled={!selectedSeason}>
            <option value='' disabled>Episode</option>
            <option value='1'>Episode 1</option>
            <option value='2'>Episode 2</option>
            <option value='3'>Episode 3</option>
            <option value='4'>Episode 4</option>
            <option value='5'>Episode 5</option>
          </select>
          <select className='genre-select-reviews-page' defaultValue=''>
            <option value='' disabled>Genre</option>
            <option value='action'>Action</option>
            <option value='comedy'>Comedy</option>
            <option value='fantasy'>Fantasy</option>
            <option value='horror'>Horror</option>
            <option value='mystery'>Mystery</option>
            <option value='romance'>Romance</option>
          </select>
          <select className='age-group-select-reviews-page' defaultValue=''>
            <option value='' disabled>Age Group</option>
            <option value='06'>0 - 6</option>
            <option value='711'>7 - 11</option>
            <option value='1218'>12 - 18</option>
            <option value='18+'>18+</option>
          </select>
          <select className='demographic-select-reviews-page' defaultValue=''>
            <option value='' disabled>Demographic</option>
            <option value='josei'>Josei</option>
            <option value='shoujo'>Shoujo</option>
            <option value='shounen'>Shounen</option>
          </select>
          <select className='rating-select-reviews-page' defaultValue=''>
            <option value='' disabled>Rating</option>
            <option value='1'>1/10</option>
            <option value='2'>2/10</option>
            <option value='3'>3/10</option>
            <option value='4'>4/10</option>
            <option value='5'>5/10</option>
            <option value='6'>6/10</option>
            <option value='7'>7/10</option>
            <option value='8'>8/10</option>
            <option value='9'>9/10</option>
            <option value='10'>10/10</option>
          </select>
        </div>
        <div className='search-bar'>
          <input type='text' placeholder='Search' className='search-input'/>
          <button className='filter-button-reviews-page' type='button' aria-label='Open filters'>☰</button>
        </div>
        <div className='translate'>
          <select className='translate-button' defaultValue=''>
            <option value='' disabled>Translate</option>
            <option value='english'>English</option>
            <option value='french'>Français</option>
            <option value='spanish'>Español</option>
          </select>
        </div>
      </div>
      <div className='upper-tabs-reviews'>
        <button className='upper-buttons' onClick={() => navigate('/')}>All</button>
        <button className='upper-buttons'>Posts</button>
        <button className='upper-buttons'>Reviews and Recommendations</button>
      </div>
      <div className='reviews-review-page'>
        <div className='review-list-review-page'>
          <Review
          profilePicture='/profile_pic.png'
          username='jane_loves_anime'
          tag1='Attack on Titan'
          tag2='Season 3'
          title='This was so good!'
          content='I finally got around to continuing Attack on Titan after watching the first two seasons a year ago. I have to say, this season went above and beyond my expectations. The season was filled with so many suprises and the character development was...'
          rating={9}
          numberOfLikes={13}
          datePosted='2026-10-24'
          isRecommended={true}
          />
          <Review
          profilePicture='public\profile_pic.png'
          username='jane_loves_anime'
          tag1='Nana'
          tag2='Season 1'
          title='Prepare your tissues for this one.'
          content='Ive been hearing so many good things about this anime and I finally got around to watching it. How do I feel after the first season? Gutted. Heartbroken. Hopeful. And obsessed with Nana Osaki. She has become my new...'
          rating={9}
          numberOfLikes={17}
          datePosted='2026-10-24'
          isRecommended={true}
          />
          <Review
          profilePicture='public\profile_pic.png'
          username='jane_loves_anime'
          tag1='My Hero Academia'
          tag2='Season 1'
          title='Disappointed.'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet pellentesque habitant morbi tristique senectus et netus. Integer vitae justo eget magna fermentum iaculis eu non diam.'
          rating={3}
          numberOfLikes={11}
          datePosted='2026-10-24'
          />
          <ReviewTwo
          profilePicture='public\profile_pic.png'
          username='jane_loves_anime'
          tag1='The Apothecary Diaries'
          tag2='Witch Hat Atelier'
          tag3='Ramparts of Ice'
          title='Best Anime of 2026'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet pellentesque habitant morbi tristique senectus et netus. Integer vitae justo eget magna fermentum iaculis eu non diam.'
          numberOfLikes={13}
          datePosted='2026-10-24'
          />
        </div>
      </div>
      <div className='bottom-buttons'>
        <button className='create-review-button-review-page'>Create Review</button>
      </div>
    </div>
  )
}

export default App
