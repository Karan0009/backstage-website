import React from "react"

function Textarea(props) {
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
    rows,
    inputContainerClassName,
    errorClassName,
    errorMessage,
    style,
  } = props
  return (
    <div className={"input-container " + inputContainerClassName}>
      <textarea
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
        rows={rows}
        style={style}
      ></textarea>
      {!valid && touched ? (
        <p className={errorClassName}>{errorMessage}</p>
      ) : null}
    </div>
  )
}

export default Textarea
