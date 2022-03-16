import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { RiFacebookBoxFill } from "@react-icons/all-files/ri/RiFacebookBoxFill"
import { RiTwitterFill, } from "@react-icons/all-files/ri/RiTwitterFill"
import { RiInstagramFill } from "@react-icons/all-files/ri/RiInstagramFill"
import { RiGithubFill } from "@react-icons/all-files/ri/RiGithubFill"
import { RiYoutubeFill, } from "@react-icons/all-files/ri/RiYoutubeFill"

const Main = (props) => {
  const close = <div className="close" onClick={() => {props.onCloseArticle()}}></div>

  return (
      <div ref={props.setWrapperRef} id="main" style={props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${props.article === 'intro' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <Link to="https://bibwoe.com" rel="noopener noreferrer" target="_blank" area-label="Bibwoe">
            <h2 className="major">About</h2>
          </Link>
          <span className="image main">
            <Link to="https://bibwoe.com" rel="noopener noreferrer" target="_blank" area-label="Bibwoe">
              <StaticImage
                formats={["auto", "webp"]}
                src="../../static/assets/pic01.jpg"
                alt="Intro"
              />
            </Link>
          </span>
          <p>
          Our mission is to simple: grow and support proof of stake (PoS) solutions.
          We strive to make PoS sustainable with a decentralized impact.

          Since 2021, with democratization of crypto staking solutions, CAIRNZ has been dedicated to supporting a consistent sustainable path for proof of stake (PoS) or staking for everyone.  Often, staking paths have
          have markers or cairns - some are known.  We identify unknowns on this journey as 'z' factors.
          'Cairnz' helps  with security and network based solutions as well as education for organizations and individuals partcipating in the staking community.
          </p>
          <p>
          We provide support in the following areas:
          <ul>
            <li>Stake Pools for Cardano</li>
            <li>Blockchain Data</li>
            <li>Cyber Security</li>
          </ul>
          </p>
          {close}
        </article>

        <article id="work" className={`${props.article === 'work' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
        <Link to="https://mansbooks.com" rel="noopener noreferrer" target="_blank" area-label="Mansbooks">
          <h2 className="major">Stake</h2>
        </Link>
          <span className="image main">
            <Link to="https://mansbooks.com" rel="noopener noreferrer" target="_blank" area-label="Mansbooks">
              <StaticImage
                formats={["auto", "webp"]}
                src="../../static/assets/pic02.jpg"
                alt="Work"
              />
            </Link>
          </span>
          <p>
          </p>
          <p>
          We beleive in a decentralized future of commerce and are supporters
          of the <a href='https://cardano.org/'>Cardano Project</a>.  Staking provides an opportunity
          for securing the Cardano network or other networks (e.g., ETH, DASH) by processing data and keeping the network trusted.
          </p>
          <p>
          The ability to delegate a stake is fundamental to how blockchain networks that are PoS are secured.
          Our staking pools groups are based in North America and aimed at helping others maximize digital asset rewards by making staking or data processing
          accessible as a source of value to anyone.   ADA held on the Cardano network represents a stake in the network, with the size of the
          stake proportional to the amount of ADA held.  Details of stake pool(s) we support are located below.
          </p>
          <p>
          Participate by delegating to the following pool(s):
          <li>Ticker(s): PATH</li>
          <li>Expected Annual Reward Rate: ~3-10% </li>
          <li>Commission: Coming Soon </li>
          <li>Delegation Hash: Coming Soon</li>
          <li>Machine Specs: Coming Soon</li>
          <li>Pool Margin: Coming Soon</li>
          <li>Pledge: Coming Soon</li>
          <li>Payout Frequency: Every Epoch (~5 days)</li>
          <li>Potential Rewards Per Epoch: Coming Soon</li>
          </p>
          <p>
          Stake with other Partners & Guidance
          </p>
          <p>
          Interested in working with an larger partner to expand your network?  We've got you covered.
          Check out <a href='https://staked.us/'>Staked.US</a>.
          </p>
          <p>
          If interested, please reach out for an introduction to stake digital assets with a Partner.
          Alternatively, use the following details Partner Link: <a href='staked.us/?pid=FDrCpe2et1'>Staked.US</a> | Code: FDrCpe2et1
          </p>
          <p>
          For further guidance on Cardano and stake pools, please
          navigate to <a href='https://cardano.org/stake-pool-operation/'>Cardano Stake Pool Operation for Developers</a>.  To learn how to
          delegate your Cardano (ADA), navigate to
          video <a href='https://www.youtube.com/watch?v=VtkjM_0k4R0'>Delegating in Daedalus Wallet for Cardano</a>
          </p>
          {close}
        </article>

        <article id="about" className={`${props.article === 'about' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <Link to="https://publiuslogic.com" rel="noopener noreferrer" target="_blank" area-label="PubliusLogic">
            <h2 className="major">Lab</h2>
          </Link>
          <span className="image main">
            <Link to="https://publiuslogic.com" rel="noopener noreferrer" target="_blank" area-label="PubliusLogic">
              <StaticImage
                formats={["auto", "webp"]}
                src="../../static/assets/pic03.jpg"
                alt="About"
              />
            </Link>
          </span>
          <p>
            Coming Soon
          </p>
          {close}
        </article>

        <article id="contact" className={`${props.article === 'contact' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form
            className="contact-form"
            action="/thanks"
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <Link to="https://twitter.com/donboulton" className="icon" rel="noopener noreferrer" target="_blank" area-label="Bibwoe">
                <RiTwitterFill alt='Twitter'
                  style={{
                    fontSize: "2rem",
                    color: "gray",
                  }}
                />
                <span className="label">Twitter</span>
              </Link>
            </li>
            <li>
              <Link to="https://facebook.com/donboulton" className="icon" rel="noopener noreferrer" target="_blank" area-label="Bibwoe">
                <RiFacebookBoxFill alt='Facebook'
                  style={{
                    fontSize: "2em",
                    color: "gray",
                  }}
                />
                <span className="label">Facebook</span>
              </Link>
            </li>
            <li>
              <Link to="https://www.instagram.com/boulton3662/" className="icon" rel="noopener noreferrer" target="_blank" area-label="Bibwoe">
                <RiInstagramFill alt='Instagram'
                  style={{
                    fontSize: "2em",
                    color: "gray",
                  }}
                />
                <span className="label">Instagram</span>
              </Link>
            </li>
            <li>
              <Link to="https://gihub.com/donaldboulton/donboulton.com" className="icon" rel="noopener noreferrer" target="_blank" area-label="Bibwoe">
                <RiGithubFill alt='Github'
                  style={{
                    fontSize: "2em",
                    color: "gray",
                  }}
                />
                <span className="label">GitHub</span>
              </Link>
            </li>
            <li>
              <Link to="https://youtube.com/donboulton/" className="icon" rel="noopener noreferrer" target="_blank" area-label="Bibwoe">
                <RiYoutubeFill alt='Youtube'
                  style={{
                    fontSize: "2em",
                    color: "gray",
                  }}
                />
                <span className="label">Youtube</span>
              </Link>
            </li>
          </ul>
          {close}
        </article>

      </div>
  )
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
