import React from "react"

export const FormInput = (props: any) => {
  const {
    className = "",
    type,
    label,
    name,
    value = "",
    error,
    valid,
    handleChange,
    placeholder = "",
  } = props

  return (
    <div className={`inputContainer ${className}`}>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={!valid ? "input-danger" : ""}
      />
      {error && !valid && <span className="danger">{error}</span>}
    </div>
  )
}

export default FormInput
