import { getSortedProducts } from "../../utils"
import { AxiosClient, Status, ServerException } from "../axios.client"

import products from "../../data/products.json"

export class ProductRepository {
  private http: AxiosClient

  constructor(http: AxiosClient) {
    this.http = http
  }

  async getProductInfo(id: any) {
    return {
      id: id,
      sku: "asdf126",
      name: `Lorem ipsum fashion coat ${id}`,
      price: 15.5,
      discount: 0,
      new: true,
      rating: 4,
      saleCount: 20,
      category: ["fashion", "women"],
      tag: ["fashion", "women", "coat", "full sleeve"],
      variation: [
        {
          color: "blue",
          image: "/assets/img/product/fashion/2.jpg",
          size: [
            { name: "x", stock: 3 },
            { name: "m", stock: 6 },
            { name: "xl", stock: 7 },
          ],
        },
        {
          color: "brown",
          image: "/assets/img/product/fashion/4.jpg",
          size: [
            { name: "x", stock: 4 },
            { name: "m", stock: 8 },
            { name: "xl", stock: 3 },
            { name: "xxl", stock: 7 },
          ],
        },
        {
          color: "black",
          image: "/assets/img/product/fashion/5.jpg",
          size: [
            { name: "x", stock: 3 },
            { name: "m", stock: 7 },
            { name: "xl", stock: 0 },
            { name: "xxl", stock: 7 },
          ],
        },
      ],
      image: [
        "/assets/img/product/fashion/4.jpg",
        "/assets/img/product/fashion/2.jpg",
        "/assets/img/product/fashion/5.jpg",
        "/assets/img/product/fashion/7.jpg",
        "/assets/img/product/fashion/9.jpg",
      ],
      shortDescription:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
      fullDescription:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
    }
  }

  async getProducts(filters: any = {}) {
    const {
      sortType,
      sortValue,
      filterType,
      filterValue,
      currentPage,
      offset = 0, // todelete
      limit = 12,
    } = filters

    let sortedProducts = getSortedProducts(products, sortType, sortValue)
    const filterSortedProducts = getSortedProducts(sortedProducts, filterType, filterValue)
    // sortedProducts = filterSortedProducts
    // setSortedProducts(sortedProducts)
    // setCurrentData(sortedProducts.slice(offset, offset + pageLimit))

    return {
      products: filterSortedProducts.slice(offset, offset + limit),
      pagination: {
        total: products.length,
        currentPage: currentPage,
        offset,
        limit,
      },
    }
  }

  async getHeroProducts(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const heroSliderData = [
        {
          id: 1,
          title: "Smart Products",
          subtitle: "Winter Offer 2020 Collection",
          image: "/assets/img/slider/single-slide-hm1-2.png",
          url: "/shop-grid-standard",
        },
        {
          id: 2,
          title: "Smart Products",
          subtitle: "Summer Offer 2020 Collection",
          image: "/assets/img/slider/single-slide-1.png",
          url: "/shop-grid-standard",
        },
      ]
      setTimeout(() => {
        return resolve(heroSliderData)
      }, 10000)
    })
  }

  async getDailyProducts(): Promise<any> {
    return new Promise((resolve, reject) => {
      const products = {
        news: [
          {
            id: "1",
            sku: "asdf123",
            name: "Lorem ipsum jacket",
            price: 12.45,
            discount: 10,
            offerEnd: "October 5, 2020 12:11:00",
            new: false,
            rating: 4,
            saleCount: 54,
            category: ["fashion", "men"],
            tag: ["fashion", "men", "jacket", "full sleeve"],
            variation: [
              {
                color: "white",
                image: "/assets/img/product/fashion/1.jpg",
                size: [
                  {
                    name: "x",
                    stock: 3,
                  },
                  {
                    name: "m",
                    stock: 2,
                  },
                  {
                    name: "xl",
                    stock: 5,
                  },
                ],
              },
              {
                color: "black",
                image: "/assets/img/product/fashion/8.jpg",
                size: [
                  {
                    name: "x",
                    stock: 4,
                  },
                  {
                    name: "m",
                    stock: 7,
                  },
                  {
                    name: "xl",
                    stock: 9,
                  },
                  {
                    name: "xxl",
                    stock: 1,
                  },
                ],
              },
              {
                color: "brown",
                image: "/assets/img/product/fashion/3.jpg",
                size: [
                  {
                    name: "x",
                    stock: 1,
                  },
                  {
                    name: "m",
                    stock: 2,
                  },
                  {
                    name: "xl",
                    stock: 4,
                  },
                  {
                    name: "xxl",
                    stock: 0,
                  },
                ],
              },
            ],
            image: [
              "/assets/img/product/fashion/1.jpg",
              "/assets/img/product/fashion/3.jpg",
              "/assets/img/product/fashion/6.jpg",
              "/assets/img/product/fashion/8.jpg",
              "/assets/img/product/fashion/9.jpg",
            ],
            shortDescription:
              "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
            fullDescription:
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
          },
        ],
        bestSellers: [
          {
            id: "1",
            sku: "asdf123",
            name: "Lorem ipsum jacket test",
            price: 12.45,
            discount: 10,
            offerEnd: "October 5, 2020 12:11:00",
            new: false,
            rating: 4,
            saleCount: 54,
            category: ["fashion", "men"],
            tag: ["fashion", "men", "jacket", "full sleeve"],
            variation: [
              {
                color: "white",
                image: "/assets/img/product/fashion/1.jpg",
                size: [
                  {
                    name: "x",
                    stock: 3,
                  },
                  {
                    name: "m",
                    stock: 2,
                  },
                  {
                    name: "xl",
                    stock: 5,
                  },
                ],
              },
              {
                color: "black",
                image: "/assets/img/product/fashion/8.jpg",
                size: [
                  {
                    name: "x",
                    stock: 4,
                  },
                  {
                    name: "m",
                    stock: 7,
                  },
                  {
                    name: "xl",
                    stock: 9,
                  },
                  {
                    name: "xxl",
                    stock: 1,
                  },
                ],
              },
              {
                color: "brown",
                image: "/assets/img/product/fashion/3.jpg",
                size: [
                  {
                    name: "x",
                    stock: 1,
                  },
                  {
                    name: "m",
                    stock: 2,
                  },
                  {
                    name: "xl",
                    stock: 4,
                  },
                  {
                    name: "xxl",
                    stock: 0,
                  },
                ],
              },
            ],
            image: [
              "/assets/img/product/fashion/1.jpg",
              "/assets/img/product/fashion/3.jpg",
              "/assets/img/product/fashion/6.jpg",
              "/assets/img/product/fashion/8.jpg",
              "/assets/img/product/fashion/9.jpg",
            ],
            shortDescription:
              "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
            fullDescription:
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
          },
        ],
      }

      setTimeout(() => {
        return resolve(products)
      }, 10000)
    })
  }
}

export default ProductRepository
