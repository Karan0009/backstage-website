import React, { useState } from "react"
import Layout from "../components/layout"
import HomeSlide from "../components/homeSlide"
import SEO from "../components/seo"
import FeaturesSlide from "../components/featuresSlide"
import UpcomingSlide from "../components/upcomingSlide"
import ArIcon from "../svgs/ar.svg"
import PaidCall from "../svgs/paidCall.svg"
import Pledge from "../svgs/Pledge.svg"
import LiveStream from "../svgs/livestream.svg"
import PaidMsg from "../svgs/paidMsg.svg"
import CalenderIcon from "../svgs/CalenderReservation.svg"
import RegisterFormSlide from "../components/registerFormSlide"
import { FiCheck } from "react-icons/fi"
import CrossIcon from "../svgs/cross.svg"

const IndexPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
    document.querySelector("html").style.overflow = "unset"
    setIsOpen(false)
  }

  const openModal = () => {
    document.querySelector("html").style.overflow = "hidden"
    setIsOpen(true)
  }

  return (
    <Layout>
      <SEO title="Home" />
      <HomeSlide />
      <FeaturesSlide
        features={[
          { title: "Paid supporters", imageName: "paidSupporters" },
          { title: "Post Media & Go Live", imageName: "postMedia" },
          {
            title: "Schedule your livestreams / Calendar",
            imageName: "schedule",
          },
          { title: "Automated LIVE Giveaway", imageName: "automated" },
          { title: "Refreshing User Interface", imageName: "refreshing" },
        ]}
      />
      <UpcomingSlide
        features={[
          {
            title: "Bookings on your Influencers Services",
            svg: CalenderIcon,
          },
          {
            title: "Paid private / Group calls",
            svg: PaidCall,
          },
          {
            title: "Customizable monthly support pledge",
            svg: Pledge,
          },
          {
            title: "Stream games/screens",
            svg: LiveStream,
          },
          {
            title: "LIVE AR Games",
            svg: ArIcon,
          },
          {
            title: "Paid Messaging",
            svg: PaidMsg,
          },
        ]}
      />
      <RegisterFormSlide openModal={openModal} />
      {isOpen && (
        <>
          <div className="form-submit-modal">
            <span
              tabIndex={0}
              role="button"
              className="close-modal"
              onKeyDown={closeModal}
              onClick={closeModal}
            >
              <CrossIcon />
            </span>
            <div className="form-submit-modal-content">
              <FiCheck />
              <p>Done!</p>
            </div>
          </div>
          <div
            role="none"
            className="backdrop"
            onKeyDown={closeModal}
            onClick={closeModal}
          ></div>
        </>
      )}
    </Layout>
  )
}

export default IndexPage
