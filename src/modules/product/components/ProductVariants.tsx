import React, { useEffect, useState } from "react"

export const ProductVariants = ({ product, onVariantsChange }: any) => {
  const [selectedProductColor, setSelectedProductColor] = useState(
    product.variation ? product.variation[0].color : ""
  )

  const [selectedProductSize, setSelectedProductSize] = useState(
    product.variation ? product.variation[0].size[0].name : ""
  )

  useEffect(() => {
    onVariantsChange({
      selectedProductColor,
      selectedProductSize,
    })
  }, [selectedProductColor, selectedProductSize])

  if (!product.variation) {
    return
  }

  return (
    <div className="pro-details-size-color">
      <div className="pro-details-color-wrap">
        <span>Color {selectedProductColor}</span>
        <div className="pro-details-color-content">
          {product.variation.map((single, key) => {
            return (
              <label className={`pro-details-color-content--single ${single.color}`} key={key}>
                <input
                  type="radio"
                  value={single.color}
                  name="product-color"
                  checked={single.color === selectedProductColor}
                  onChange={() => setSelectedProductColor(single.color)}
                />
                <span className="checkmark"></span>
              </label>
            )
          })}
        </div>
      </div>
      <div className="pro-details-size">
        <span>Size</span>
        <div className="pro-details-size-content">
          {product.variation.map((single) => {
            return single.color === selectedProductColor
              ? single.size.map((singleSize, key) => {
                  return (
                    <label className={`pro-details-size-content--single`} key={key}>
                      <input
                        type="radio"
                        value={singleSize.name}
                        checked={singleSize.name === selectedProductSize}
                        onChange={() => setSelectedProductSize(singleSize.name)}
                      />
                      <span className="size-name">{singleSize.name}</span>
                    </label>
                  )
                })
              : ""
          })}
        </div>
      </div>
    </div>
  )
}

export default ProductVariants
