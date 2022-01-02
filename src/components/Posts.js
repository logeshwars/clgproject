import React,{useState} from 'react'
import './Posts.css'
import AddBoxIcon from '@mui/icons-material/AddBox';
import CreatePost from './CreatePost';

import Post from './Post';
function Posts() {
  const[showPost,setShowPost]=useState(false);
    return (
        <div className='posts'>
          <div className='postsHead'><h3>Posts</h3>
          <button className='createPost' onClick={()=>{setShowPost(true)}}><AddBoxIcon/> <span>Create Post</span></button>
         </div>
           <div className="postHolder">
              <Post profile="" name="Logeshwar" title="Placement" time="2 weeks" url="https://kongu.ac.in/carousel/images/ranks2020.jpg"
             content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia natus non temporibus. Fugit, consequuntur explicabo quos temporibus beatae unde at placeat sequi dignissimos vel non deleniti eos labore sapiente? Consequatur."/>
             <Post profile="" title="Challenges" name="Logeshwar" time="2 weeks" url=""
             content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia natus non temporibus. Fugit, consequuntur explicabo quos temporibus beatae unde at placeat sequi dignissimos vel non deleniti eos labore sapiente? Consequatur.
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia natus non temporibus. Fugit, consequuntur explicabo quos temporibus beatae unde at placeat sequi dignissimos vel non deleniti eos labore sapiente? Consequatur.
             "/>
             <Post profile="" title="Forums" name="Logeshwar" time="2 weeks" url="https://kongu.ac.in/carousel/images/pl_2.jpg"
             content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia natus non temporibus. Fugit, consequuntur explicabo quos temporibus beatae unde at placeat sequi dignissimos vel non deleniti eos labore sapiente? Consequatur."/>
           </div>
          {showPost&&<div><CreatePost showPost={setShowPost}/></div>}
        </div>
    )
}

export default Posts
