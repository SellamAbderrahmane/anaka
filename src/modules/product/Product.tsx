import React, { Fragment } from "react"
import Breadcrumb from "../../ui/components/Breadcrumb"
import ProductDescriptionTab from "./components/ProductDescriptionTab"
import ProductImageDescription from "./components/ProductImageDescription"
import RelatedProducts from "./components/RelatedProducts"

export const Product = () => {
  const cartItems = [
    {
      id: "4",
      sku: "asdf126",
      name: "Lorem ipsum fashion coat",
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
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
      quantity: 1,
      selectedProductColor: "blue",
      selectedProductSize: "x",
      cartItemId: "b7c4a2eb-9803-4951-a214-e53895749230",
    },
  ]

  return (
    <Fragment>
      <Breadcrumb />

      <ProductImageDescription
        spaceTopClass="pt-100"
        spaceBottomClass="pb-100"
        product={cartItems[0]}
        cartItems={cartItems}
        currency={{
          currencyRate: 12,
          currencySymbol: "$",
        }}
      />

      <ProductDescriptionTab
        spaceBottomClass="pb-90"
        productFullDesc={cartItems[0].fullDescription}
      />

      <RelatedProducts category={cartItems[0].category[0]} />
    </Fragment>
  )
}

export default Product
