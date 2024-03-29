import { isEqual } from "lodash"

export const getProductVariation = (selectedVariants: any, productVariants: any[]): any => {
  if (!selectedVariants || productVariants.length === 0) return null

  const variant = productVariants.find((productVariant) => {
    return isEqual(productVariant.options, selectedVariants)
  })

  if (!variant) return null

  return variant
}

export const getProductPrice = (productPrice: number, variantion: any, currency: any) => {
  if (!productPrice || !variantion) {
    return productPrice
  }

  return +((productPrice + variantion.price.raw) * currency.currencyRate).toFixed(2)
}

export const getDiscountPrice = (price: number, discount: number, currency: any) => {
  if (discount && discount > 0) {
    return +((price - price * (discount / 100)) * currency.currencyRate).toFixed(2)
  }

  return 0
}

export const getProductCartQuantity = (cartItems: any[], product: any, selectVariation: any) => {
  let cartProduct: any = null

  if (!product.variant_groups) {
    cartProduct = cartItems.find((item) => item.id === product.id)
  } else {
    cartProduct = cartItems.find((item) => {
      return item.id === product.id && isEqual(item.variation, selectVariation)
    })
  }

  if (!cartProduct || !cartProduct.quantity) return 0

  return cartProduct.quantity
}

export const isProductExist = (productid: any, list: any[]) => {
  if(!list || !productid) {
    return false
  }
  
  return list.findIndex((item) => item.id === productid) !== -1
}

export const canIncreaseQty = (product: any, qty: number) => {
  if(product.variation) {
    return product.variation.inventory >= product.quantity + qty
  }

  return product.stock >= product.quantity + qty
}

// get products
export const getProducts = (products, category, type, limit) => {
  const finalProducts = category
    ? products.filter((product) => product.category.filter((single) => single === category)[0])
    : products

  if (type && type === "new") {
    const newProducts = finalProducts.filter((single) => single.new)
    return newProducts.slice(0, limit ? limit : newProducts.length)
  }
  if (type && type === "bestSeller") {
    return finalProducts
      .sort((a, b) => {
        return b.saleCount - a.saleCount
      })
      .slice(0, limit ? limit : finalProducts.length)
  }
  if (type && type === "saleItems") {
    const saleItems = finalProducts.filter((single) => single.discount && single.discount > 0)
    return saleItems.slice(0, limit ? limit : saleItems.length)
  }
  return finalProducts.slice(0, limit ? limit : finalProducts.length)
}

//get products based on category
export const getSortedProducts = (products, sortType, sortValue) => {
  if (products && sortType && sortValue) {
    if (sortType === "category") {
      return products.filter(
        (product) => product.category.filter((single) => single === sortValue)[0]
      )
    }
    if (sortType === "tag") {
      return products.filter((product) => product.tag.filter((single) => single === sortValue)[0])
    }
    if (sortType === "color") {
      return products.filter(
        (product) =>
          product.variation && product.variation.filter((single) => single.color === sortValue)[0]
      )
    }
    if (sortType === "size") {
      return products.filter(
        (product) =>
          product.variation &&
          product.variation.filter(
            (single) => single.size.filter((single) => single.name === sortValue)[0]
          )[0]
      )
    }
    if (sortType === "filterSort") {
      let sortProducts = [...products]
      if (sortValue === "default") {
        return sortProducts
      }
      if (sortValue === "priceHighToLow") {
        return sortProducts.sort((a, b) => {
          return b.price - a.price
        })
      }
      if (sortValue === "priceLowToHigh") {
        return sortProducts.sort((a, b) => {
          return a.price - b.price
        })
      }
    }
  }
  return products
}

// get individual element
const getIndividualItemArray = (array) => {
  let individualItemArray = array.filter(function (v, i, self) {
    return i === self.indexOf(v)
  })
  return individualItemArray
}

// get individual categories
export const getIndividualCategories = (products) => {
  let productCategories = []
  products &&
    products.map((product) => {
      return (
        product.category &&
        product.category.map((single) => {
          return productCategories.push(single)
        })
      )
    })
  const individualProductCategories = getIndividualItemArray(productCategories)
  return individualProductCategories
}

// get individual tags
export const getIndividualTags = (products) => {
  let productTags = []
  products &&
    products.map((product) => {
      return (
        product.tag &&
        product.tag.map((single) => {
          return productTags.push(single)
        })
      )
    })
  const individualProductTags = getIndividualItemArray(productTags)
  return individualProductTags
}

// get individual colors
export const getIndividualColors = (products) => {
  let productColors = []
  products &&
    products.map((product) => {
      return (
        product.variation &&
        product.variation.map((single) => {
          return productColors.push(single.color)
        })
      )
    })
  const individualProductColors = getIndividualItemArray(productColors)
  return individualProductColors
}

// get individual sizes
export const getProductsIndividualSizes = (products) => {
  let productSizes = []
  products &&
    products.map((product) => {
      return (
        product.variation &&
        product.variation.map((single) => {
          return single.size.map((single) => {
            return productSizes.push(single.name)
          })
        })
      )
    })
  const individualProductSizes = getIndividualItemArray(productSizes)
  return individualProductSizes
}

// get product individual sizes
export const getIndividualSizes = (product) => {
  let productSizes = []
  product.variation &&
    product.variation.map((singleVariation) => {
      return (
        singleVariation.size &&
        singleVariation.size.map((singleSize) => {
          return productSizes.push(singleSize.name)
        })
      )
    })
  const individualSizes = getIndividualItemArray(productSizes)
  return individualSizes
}

export const setActiveSort = (e) => {
  const filterButtons = document.querySelectorAll(
    ".sidebar-widget-list-left button, .sidebar-widget-tag button, .product-filter button"
  )
  filterButtons.forEach((item) => {
    item.classList.remove("active")
  })
  e.currentTarget.classList.add("active")
}

export const setActiveLayout = (e) => {
  const gridSwitchBtn = document.querySelectorAll(".shop-tab button")
  gridSwitchBtn.forEach((item) => {
    item.classList.remove("active")
  })
  e.currentTarget.classList.add("active")
}

export const toggleShopTopFilter = (e) => {
  const shopTopFilterWrapper: any = document.querySelector("#product-filter-wrapper")
  shopTopFilterWrapper.classList.toggle("active")
  if (shopTopFilterWrapper.style.height) {
    shopTopFilterWrapper.style.height = null
  } else {
    shopTopFilterWrapper.style.height = shopTopFilterWrapper.scrollHeight + "px"
  }
  e.currentTarget.classList.toggle("active")
}
