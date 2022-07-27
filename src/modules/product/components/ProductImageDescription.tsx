import ProductImageGallery from "./ProductImageGallery"
import ProductInfo from "./ProductInfo"

const ProductImageDescription = ({ product, currency, productVariants }: any) => {
  return (
    <div className='shop-area pt-100 pb-100'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-md-6'>
            <ProductImageGallery product={product} />
          </div>
          <div className='col-lg-6 col-md-6'>
            <ProductInfo product={product} currency={currency} productVariants={productVariants} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductImageDescription
