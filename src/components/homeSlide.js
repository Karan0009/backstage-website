import * as React from "react"
import Image from "./image"
import { FiChevronDown } from "react-icons/fi"
const HomeSlide = () => {
  return (
    <>
      <div className="container home-slide">
        <div className="logo-container">
          <Image fileName="logo" />
        </div>
        <h1 className="home-slide-title">THE BACKSTAGE</h1>
        <p
          className="home-slide-subtitle"
          style={{ fontStyle: "italic", maxWidth: "600px" }}
        >
          Enabling the power of community to support talent, people and causes.
        </p>
        <p className="home-slide-subtitle m-top-50">
          Generate financial support from your fans through monthly pledges in
          our app and engage with them better.
        </p>
        <p className="home-slide-subtitle m-top-50">
          Ready to be part of our early launch
        </p>
        <a href="#register" className="register-link">
          Register
        </a>
        <a href="#features" className="home-slide-down-icon-container">
          <FiChevronDown />
        </a>
      </div>
    </>
  )
}

export default HomeSlide
