import React, { useState } from "react"
import Input from "./input"
import Textarea from "./textarea"

const RegisterFormSlide = () => {
  return (
    <>
      <div id="register" className="container register-form-slide">
        <h1 className="slide-title" style={{ marginTop: "80px" }}>
          Register
        </h1>
        <form
          className="register-form"
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
              placeholder="otherSocial"
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
          <button className="register-btn">Submit</button>
        </form>
      </div>
    </>
  )
}

export default RegisterFormSlide
