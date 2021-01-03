import React, { useState } from 'react'
import './Hamburger.scss'

const Hamburger = () => {
    const [state, setState] = useState(false)

    const handleToggle = () => {
        setState(!state)
        console.log('clicked!')
    }


    return (
        <div id='toggler' className={state ? 'toggler' : 'toggler open'} onClick={handleToggle}>
            <span className='span1'></span>
            <span className='span2'></span>
            <span className='span3'></span>
        </div>
    )
}

export default Hamburger
