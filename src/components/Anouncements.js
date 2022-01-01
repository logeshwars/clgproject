import React from 'react'
import Anouncement from './Anouncement'
import './Anouncements.css'
function Anouncements() {
    return (
        <div className='anouncements' style={{backgroundImage:"url('images/svg.png')"}}>
           <h3 className="anouncementsHead">Anouncement</h3> 
           <hr/>
           <marquee behavior="scroll"  direction="up">
           <div className="anouncementsHolder">
           <Anouncement/>
           <Anouncement/>
           <Anouncement/>
           <Anouncement/>
           <Anouncement/>
           </div>
           </marquee>
           
        </div>
    )
}

export default Anouncements
