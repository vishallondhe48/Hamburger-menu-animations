import React, { useState } from 'react'
import './HamburgerArrow.scss'

const HamburgerArrow = () => {
    const [state, setState] = useState(true)

    const handleToggle = () => {
        setState(!state)

    }
    return (
        <>
            <h2>Hamburger arrow animation</h2>
            <div className="menu-link-wrapper">
                <div className={state ? "menu-link" : 'menu-link menu-trigger-open'} onClick={handleToggle}>
                    <span className="lines"></span>
                </div>
            </div>


        </>
    )
}

export default HamburgerArrow
