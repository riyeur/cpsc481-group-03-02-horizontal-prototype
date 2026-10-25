import './App.css'
import VerticalBar from './components/VerticalBar'

const Post = ({profilePicture, username, tag1, tag2, tag3, title, content, numberOfLikes, numberOfComments, datePosted}) => {
  return (
    <div className='post-item'>
      <div className='top-items'>
        <img src={profilePicture} alt={username} className='post-profile-picture' height="70" width="auto" />
        <text className='post-username'>{username}</text>
        <p className='date-posted'>{datePosted}</p>
      </div>
      <div className='post-tags'>
        <button className='post-tag'>{tag1}</button>
        <button className='post-tag'>{tag2}</button>
        <button className='post-tag'>{tag3}</button>
      </div>
      <p className='post-title'>{title}</p>
      <p className='post-content'>{content}</p>
      <p>❤︎ ⁠{numberOfLikes}</p>
      <p>💬⁠{numberOfComments}</p>
    </div>
  )
}

/* Add recommended part */
const Review = ({profilePicture, username, tag1, tag2, title, content, rating, numberOfLikes, datePosted}) => {
  return (
    <div className='review-item'>
      <div className='top-items'>
        <img src={profilePicture} alt={username} className='review-profile-picture' height="70" width="auto" />
        <text className='review-username'>{username}</text>
        <p className='date-posted'>{datePosted}</p>
      </div>
      <div className='review-tags'>
        <button className='review-tag'>{tag1}</button>
        <button className='review-tag'>{tag2}</button>
      </div>
      <div className='review-title-rating'>
        <p className='review-title'>{title}</p>
        <p>{rating}/10</p>
      </div>
      <p className='review-content'>{content}</p>
      <button className='read-review-button'>Read Review</button>
      <p>❤︎⁠ {numberOfLikes}</p>
    </div>
  )
}

function App() {
  return (
    <div className='main-page'>
      <VerticalBar />
      <div className='align-translate-search'>
        <div className='search-bar'>
          <input type='text' placeholder='Search' className='search-input'/>
        </div>
        <div className='translate'>
          <button>Translate</button>
        </div>
      </div>
      <div className='upper-tabs'>
        <button>All</button>
        <button>Posts</button>
        <button>Reviews and Recommendations</button>
      </div>
      <div className='posts-and-reviews'>
        <div className='post-list'>
          <Post
            profilePicture='public\profile_pic.png'
            username='wilson123'
            tag1='Assasination Classroom'
            tag2='Season 1'
            tag3='Episode 9'
            title='Amazing episode!'
            content='Love how they are developing the characters and plot. So far so good'
            numberOfLikes={10}
            numberOfComments={5}
            datePosted='2026-10-24'
          />
          <Post
            profilePicture='public\profile_pic.png'
            username='sean_1917'
            tag1='Jujutsu Kaisen'
            tag2='Season 1'
            tag3='Episode 3'
            title='What is going on'
            content='Lowkey confused why the main character is so OP. Hope it doesnt stay this way'
            numberOfLikes={3}
            numberOfComments={7}
            datePosted='2026-10-24'
          />
        </div>
        <div className='review-list'>
          <Review
          profilePicture='public\profile_pic.png'
          username='jane_loves_anime'
          tag1='Attack on Titan'
          tag2='Season 3'
          title='This was so good!'
          content='I finally got around to continuing Attack on Titan after watching the first two seasons a year ago. I have to say, this season went above and beyond my expectations. The season was filled with...'
          rating={9}
          numberOfLikes={13}
          datePosted='2026-10-24'
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
          />
        </div>
      </div>
    </div>
  )
}

export default App
