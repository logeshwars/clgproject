import { Login } from '@mui/icons-material'
import React from 'react'
import './Top.css'

function Top() {
    return (
        <div className='top'>
        <div className='topLeft'>
            <h3>MCA coding club</h3>
        </div>
        <div className='topRight'>
        <button className='topRightButton'>Login <Login  style={{marginLeft:"6px",width:'20px'}}/></button>
        </div>
        </div>
    )
}

export default Top
