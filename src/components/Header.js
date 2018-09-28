import React from 'react'
import yin_yang from '../svg/yin_yang.svg'

function Header(props) {
    return (
        <header className="App-header">
            <img src={yin_yang} className="App-logo" alt="logo" />
            <h1 className="App-title">Alan Watts Project</h1>
        </header>
    )
}

export default Header