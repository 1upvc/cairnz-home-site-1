 import * as React from "react"
 import { StaticImage } from "gatsby-plugin-image"

 const Bio = () => {
  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        objectPosition="50% 50%"
        formats={["auto", "webp"]}
        src="../../static/assets/superpower-logo-x200.png"
        quality={95}
        alt="Profile Picture"
      />
    </div>
   )
 }

 export default Bio
