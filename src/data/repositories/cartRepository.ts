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

    return cartItems.map((item) => {
      if (item.cartItemId === cartProduct.cartItemId) {
        return {
          ...item,
          quantity: item.quantity + (qty || 1),
          finalPrice: (item.quantity + (qty || 1)) * finalPrice,
        }
      }

      return item
    })
  }

  async deleteFromCart(product: any, cartItems: any[]) {
    return cartItems.filter((cartItem) => cartItem.cartItemId !== product.cartItemId)
  }
}
