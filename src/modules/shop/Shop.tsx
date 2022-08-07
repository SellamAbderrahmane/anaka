import React, { Fragment, useEffect, useState } from "react"
import Paginator from "react-hooks-paginator"

import { ShopSidebar, ShopTopbar } from "./components"
import Breadcrumb from "../../ui/components/Breadcrumb"

import { currentShopState } from "./state"
import { configState } from "../../app/config"
import { useCart, useShop } from "../contexts"
import { currentCartState } from "../cart/state"
import { ProductGridList } from "../../ui/components"
import Spinner from "../../ui/components/spinner/Spinner"
import { useAppDispatch, useAppSelector } from "../../app/hooks"

export const ShopPage = ({ pageLimit = 15 }: any) => {
  const shop = useShop()
  const cart = useCart()
  const dispatch = useAppDispatch()
  const config = useAppSelector(configState)
  const state = useAppSelector(currentShopState)
  const cartState = useAppSelector(currentCartState)

  const [sort, setSort] = useState("")
  const [filters, setFilters] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [layout, setLayout] = useState("grid three-column")

  useEffect(() => {
    dispatch(shop.loadProducts({ currentPage, sort }))
  }, [currentPage, sort])

  const addToWishlist = (product: any) => {
    dispatch(cart.addToWishList(product))
  }

  const addToCart = (product: any) => {
    dispatch(cart.addToCart(product, 1, null, product.price))
  }

  return (
    <Fragment>
      <Breadcrumb />
      <div className='shop-area pt-95 pb-100'>
        <div className='container'>
          <div className='row'>
            {/* <div className="col-lg-3 order-2 order-lg-1">
              <ShopSidebar products={state.products} getSortParams={setFilters} />
            </div> */}
            <div className='col-lg-12 order-1 order-lg-2'>
              <ShopTopbar
                getLayout={setLayout}
                onSortChange={setSort}
                productCount={state.pagination.total}
                sortedProductCount={state.products.length}
              />

              <div className='shop-bottom-area mt-35'>
                <Spinner spinning={state.status === "loading"}>
                  <div className={`row ${layout ? layout : ""}`}>
                    <ProductGridList
                      spaceBottomClass='mb-25'
                      products={state.products}
                      currency={config.currency}
                      wishlistItems={cartState.wishItems}
                      compareItems={cartState.compareItems}
                      cartItems={cartState.cartItems}
                      addToWishlist={addToWishlist}
                      addToCart={addToCart}
                    />
                  </div>
                </Spinner>
              </div>

              <div className='pro-pagination-style text-center mt-30'>
                <Paginator
                  pageNeighbours={2}
                  setOffset={() => {}}
                  setCurrentPage={setCurrentPage}
                  pageLimit={state.pagination?.limit}
                  totalRecords={state.pagination?.total}
                  currentPage={state.pagination?.currentPage}
                  pagePrevText='«'
                  pageNextText='»'
                  pageContainerClass='mb-0 mt-0'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ShopPage
