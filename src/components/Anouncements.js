import React from 'react'
import Anouncement from './Anouncement'
import './Anouncements.css'
function Anouncements() {
    return (
        <div className='anouncements'>
           <h3 className="anouncementsHead">Anouncement</h3> 
           <hr/>
           <marquee behavior="scroll" scrollamount="10" direction="up">
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
