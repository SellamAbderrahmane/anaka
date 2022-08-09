import React, { Fragment, useCallback, useState } from "react"
import { getDiscountPrice, getProductPrice, getProductVariation } from "../../../utils"
import { ProductRating } from "../../../ui/components"
import { Link } from "react-router-dom"
import { AddToCart } from "../../cart/others/AddToCart"
import { ProductVariants } from "./ProductVariants"

export const ProductInfo = ({ product, currency, productVariants }: any) => {
  const [variants, setVariants] = useState({})

  const variation = getProductVariation(variants, productVariants)
  const productPrice = getProductPrice(product.price, variation, currency)
  const finalDiscountedPrice = getDiscountPrice(productPrice, product.discount, currency)

  const onVariantsChange = useCallback((groupId: any, option: any) => {
    setVariants((old) => {
      return {
        ...old,
        [groupId]: option.id,
      }
    })
  }, [])

  return (
    <div className='product-details-content ml-70'>
      <h2>{product.name}</h2>
      <div className='product-details-price'>
        {finalDiscountedPrice ? (
          <Fragment>
            <span>{currency.currencySymbol + finalDiscountedPrice}</span>
            <span className='old'>{currency.currencySymbol + productPrice}</span>
          </Fragment>
        ) : (
          <span>{currency.currencySymbol + productPrice}</span>
        )}
      </div>

      {product.rating && product.rating > 0 && (
        <div className='pro-details-rating-wrap'>
          <div className='pro-details-rating'>
            <ProductRating ratingValue={product.rating} />
          </div>
        </div>
      )}

      <div className='pro-details-list'>
        <p>{product.shortDescription}</p>
      </div>

      <ProductVariants product={product} onVariantsChange={onVariantsChange} />

      {product.affiliateLink ? (
        <div className='pro-details-quality'>
          <div className='pro-details-cart btn-hover ml-0'>
            <a href={product.affiliateLink} rel='noopener noreferrer' target='_blank'>
              Buy Now
            </a>
          </div>
        </div>
      ) : (
        <AddToCart
          product={product}
          variation={variation}
          finalPrice={finalDiscountedPrice || productPrice}
        />
      )}

      {variation?.inventory <= 10 && (
        <div className='pro-details-inventory red mb-3'>
          <span>{variation.inventory} Still in stock</span>
        </div>
      )}

      {product.category && (
        <div className='pro-details-meta'>
          <span>Categories :</span>
          <ul>
            {product.category.map((single: any, key: number) => {
              return (
                <li key={key}>
                  <Link to='/shop-grid-standard'>{single}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}

      {product.tag && (
        <div className='pro-details-meta'>
          <span>Tags :</span>
          <ul>
            {product.tag.map((single, key) => {
              return (
                <li key={key}>
                  <Link to='/shop-grid-standard'>{single}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}

      <div className='pro-details-social'>
        <ul>
          <li>
            <a href='//facebook.com'>
              <i className='fa fa-facebook' />
            </a>
          </li>
          <li>
            <a href='//dribbble.com'>
              <i className='fa fa-dribbble' />
            </a>
          </li>
          <li>
            <a href='//pinterest.com'>
              <i className='fa fa-pinterest-p' />
            </a>
          </li>
          <li>
            <a href='//twitter.com'>
              <i className='fa fa-twitter' />
            </a>
          </li>
          <li>
            <a href='//linkedin.com'>
              <i className='fa fa-linkedin' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ProductInfo
