import React from 'react'
import Anouncement from './Anouncement'
import Posts from './Posts'
import './Body.css'

function Body() {
    return (
        <div className='body'>
            <Posts/>
            <Anouncement/>
        </div>
    )
}

export default Body
