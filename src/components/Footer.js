import React from 'react'
import PropTypes from 'prop-types'
import { RiHeart2Line } from "@react-icons/all-files/ri/RiHeart2Line"
import { SiGnuprivacyguard } from "@react-icons/all-files/si/SiGnuprivacyguard"

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy;2022 Cairnz
        {" "}
        <span>
          <RiHeart2Line
            style={{
              lineHeight: "inherit",
              fontSize: "0.8rem",
                color: "red",
              }}
          />
        </span>{" "}
          CrytoIsReal
        {" "}
        <span>
          <SiGnuprivacyguard
            style={{
              lineHeight: "inherit",
              fontSize: "0.8rem",
              color: "gray",
            }}
          />
        </span>{" "}
        <a href="/privacy">Privacy</a> | <a href="/terms">Terms</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
