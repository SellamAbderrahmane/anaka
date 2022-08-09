import { AxiosClient, Status, ServerException } from "../axios.client"

export class ProductRepository {
  private http: AxiosClient

  constructor(http: AxiosClient) {
    this.http = http
  }

  async getProductInfo(id: any) {
    try {
      const result = await this.http.fetch({
        url: `/product/info/${id}`,
        method: "GET",
      })

      if (result.status === Status.ERROR) {
        throw Error(result.message)
      }

      return result.results
    } catch (error) {
      throw new ServerException(error)
    }
  }

  async getProducts(filters: any = {}) {
    try {
      const {
        currentPage,
        offset = 0, // todelete
        limit = 12,
      } = filters

      const result = await this.http.fetch({
        url: "/product/all",
        method: "GET",
        params: {
          ...filters,
          offset,
          limit,
          currentPage,
        },
      })

      if (result.status === Status.ERROR) {
        throw Error(result.message)
      }

      return result
    } catch (error) {
      throw new ServerException(error)
    }
  }

  async getHeroProducts(): Promise<any[]> {
    try {
      const result = await this.http.fetch({
        url: "/product/heros",
        method: "GET",
      })

      if (result.status === Status.ERROR) {
        throw Error(result.message)
      }

      return result.products
    } catch (error) {
      throw new ServerException(error)
    }
  }

  async getDailyProducts(): Promise<any> {
    try {
      const result = await this.http.fetch({
        url: "/product/dailies",
        method: "GET",
      })

      if (result.status === Status.ERROR) {
        throw Error(result.message)
      }

      return result.products
    } catch (error) {
      throw new ServerException(error)
    }
  }

  async addReview(review: any) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(review), 1000)
    })
  }
}

export default ProductRepository
