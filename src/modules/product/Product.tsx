import React, { Fragment, useCallback, useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { configState } from "../../app/config"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { ProductRepository } from "../../data"
import Breadcrumb from "../../ui/components/Breadcrumb"
import Spinner from "../../ui/components/spinner/Spinner"
import { currentAuthState } from "../auth/state"
import { Productcontext, useProduct } from "../contexts"
import ProductDescriptionTab from "./components/ProductDescriptionTab"
import ProductImageDescription from "./components/ProductImageDescription"
import RelatedProducts from "./components/RelatedProducts"
import { currentProductState, productActions } from "./state"

export const Product = ({ productID }) => {
  const dispatch = useAppDispatch()
  const productActions = useProduct()
  const confState = useAppSelector(configState)
  const state = useAppSelector(currentProductState)
  const userState = useAppSelector(currentAuthState)

  useEffect(() => {
    dispatch(productActions.loadProductInfo(productID))
  }, [productID])

  const onReviewSubmet = useCallback((value: any) => {
    const review = {
      ...value,
      user: userState.user
    }

    dispatch(productActions.addReview(review))
  }, [])

  return (
    <Fragment>
      <Breadcrumb />

      <Spinner spinning={state.status === "loading"}>
        <ProductImageDescription
          spaceTopClass='pt-100'
          spaceBottomClass='pb-100'
          product={state.product}
          currency={confState.currency}
          productVariants={state.productVariants}
        />

       <ProductDescriptionTab
          productReviews={state.reviews}
          additionalInfo={state.additionalInfo}
          isUserConnected={userState.loggedIn}
          onReviewSubmet={onReviewSubmet}
          reviewsLoading={state.status === 'reviewsLoading'}
          productFullDesc={state.product.fullDescription}
        />

         <RelatedProducts relatedProducts={state.relatedProducts} />
      </Spinner>
    </Fragment>
  )
}

export default (props: any) => {
  const { id } = useParams()

  function ProductProvider({ children }: any) {
    const config = useSelector(configState)
    const actions = productActions(new ProductRepository(config.http))

    return <Productcontext.Provider value={actions}>{children}</Productcontext.Provider>
  }

  return (
    <ProductProvider>
      <Product productID={id} />
    </ProductProvider>
  )
}
