import React from 'react'

function MiddleComponent({url,title,content}) {
    return (
        <div>
            <div className="middledivs">
          <div className='mdivsFirst'><img src={url} alt=""/></div>
          <div className='mdivsSecond'>
            <h1>{title}</h1>
            <span>{content}</span>
          </div>
          <div className='mdivsThird'><a href='#'>see more</a></div>
        </div>
        </div>
    )
}

export default MiddleComponent
