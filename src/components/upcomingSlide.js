import React, { Component } from "react"
import Image from "./image"
import UpcomingFeature from "./upcomingFeature"
import ArIcon from "../svgs/ar.svg"

const UpcomingSlide = ({ features }) => {
  return (
    <div className="container upcoming-slide">
      <h1 className="slide--title" style={{ marginTop: "40px" }}>
        Upcoming 🔥
      </h1>

      <div className="upcoming-features-list">
        {features &&
          features.map(feature => <UpcomingFeature data={feature} />)}
      </div>
    </div>
  )
}

export default UpcomingSlide
