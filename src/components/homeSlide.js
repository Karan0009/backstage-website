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
        <p className="home-slide-subtitle">
          We help creators pursue their talent and generate subscription revenue
          through their fanbase.
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
