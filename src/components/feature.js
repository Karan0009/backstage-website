import * as React from "react"
import Image from "./image"

const Feature = ({ data: { title, imageName } }) => {
  return (
    <>
      <div className="feature-card">
        <div className="feature-card-img-container">
          {/* <img src={require(`../images/${imageName}.png`)} /> */}
          <Image fileName={imageName} />
        </div>
        <p className="feature-card-title">{title || "new feature"}</p>
      </div>
    </>
  )
}

export default Feature
