export const email = (message: any) => (value: string) => {
  const regex = new RegExp(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/, "ig")
  return regex.test(value) ? null : message
}

export const phone = (message: any) => (value: string) => {
  const regex = new RegExp(/^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, "ig")
  return regex.test(value) ? null : message
}

export const required = (message: any) => (value: any) => {
  if (!value) return message

  return null
}
