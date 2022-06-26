import React, { useState } from "react"

export const FormCheckbox = (props: any) => {
  const { className = "", label, name, value = false, error, valid, handleChange } = props

  const [isChecked, setIsChecked] = useState(value);

  const handleOnChange = (e: any) => {
    setIsChecked(!isChecked)
    e.target.value = isChecked
    handleChange(e);
  };

  return (
    <div className={`${className}`}>
      <input
        id={name}
        name={name}
        type="checkbox"
        checked={isChecked}
        onChange={handleOnChange}
      />
      <label className="ml-10" htmlFor={name}>
        {label}
      </label>
      {error && !valid && <span className="danger">{error}</span>}
    </div>
  )
}

export default FormCheckbox