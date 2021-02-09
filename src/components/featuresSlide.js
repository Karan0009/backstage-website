import * as React from "react"
import Feature from "./feature"

const FeaturesSlide = ({ features }) => {
  return (
    <div id="features" className="container features-slide">
      <h1 className="slide-title">Features</h1>
      <div className="features-list">
        {features &&
          features.map((feature, index) => (
            <Feature key={index} data={feature} />
          ))}
      </div>
    </div>
  )
}

export default FeaturesSlide
