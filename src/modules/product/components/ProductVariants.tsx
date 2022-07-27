import React, { useEffect, useState } from "react"

const GroupOptionContent = ({ group, onOptionSelected }) => {
  const groupname = group.name.toLowerCase()
  const [selectedOption, setSelectedOption]: any = useState(group.options[0])

  useEffect(() => {
    onOptionSelected(selectedOption)
  }, [selectedOption])

  if (groupname === "color") {
    return (
      <div className="pro-details-color-wrap">
        <span>{group.name}</span>
        <div className="pro-details-size-content">
          {group.options.map((option: any, indx: number) => {
            return (
              <label
                style={{
                  border: `1px solid ${option.value}`,
                  backgroundColor: option.value,
                }}
                className="pro-details-color-content--single"
                key={indx}
              >
                <input
                  type="radio"
                  value={option.value}
                  name="product-color"
                  checked={option.id === selectedOption?.id}
                  onChange={() => setSelectedOption(option)}
                />
                <span className="checkmark"></span>
              </label>
            )
          })}
        </div>
      </div>
    )
  }

  if (groupname === "size") {
    return (
      <div className="pro-details-size">
        <span>{group.name}</span>
        <div className="pro-details-size-content">
          {group.options.map((option: any, indx: number) => {
            return (
              <label className={`pro-details-size-content--single`} key={indx}>
                <input
                  type="radio"
                  value={option.value}
                  checked={option.id === selectedOption?.id}
                  onChange={() => setSelectedOption(option)}
                />
                <span className="size-name">{option.label}</span>
              </label>
            )
          })}
        </div>
      </div>
    )
  }
}

export const ProductVariants = ({ product, onVariantsChange }: any) => {
  if (!product?.variant_groups) {
    return
  }

  return (
    <div className="pro-details-variants">
      {product.variant_groups.map((group: any, key: number) => {
        return (
          <GroupOptionContent
            group={group}
            key={key}
            onOptionSelected={(option: any) => onVariantsChange(group.id, option)}
          />
        )
      })}
    </div>
  )
}

export default ProductVariants
