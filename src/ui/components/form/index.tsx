import { useCallback, useEffect, useState } from "react"
import { Form } from "./Form"

export * from "./validators"

export declare type FormGroup = { [key: string]: FORMITEM }

export declare type Validator = (value: any, form: FormGroup) => string

export interface FORMITEM {
  type?: "text" | "select" | "checkbox" | "email" | "textarea"
  value?: any
  label?: any
  name: string
  span?: number
  error?: string
  valid?: boolean
  touched?: boolean
  className?: string
  placeholder?: string
  validators?: Validator[]
  onChange?(item: FORMITEM): void
  render?(onChange: any, item: FORMITEM, form: FormGroup, index: number): JSX.Element
}

export const useForm = (formObj: FormGroup) => {
  const [form, setForm] = useState(formObj)

  useEffect(() => {
    init()
  }, [])

  const init = () => {
    for (let input of Object.values(form)) {
      input.valid = isInputFieldValid(input)
      setForm({ ...form, [input.name]: input })
    }
  }

  function renderForm(renderAction?: () => JSX.Element, props: any = {}) {
    return <Form form={form} onInputChange={onInputChange} renderAction={renderAction} {...props} />
  }

  const isInputFieldValid = useCallback(
    (inputField: FORMITEM) => {
      if (!Array.isArray(inputField.validators)) return true

      for (const validator of inputField.validators) {
        const message = validator(inputField.value, form)

        if (message) {
          inputField.error = message
          return false
        }
      }

      inputField.error = undefined
      return true
    },
    [form]
  )

  const onInputChange = useCallback(
    (event) => {
      const { name, value, checked } = event.target
      const input: FORMITEM = { ...form[name] }

      input.touched = true
      input.value = input.type === "checkbox" ? checked : value
      input.valid = isInputFieldValid(input)

      if (input.onChange) {
        input.onChange(input)
      }

      setForm({ ...form, [name]: input })
    },
    [form, isInputFieldValid]
  )

  const isValid = useCallback(() => {
    return !Object.values(form).some((el) => {
      return el.valid === false
    })
  }, [form])

  const getvalue: any = () => {
    return Object.keys(form).reduce((acc, key) => ({ ...acc, [key]: form[key].value }), {})
  }

  return { form, getvalue, renderForm, isValid }
}
