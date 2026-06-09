 import * as React from "react"
 import { StaticImage } from "gatsby-plugin-image"

 const Bio = ({ logoVisible }) => {
  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        objectPosition="50% 50%"
        formats={["auto", "webp"]}
        src="../../static/assets/superpower-logo-x200.png"
        quality={95}
        alt="Profile Picture"
        style={{
          filter: "brightness(0) invert(1) drop-shadow(0 0 12px rgba(255,255,255,0.9))",
          opacity: logoVisible ? 1 : 0,
          mixBlendMode: "screen",
          transition: "opacity 0.9s ease-in-out"
        }}
      />
    </div>
   )
 }

 export default Bio
