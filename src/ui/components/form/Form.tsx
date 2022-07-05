import React from "react"

import FormInput from "./components/Input"
import FormCheckbox from "./components/Checkbox"
import FormTextarea from "./components/Textarea"

export const Form = ({ form, onInputChange, renderAction, ...rest }: any) => {
  function renderElement(inputObj: any) {
    switch (inputObj.type) {
      case "text":
        return <FormInput handleChange={onInputChange} {...inputObj} />
      case "checkbox":
        return <FormCheckbox handleChange={onInputChange} {...inputObj} />
      case "textarea":
        return <FormTextarea handleChange={onInputChange} {...inputObj} />
      default:
        return <FormInput handleChange={onInputChange} {...inputObj} />
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log("refresh prevented")
  }

  return (
    <form onSubmit={onSubmit} {...rest}>
      <div className="row">
        {Object.values(form).map((inputObj: any, index: number) => {
          const { render, span = 12 } = inputObj
          if (render) {
            return render(onInputChange, inputObj, form, index)
          }

          return (
            <div className={`col-sm-12 col-lg-${span}`} key={index}>
              {renderElement(inputObj)}
            </div>
          )
        })}
      </div>
      {renderAction && renderAction()}
    </form>
  )
}

export default Form
