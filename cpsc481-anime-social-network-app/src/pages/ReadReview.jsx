import './ReadReview.css'
import VerticalBar from '../components/VerticalBar.jsx'

const Comment = ({username, content, datePosted, isMyComment}) => {
    return (
        <div className='comment-item'>
            <div className='comment-info'>
                <div className='comment-top'>
                    <p className='comment-username'>@{username}</p>
                    <p className='comment-date'>{datePosted}</p>
                </div>
                <div className='buttons-and-content'>
                    {isMyComment && (<div className='comment-edit-and-delete'>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>)}
                    <p className='comment-content'>{content}</p>
                </div>
            </div>
        </div>
    )
}

function ReadReview() {
    return (
        <div className='main-read-review-page'>
            <VerticalBar />
            <div className='read-review-page'>
                <div className='full-review-section'>
                    <p className='posted-date-for-review'>Posted 2 days ago</p>
                    <div className='review-top-section'>
                        <div className='review-left-section'>
                            <img src='/review_pic.png' alt='Review Picture' className='review-main-picture' height='150' width='150'/>
                            <p className='review-poster-username'>@jane_loves_anime</p>
                        </div>
                        <div className='review-right-section'>
                            <p className='posted-review-title'>This was so good!</p>
                            <div className='posted-review-tags'>
                                <button className='posted-review-anime-tag'>Attack On Titan</button>
                                <button className='posted-review-season-tag'>Season 3</button>
                            </div>
                            <p className='posted-review-rating'>Rating: 9/10</p>
                            <div className='posted-review-views-and-likes'>
                                <p className='posted-review-views'>Views: 110</p>
                                <p className='posted-review-likes'>Likes: 13</p>
                            </div>
                            <button className='posted-review-like-button'>❤︎ Like</button>
                        </div>
                    </div>
                    <p className='posted-review-title'>Introduction</p>
                    <div className='posted-review-content'>
                        <p>I finally got around to continuing Attack on Titan after watching the first two seasons a year ago. I have to say, this season went above and beyond my expectations.</p>
                        <p>The season was filled with so many suprises and the character development was really good. It was clear how different the characters were from Season 1 to now.</p>
                        <p>Overall, this was a great season and I'm excited to watch the next one. I'll be writing a review on it so keep your eyes out for that!</p>
                    </div>
                </div>
                <div className='posted-review-comment-section'>
                    <p className='comment-section-title'>Comments</p>
                    <div className='available-comments'>
                        <Comment
                        username='anime_fan123'
                        content='Totally agree!'
                        datePosted='2026-10-25'
                        />
                        <Comment
                        username='your_username'
                        content='Wow thats so true'
                        datePosted='2026-10-25'
                        isMyComment={true}
                        />
                    </div>
                </div>
                <div className='posted-review-write-comment-section'>
                    <textarea placholder='Write a comment...' rows={4}/>
                    <button type='button' >Post Comment</button>
                </div>
            </div>
        </div>
    )
}

export default ReadReview

