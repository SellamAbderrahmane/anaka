import React, { useState } from "react"

export const FormTextarea = (props: any) => {
  const {
    className = "",
    label,
    name,
    value = false,
    error,
    valid,
    handleChange,
    placeholder,
  } = props

  return (
    <div className={`inputContainer ${className}`}>
      <label>{label}</label>
      <textarea
        id={name}
        name={name}
        defaultValue={""}
        placeholder={placeholder}
        onChange={handleChange}
      />

      {error && !valid && <span className="danger">{error}</span>}
    </div>
  )
}

export default FormTextarea
