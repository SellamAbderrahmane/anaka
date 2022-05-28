import { getDiscountPrice } from "../../../utils"
import ProductImageGallery from "./ProductImageGallery"
import ProductInfo from "./ProductInfo"

const ProductImageDescription = ({
  spaceTopClass,
  spaceBottomClass,
  product,
  currency,
  cartItems,
  wishlistItems = [],
  compareItems = [],
}: any) => {
  const wishlistItem = wishlistItems.filter((wishlistItem) => wishlistItem.id === product.id)[0]
  const compareItem = compareItems.filter((compareItem) => compareItem.id === product.id)[0]
  const addToast = () => {

  }

  const discountedPrice = getDiscountPrice(product.price, product.discount)
  const finalProductPrice = +(product.price * currency.currencyRate).toFixed(2)
  const finalDiscountedPrice = +(discountedPrice * currency.currencyRate).toFixed(2)

  return (
    <div
      className='shop-area pt-100 pb-100'
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <ProductImageGallery product={product} />
          </div>
          <div className="col-lg-6 col-md-6">
            <ProductInfo
              product={product}
              discountedPrice={discountedPrice}
              currency={currency}
              finalDiscountedPrice={finalDiscountedPrice}
              finalProductPrice={finalProductPrice}
              cartItems={cartItems}
              wishlistItem={wishlistItem}
              compareItem={compareItem}
              addToast={addToast}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductImageDescription
