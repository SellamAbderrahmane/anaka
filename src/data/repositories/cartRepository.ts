import { isEqual } from "lodash"
import { v4 as uuid } from "uuid"
import { AxiosClient } from "../axios.client"

export class CartRepository {
  http: AxiosClient

  constructor(http: AxiosClient) {
    this.http = http
  }

  async addToCart(product: any, qty: number, variants: any, cartItems: any[]) {
    let cartProduct: any = null

    if (!product.variation) {
      cartProduct = cartItems.find((item) => item.id === product.id)
    } else {
      cartProduct = cartItems.find((item) => {
        return item.id === product.id && isEqual(item.variants, variants)
      })
    }

    if (!cartProduct) {
      return [
        ...cartItems,
        {
          ...product,
          variants,
          cartItemId: uuid(),
          quantity: qty || 1,
        },
      ]
    }

    return cartItems.map((item) => {
      if (item.id === cartProduct.id) {
        return {
          ...item,
          quantity: item.quantity + (qty || 1),
        }
      }

      return item
    })
  }

  async deleteFromCart(product: any, cartItems: any[]) {
    return cartItems.filter((cartItem) => cartItem.cartItemId !== product.cartItemId)
  }
}
