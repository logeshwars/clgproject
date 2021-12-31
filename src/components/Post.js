import React from 'react'
import { Avatar } from '@material-ui/core'
function Post({url,profile,content,time,name}) {
    return (
        <div className='post'>
        <div className='postProfile'>
          <div> <Avatar src={profile}/>
          <span  className='profileName'>{name}</span></div>
          <span className='postTime'> {`${time} ago`}</span>
         </div>
         <img src={url} alt=''/>
         <div className='postContentHolder'>
         <p className='postContent'>
         {content}
        </p>
      </div>
      </div>
    )
}

export default Post
