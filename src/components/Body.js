import React from 'react'
import Anouncements from './Anouncements'
import Posts from './Posts'
import Footer from './Footer'
import './Body.css'

function Body() {
    return (
        <div className='body'>
            <Posts/>
            <div className="bodyRight">
            <Anouncements/>
            <Footer/>
            </div>
        </div>
    )
}

export default Body
