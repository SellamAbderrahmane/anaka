import React, { Fragment, useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { configState } from "../../app/config"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { ProductRepository } from "../../data"
import Breadcrumb from "../../ui/components/Breadcrumb"
import Spinner from "../../ui/components/spinner/Spinner"
import { Productcontext, useProduct } from "../contexts"
import ProductDescriptionTab from "./components/ProductDescriptionTab"
import ProductImageDescription from "./components/ProductImageDescription"
import RelatedProducts from "./components/RelatedProducts"
import { currentProductState, productActions } from "./state"

export const Product = ({ productID }) => {
  const productActions = useProduct()
  const dispatch = useAppDispatch()
  const state = useAppSelector(currentProductState)

  useEffect(() => {
    dispatch(productActions.loadProductInfo(productID))
  }, [])

  return (
    <Fragment>
      <Breadcrumb />

      <Spinner spinning={state.status === "loading"}>
        <ProductImageDescription
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          product={state.product}
          currency={{
            currencyRate: 12,
            currencySymbol: "$",
          }}
        />

        <ProductDescriptionTab
          spaceBottomClass="pb-90"
          productFullDesc={state.product.fullDescription}
        />

        <RelatedProducts category={state.product.category?.[0]} />
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
