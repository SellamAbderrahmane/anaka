import React, { Fragment, useEffect, useState } from "react"
import Paginator from "react-hooks-paginator"

import { ShopSidebar, ShopTopbar } from "./components"
import Breadcrumb from "../../ui/components/Breadcrumb"

import { ShopState } from "./state"
import { useShop } from "../contexts"
import products from "../../data/products.json"
import { ProductGridList } from "../../ui/components"
import Spinner from "../../ui/components/spinner/Spinner"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { configState } from "../../app/config"

export const ShopPage = ({ pageLimit = 15 }: any) => {
  const shop = useShop()
  const dispatch = useAppDispatch()
  const state = useAppSelector(ShopState)
  const config = useAppSelector(configState)

  const [layout, setLayout] = useState("grid three-column")

  const [filterType, setFilterType] = useState("")
  const [filterValue, setFilterValue] = useState("")

  const [sortType, setSortType] = useState("")
  const [sortValue, setSortValue] = useState("")

  const [currentData, setCurrentData] = useState([])

  const [offset, setOffset] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  const setFilterParams = (filterType, filterValue) => {
    console.log(filterType, filterValue)

    // setFilterType(filterType)
    // setFilterValue(filterValue)
  }

  const setSortParams = (filterType, filterValue) => {
    setSortType(filterType)
    setSortValue(filterValue)
  }

  useEffect(() => {
    dispatch(shop.loadProducts({ currentPage }))
    // let sortedProducts = getSortedProducts(products, filterType, filterValue)
    // const filterSortedProducts = getSortedProducts(sortedProducts, sortType, sortValue)
    // sortedProducts = filterSortedProducts
    // setSortedProducts(sortedProducts)
    // setCurrentData(sortedProducts.slice(offset, offset + pageLimit))
  }, [offset, products, filterType, filterValue, sortType, sortValue])

  return (
    <Fragment>
      <Breadcrumb />
      <div className="shop-area pt-95 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 order-2 order-lg-1">
              <ShopSidebar products={products} getSortParams={setFilterParams} />
            </div>
            <div className="col-lg-9 order-1 order-lg-2">
              <ShopTopbar
                getLayout={setLayout}
                getFilterSortParams={setSortParams}
                productCount={products.length}
                sortedProductCount={currentData.length}
              />

              <div className="shop-bottom-area mt-35">
                <Spinner spinning={state.status === "loading"}>
                  <div className={`row ${layout ? layout : ""}`}>
                    <ProductGridList
                      products={state.products}
                      currency={config.currency}
                      spaceBottomClass="mb-25"
                    />
                  </div>
                </Spinner>
              </div>

              <div className="pro-pagination-style text-center mt-30">
                <Paginator
                  totalRecords={state.pagination?.total}
                  pageLimit={state.pagination?.limit}
                  pageNeighbours={2}
                  setOffset={setOffset}
                  currentPage={state.pagination?.currentPage}
                  setCurrentPage={setCurrentPage}
                  pageContainerClass="mb-0 mt-0"
                  pagePrevText="«"
                  pageNextText="»"
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
