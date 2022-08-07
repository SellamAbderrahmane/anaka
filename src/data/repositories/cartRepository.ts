import { isEqual } from "lodash"
import { v4 as uuid } from "uuid"
import { AxiosClient } from "../axios.client"

export class CartRepository {
  http: AxiosClient

  constructor(http: AxiosClient) {
    this.http = http
  }

  async addToCart(product: any, qty: number, variation: any, finalPrice: any, cartItems: any[]) {
    let cartProduct: any = null

    if (!product.variant_groups) {
      cartProduct = cartItems.find((item) => item.id === product.id)
    } else {
      cartProduct = cartItems.find((item) => {
        return item.id === product.id && isEqual(item.variation.id, variation.id)
      })
    }

    if (!cartProduct) {
      return [
        ...cartItems,
        {
          ...product,
          variation,
          cartItemId: uuid(),
          finalPrice: (qty || 1) * finalPrice,
          quantity: qty || 1,
        },
      ]
    }

    return cartItems.reduce((acc, item) => {
      const finalQty = item.quantity + (qty || 1)
      if (finalQty === 0) {
        return acc
      }

      if (item.cartItemId === cartProduct.cartItemId) {
        acc.push({
          ...item,
          quantity: finalQty,
          finalPrice: finalQty * finalPrice,
        })
      } else {
        acc.push(item)
      }

      return acc
    }, [])
  }

  async deleteFromCart(product: any, cartItems: any[]) {
    return cartItems.filter((cartItem) => cartItem.cartItemId !== product.cartItemId)
  }

  async addToWishList(product: any, wishItems: any[]) {
    const wishProduct = wishItems.find((item) => item.id === product.id)
    if (wishProduct) {
      return wishItems.filter((item) => item.id !== product.id)
    }

    return [product, ...wishItems]
  }

  async addToCompare(product: any, compareItems: any[]) {
    const compareProduct = compareItems.find((item) => item.id === product.id)
    if (compareProduct) {
      return compareItems.filter((item) => item.id !== product.id)
    }

    return [product, ...compareItems]
  }
}
