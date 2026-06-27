import React from 'react'
import PropTypes from 'prop-types'
import Bio from "./bio"

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
          <Bio className="icon" logoVisible={props.logoVisible} />
        </div>
        <div className="content">
            <div className="inner">
              <h1>BABELS</h1>
              <p>
                AI Detection Engineering Solutions and News for Cyber Defense Practitioners.
              </p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="#" onClick={(e) => { e.preventDefault(); props.onOpenArticle('intro') }}>About</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); props.onOpenArticle('work') }}>GitHub</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); props.onOpenArticle('about') }}>Articles</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); props.onOpenArticle('contact') }}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool,
    logoVisible: PropTypes.bool
}

export default Header
