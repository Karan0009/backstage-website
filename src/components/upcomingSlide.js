import React from "react"
import UpcomingFeature from "./upcomingFeature"

const UpcomingSlide = ({ features }) => {
  return (
    <div className="container upcoming-slide">
      <h1 className="slide--title" style={{ marginTop: "40px" }}>
        Upcoming{" "}
        <span aria-label="img" role="img">
          🔥
        </span>
      </h1>

      <div className="upcoming-features-list">
        {features &&
          features.map((feature, index) => (
            <UpcomingFeature key={index} data={feature} />
          ))}
      </div>
    </div>
  )
}

export default UpcomingSlide
