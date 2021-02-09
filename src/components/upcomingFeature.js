import * as React from "react"

const UpcomingFeature = ({ data: { title, svg: Svg } }) => {
  return (
    <>
      <div className="feature-card" style={{ justifyContent: "flex-start" }}>
        <Svg className="svg-styles" />
        <p
          className="feature-card-title"
          style={{ color: "black", maxWidth: "300px" }}
        >
          {title || "new feature"}
        </p>
      </div>
    </>
  )
}

export default UpcomingFeature
