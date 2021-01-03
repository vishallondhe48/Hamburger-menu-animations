import React, { useState } from 'react'
import './HamburgerCircle.scss'

const HamburgerCircle = () => {
    const [state, setState] = useState(true)

    const handleToggle = () => {
        setState(!state)
    }

    return (
        <>
            <section className="mod model-6">
                <div className={state ? "menu" : "menu active"} onClick={handleToggle}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"> </div>
                </div>
            </section>
        </>
    )
}

export default HamburgerCircle
