import React from "react"
import Input from "./input"
import Textarea from "./textarea"

const RegisterFormSlide = props => {
  const handleFormSubmit = e => {
    e.preventDefault()
    props.openModal()
  }
  return (
    <>
      <div id="register" className="container register-form-slide">
        <h1 className="slide-title" style={{ marginTop: "80px" }}>
          Register
        </h1>
        <form
          className="register-form"
          onSubmit={handleFormSubmit}
          style={{
            margin: "80px 0",
          }}
        >
          <div className="row input-row" style={{ justifyContent: "center" }}>
            <Input
              type="text"
              inputContainerClassName="register-input-container"
              id="name"
              name="name"
              placeholder="Name"
              className="register-input left-input"
            />
            <Input
              type="text"
              inputContainerClassName="register-input-container"
              id="instagram"
              name="instagram"
              placeholder="Instagram"
              className="register-input"
            />
          </div>
          <div className="row input-row" style={{ justifyContent: "center" }}>
            <Input
              type="email"
              inputContainerClassName="register-input-container"
              id="email"
              name="email"
              placeholder="Email"
              className="register-input left-input"
            />
            <Input
              type="text"
              inputContainerClassName="register-input-container"
              id="tikTok"
              name="tikTok"
              placeholder="Tik Tok"
              className="register-input"
            />
          </div>
          <div className="row input-row" style={{ justifyContent: "center" }}>
            <Input
              type="text"
              inputContainerClassName="register-input-container"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Phone"
              className="register-input left-input"
            />
            <Input
              type="text"
              inputContainerClassName="register-input-container"
              id="otherSocial"
              name="otherSocial"
              placeholder="other social"
              className="register-input"
            />
          </div>
          <div className="row input-row">
            <Input
              type="text"
              inputContainerClassName="register-input-container"
              id="country"
              name="country"
              placeholder="Country"
              className="register-input"
            />
          </div>
          <div
            className="row input-row"
            style={{
              justifyContent: "center",
            }}
          >
            <Textarea
              id="feedback"
              name="feedback"
              placeholder="Feedback"
              inputContainerClassName="register-input-container register-textarea-container"
              className="register-input register-feedback"
              style={{
                height: "400px",
                padding: "20px 30px",
                width: "100%",
                margin: "10px auto",
              }}
            />
          </div>
          <button className="register-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default RegisterFormSlide
