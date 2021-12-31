import React from 'react'
import './Middle.css'
import MiddleComponent from './MiddleComponent';

function Middle() {
  const content=[
    {
      url:"images/chat.png",
      title:"Forum",
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
    },
    {
      url:"images/algorithm.png",
      title:"Challenges",
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
    }
    ,{
      url:"images/job-offer.png",
      title:"Placement",
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
    }
  ];
    return (
      <div className="middle">
         {
           content.map((props)=>
             (<MiddleComponent url={props.url} title={props.title} content={props.content}/>)
           )
         }
      </div>
    );
}

export default Middle
