import { Facebook, Instagram, Twitter, YouTube } from '@material-ui/icons'
import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="icons">
                <a className="facebook" href="https://www.facebook.com/konguengineeringcollegeperundurai" target="_blank" rel="noopener noreferrer"><Facebook/></a>
                <a className="instagram" href="https://www.instagram.com/konguengineeringcollege/" target="_blank" rel="noopener noreferrer"><Instagram/></a>
                <a className="twitter" href="https://twitter.com/KonguOfficial" target="_blank" rel="noopener noreferrer"><Twitter/></a>
                <a className="youtube" href="https://www.youtube.com/c/konguengineeringcollege" target="_blank" rel="noopener noreferrer"><YouTube/></a>
            </div>
            <div><a href="https://kongu.ac.in/" className="keclink">Kongu Engneering College</a></div>
            <div><span>Designed and maintained by MCA coding club</span></div>
        </div>
    )
}

export default Footer
