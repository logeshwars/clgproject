import React from 'react'
import './Hero.css'

function Hero() {
    return (
        <div className='hero'>
            <div className='heroTop'><h3>Design System for React JS</h3>
            <p>Atomize React is a UI framework that helps developers collaborate with designers and build consistent user interfaces effortlessly.</p>
            </div>
            <div className='heroBottom'>
                <button>sign in</button>
            </div>
        </div>
    )
}

export default Hero
