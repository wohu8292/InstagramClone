import React from 'react'
import "../styles/Post.css"
import {Avatar} from '@mui/material'

const Post = ({username, caption, imgURL}) => {
  return (
    <div className='post'>
        {/* header */}
        <div className='post__header'>
          <Avatar className='post__avatar' alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <h3>{username}</h3>
        </div>

        {/* image */}
        <img className="post__image" src={imgURL} alt='' />

        {/* caption */}
        <h4 className='post__text'><strong>{username}: </strong>{caption}</h4>
    </div>
  )
}

export default Post