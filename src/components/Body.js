import React from 'react'
import Anouncements from './Anouncements'
import Posts from './Posts'
import './Body.css'

function Body() {
    return (
        <div className='body'>
            <Posts/>
            <Anouncements/>
        </div>
    )
}

export default Body
