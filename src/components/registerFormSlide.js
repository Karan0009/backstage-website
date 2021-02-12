import React, { useState, useEffect } from "react"
import Input from "./input"
import Textarea from "./textarea"
import { required, emailValidator, number, length } from "../utils/validators"

const RegisterFormSlide = props => {
  const [username, setUsername] = useState({
    value: "",
    valid: false,
    touched: false,
    validators: [required, length({ min: 3, max: 100 })],
    errorMessage: "Enter valid value",
  })
  const [instagram, setInstagram] = useState({
    value: "",
    valid: false,
    touched: false,
    validators: [required, length({ max: 200 })],
    errorMessage: "Enter valid value",
  })
  const [tikTok, setTikTok] = useState({
    value: "",
    valid: false,
    touched: false,
    validators: [required, length({ max: 200 })],
    errorMessage: "Enter valid value",
  })
  const [phoneNumber, setPhoneNumber] = useState({
    value: "",
    valid: false,
    touched: false,
    validators: [required, number],
    errorMessage: "Enter valid value",
  })
  const [otherSocial, setOtherSocial] = useState({
    value: "",
    valid: true,
    touched: false,
    validators: [],
    errorMessage: "",
  })
  const [email, setEmail] = useState({
    value: "",
    valid: false,
    touched: false,
    validators: [required, emailValidator],
    errorMessage: "Enter valid value",
  })
  const [country, setCountry] = useState({
    value: "",
    valid: false,
    touched: false,
    validators: [required, length({ max: 200 })],
    errorMessage: "Enter valid value",
  })
  const [feedback, setFeedback] = useState({
    value: "",
    valid: false,
    touched: false,
    validators: [required, length({ min: 3, max: 1000 })],
    errorMessage: "Enter valid value",
  })

  const [formIsValid, setFormIsValid] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (
      username.valid &&
      instagram.valid &&
      tikTok.valid &&
      email.valid &&
      country.valid &&
      feedback.valid &&
      phoneNumber.valid
    )
      setFormIsValid(true)
    else setFormIsValid(false)
  }, [username, instagram, tikTok, phoneNumber, email, country, feedback])

  const handleFormSubmit = async e => {
    try {
      e.preventDefault()
      setIsLoading(true)
      const response = await fetch("/.netlify/functions/registerform", {
        method: "POST",
        body: JSON.stringify({
          name: username.value.trim(),
          email: email.value.trim(),
          phone: phoneNumber.value.trim(),
          instagram: instagram.value.trim(),
          tiktok: tikTok.value.trim(),
          otherSocial: otherSocial.value.trim(),
          country: country.value.trim(),
          feedback: feedback.value.trim(),
        }),
      })
      setIsLoading(false)
      const data = await response.json()
      if (data.success) {
        props.openModal("Done!")
        setUsername({ ...username, valid: false, value: "", touched: false })
        setInstagram({ ...instagram, valid: false, value: "", touched: false })
        setEmail({ ...email, valid: false, value: "", touched: false })
        setPhoneNumber({
          ...phoneNumber,
          valid: false,
          value: "",
          touched: false,
        })
        setTikTok({ ...tikTok, valid: false, value: "", touched: false })
        setOtherSocial({
          ...otherSocial,
          valid: false,
          value: "",
          touched: false,
        })
        setFeedback({ ...feedback, valid: false, value: "", touched: false })
        setCountry({ ...country, valid: false, value: "", touched: false })
        console.log(data)
      } else {
        console.log(data)
        props.openModal("Error:(")
      }
    } catch (error) {
      props.openModal("Error:(")
      console.log(error)
    }
  }

  //input change handlers
  const usernameChangeHandler = e => {
    const value = e.target.value
    let isValid = true
    if (username.validators)
      for (const validator of username.validators) {
        isValid = isValid && validator(value)
      }
    setUsername({ ...username, value: value, valid: isValid })
  }
  const emailChangeHandler = e => {
    const value = e.target.value
    let isValid = true
    if (email.validators)
      for (const validator of email.validators) {
        isValid = isValid && validator(value)
      }
    setEmail({ ...email, value: value, valid: isValid })
  }
  const instagramChangeHandler = e => {
    const value = e.target.value
    let isValid = true
    if (instagram.validators)
      for (const validator of instagram.validators) {
        isValid = isValid && validator(value)
      }
    setInstagram({ ...instagram, value: value, valid: isValid })
  }
  const tikTokChangeHandler = e => {
    const value = e.target.value
    let isValid = true
    if (tikTok.validators)
      for (const validator of tikTok.validators) {
        isValid = isValid && validator(value)
      }
    setTikTok({ ...tikTok, value: value, valid: isValid })
  }
  const phoneNumberChangeHandler = e => {
    const value = e.target.value
    let isValid = true
    if (phoneNumber.validators)
      for (const validator of phoneNumber.validators) {
        isValid = isValid && validator(value)
      }
    setPhoneNumber({
      ...phoneNumber,
      value: value,
      valid: isValid,
    })
  }
  const otherSocialChangeHandler = e => {
    const value = e.target.value
    let isValid = true
    if (otherSocial.validators)
      for (const validator of otherSocial.validators) {
        isValid = isValid && validator(value)
      }
    setOtherSocial({
      ...otherSocial,
      value: value,
      valid: isValid,
    })
  }
  const countryChangeHandler = e => {
    const value = e.target.value
    let isValid = true
    if (country.validators)
      for (const validator of country.validators) {
        isValid = isValid && validator(value)
      }
    setCountry({
      ...country,
      value: value,
      valid: isValid,
    })
  }
  const feedbackChangeHandler = e => {
    const value = e.target.value
    let isValid = true
    if (feedback.validators)
      for (const validator of feedback.validators) {
        isValid = isValid && validator(value)
      }
    setFeedback({
      ...feedback,
      value: value,
      valid: isValid,
    })
  }

  return (
    <>
      <div id="register" className="container register-form-slide">
        <h1 className="slide-title" style={{ marginTop: "80px" }}>
          Register
        </h1>
        <form
          className="register-form"
          onSubmit={e => {
            if (formIsValid) {
              handleFormSubmit(e)
            }
          }}
          style={{
            margin: "80px 0",
          }}
        >
          <div className="row input-row" style={{ justifyContent: "center" }}>
            <Input
              type="text"
              inputContainerClassName="register-input-container"
              errorClassName="register-input-error-message"
              id="name"
              name="name"
              placeholder="Name"
              className="register-input left-input"
              value={username.value}
              valid={username.valid}
              touched={username.touched}
              errorMessage={username.errorMessage}
              onChange={usernameChangeHandler}
              onBlur={() => {
                setUsername({ ...username, touched: true })
              }}
            />
            <Input
              type="text"
              inputContainerClassName="register-input-container"
              errorClassName="register-input-error-message"
              id="instagram"
              name="instagram"
              placeholder="Instagram"
              className="register-input"
              value={instagram.value}
              valid={instagram.valid}
              touched={instagram.touched}
              errorMessage={instagram.errorMessage}
              onChange={instagramChangeHandler}
              onBlur={() => {
                setInstagram({ ...instagram, touched: true })
              }}
            />
          </div>
          <div className="row input-row" style={{ justifyContent: "center" }}>
            <Input
              type="email"
              inputContainerClassName="register-input-container"
              errorClassName="register-input-error-message"
              id="email"
              name="email"
              placeholder="Email"
              className="register-input left-input"
              value={email.value}
              valid={email.valid}
              touched={email.touched}
              errorMessage={email.errorMessage}
              onChange={emailChangeHandler}
              onBlur={() => {
                setEmail({ ...email, touched: true })
              }}
            />
            <Input
              type="text"
              inputContainerClassName="register-input-container"
              errorClassName="register-input-error-message"
              id="tikTok"
              name="tikTok"
              placeholder="Tik Tok"
              className="register-input"
              value={tikTok.value}
              valid={tikTok.valid}
              touched={tikTok.touched}
              errorMessage={tikTok.errorMessage}
              onChange={tikTokChangeHandler}
              onBlur={() => {
                setTikTok({ ...tikTok, touched: true })
              }}
            />
          </div>
          <div className="row input-row" style={{ justifyContent: "center" }}>
            <Input
              type="text"
              inputContainerClassName="register-input-container"
              errorClassName="register-input-error-message"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Phone"
              className="register-input left-input"
              value={phoneNumber.value}
              valid={phoneNumber.valid}
              touched={phoneNumber.touched}
              errorMessage={phoneNumber.errorMessage}
              onChange={phoneNumberChangeHandler}
              onBlur={() => {
                setPhoneNumber({ ...phoneNumber, touched: true })
              }}
            />
            <Input
              type="text"
              inputContainerClassName="register-input-container"
              errorClassName="register-input-error-message"
              id="otherSocial"
              name="otherSocial"
              placeholder="Other Social"
              className="register-input"
              value={otherSocial.value}
              valid={otherSocial.valid}
              touched={otherSocial.touched}
              errorMessage={otherSocial.errorMessage}
              onChange={otherSocialChangeHandler}
              onBlur={() => {
                setOtherSocial({ ...otherSocial, touched: true })
              }}
            />
          </div>
          <div className="row input-row">
            <Input
              type="text"
              inputContainerClassName="register-input-container"
              errorClassName="register-input-error-message"
              id="country"
              name="country"
              placeholder="Country"
              className="register-input"
              value={country.value}
              valid={country.valid}
              touched={country.touched}
              errorMessage={country.errorMessage}
              onChange={countryChangeHandler}
              onBlur={() => {
                setCountry({ ...country, touched: true })
              }}
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
              errorClassName="register-input-error-message"
              style={{
                height: "400px",
                padding: "20px 30px",
                width: "100%",
                margin: "10px auto",
              }}
              value={feedback.value}
              valid={feedback.valid}
              touched={feedback.touched}
              errorMessage={feedback.errorMessage}
              onChange={feedbackChangeHandler}
              onBlur={() => {
                setFeedback({ ...feedback, touched: true })
              }}
            />
          </div>
          <button
            className="register-btn"
            type="submit"
            disabled={formIsValid && !isLoading ? "" : "disabled"}
          >
            {isLoading ? "Loading" : "Submit"}
          </button>
        </form>
      </div>
    </>
  )
}

export default RegisterFormSlide
