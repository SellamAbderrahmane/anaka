import React, { Fragment } from "react"
import { Link } from "react-router-dom"
// import { useToasts } from "react-toast-notifications";

const MenuCart = ({
  cartData,
  currency = {
    currencyRate: 12,
    currencySymbol: "$",
  },
  deleteFromCart,
}) => {
  let cartTotalPrice = 0
  const addToast = () => {}

  cartData = [
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
    <div className="shopping-cart-content">
      {cartData && cartData.length > 0 ? (
        <Fragment>
          <ul>
            {cartData.map((single, key) => {
              const discountedPrice = 0
              const finalProductPrice = (single.price * currency.currencyRate).toFixed(2)
              const finalDiscountedPrice = (discountedPrice * currency.currencyRate).toFixed(2)

              return (
                <li className="single-shopping-cart" key={key}>
                  <div className="shopping-cart-img">
                    <Link to={process.env.PUBLIC_URL + "/product/" + single.id}>
                      <img
                        alt=""
                        src={process.env.PUBLIC_URL + single.image[0]}
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <div className="shopping-cart-title">
                    <h4>
                      <Link to={process.env.PUBLIC_URL + "/product/" + single.id}>
                        {single.name}
                      </Link>
                    </h4>
                    <h6>Qty: {single.quantity}</h6>
                    <span>
                      {discountedPrice !== null
                        ? currency.currencySymbol + finalDiscountedPrice
                        : currency.currencySymbol + finalProductPrice}
                    </span>
                    {single.selectedProductColor && single.selectedProductSize ? (
                      <div className="cart-item-variation">
                        <span>Color: {single.selectedProductColor}</span>
                        <span>Size: {single.selectedProductSize}</span>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="shopping-cart-delete">
                    <button onClick={() => deleteFromCart(single, addToast)}>
                      <i className="fa fa-times-circle" />
                    </button>
                  </div>
                </li>
              )
            })}
          </ul>
          <div className="shopping-cart-total">
            <h4>
              Total :{" "}
              <span className="shop-total">
                {currency.currencySymbol + cartTotalPrice.toFixed(2)}
              </span>
            </h4>
          </div>
          <div className="shopping-cart-btn btn-hover text-center">
            <Link className="default-btn" to="/cart">
              view cart
            </Link>
            <Link className="default-btn" to="/checkout">
              checkout
            </Link>
          </div>
        </Fragment>
      ) : (
        <p className="text-center">No items added to cart</p>
      )}
    </div>
  )
}

export default MenuCart
