import React from 'react'
import { Link } from "gatsby"
import PropTypes from 'prop-types'
import Bio from "./bio"

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
          <Bio className="icon" />
        </div>
        <div className="content">
            <div className="inner">
              <h1>CAIRNZ</h1>
              <p>
                Find the path to {' '}
               <a href="https://tinyurl.com/yzu768a7">Stake Pools</a> and explore {' '}
                <br />
                blockchain {' '}
                <a href="https://coindesk.com">data</a> all with us.
              </p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Stake</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Lab</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
