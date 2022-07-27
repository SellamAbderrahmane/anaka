import React from "react"
import LoadingOverlay from "react-loading-overlay-ts"

export interface SpinnerProps {
  spinning: boolean
}

export const Spinner: React.FC<SpinnerProps> = (props) => {
  const { children, spinning = false } = props

  const spin = (
    <div className="flone-preloader">
      <span></span>
      <span></span>
    </div>
  )

  return (
    <LoadingOverlay
      active={spinning}
      spinner={spin}
      styles={{
        overlay: (base) => ({
          ...base,
          background: "#00000002",
        }),
      }}
    >
      {!spinning && children}
    </LoadingOverlay>
  )
}

export default Spinner
