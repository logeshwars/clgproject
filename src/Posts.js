import React,{useState} from 'react'
import './Posts.css'
import AddBoxIcon from '@mui/icons-material/AddBox';
import CreatePost from './CreatePost';
import { Avatar } from '@material-ui/core'
function Posts() {
  const[showPost,setShowPost]=useState(true);
    return (
        <div className='posts'>
          <div className='postsHead'><h3>Posts</h3>
          <button className='createPost' onClick={()=>{setShowPost(true)}}><AddBoxIcon/> <span>Create Post</span></button>
         </div>
           <div className="postHolder">
             <div className='post'>
               <div className='postProfile'>
                 <div> <Avatar/>
                 <span  className='profileName'>Logeshwar</span></div>
                 <span className='postTime'>2 weeks ago</span>
               </div>
             <img src='https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg' alt=''/>
             <div className='postContentHolder'>
               <p className='postContent'>
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia natus non temporibus. Fugit, consequuntur explicabo quos temporibus beatae unde at placeat sequi dignissimos vel non deleniti eos labore sapiente? Consequatur.
               </p>
             </div>
             </div>
           </div>
          {showPost&&<div><CreatePost showPost={setShowPost}/></div>}
        </div>
    )
}

export default Posts
