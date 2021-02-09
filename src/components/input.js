import React from "react"
function Input(props) {
  const {
    type,
    id,
    name,
    className,
    onClick,
    onChange,
    onBlur,
    placeholder,
    value,
    valid,
    touched,
    inputContainerClassName,
    errorClassName,
    errorMessage,
    style,
  } = props
  return (
    <div
      style={style && style}
      className={"input-container " + (inputContainerClassName || "")}
    >
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onClick={onClick}
        onChange={onChange}
        onBlur={onBlur}
        className={[
          className,
          touched ? "touched" : "",
          valid ? "valid" : "invalid",
        ].join(" ")}
      />
      {!valid && touched ? (
        <p className={errorClassName}>{errorMessage}</p>
      ) : null}
    </div>
  )
}

export default Input
