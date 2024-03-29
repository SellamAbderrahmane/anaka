import React from "react"
import { useAccordionButton } from "react-bootstrap"

export function CollapseToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () => console.log("totally custom!"))

  return (
    <button type="button" style={{ backgroundColor: "pink" }} onClick={decoratedOnClick}>
      {children}
    </button>
  )
}

export default CollapseToggle
