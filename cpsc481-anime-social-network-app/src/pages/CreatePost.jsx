import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import VerticalBar from '../components/VerticalBar'
import './CreatePost.css'

function CreatePost() {
  const navigate = useNavigate()
  const [tags, setTags] = useState(['Tag 1'])

  const addTag = () => {
    setTags([...tags, `Tag ${tags.length + 1}`])
  }

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
          {tags.map((tag) => (
            <button key={tag} className='post-tag'>{tag}</button>
          ))}
          <button className='create-post-add-tag' onClick={addTag}>+</button>
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