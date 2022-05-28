import React, { Fragment, useEffect, useState } from "react"
import Paginator from "react-hooks-paginator"

import Breadcrumb from "../../ui/components/Breadcrumb"

import { ShopSidebar, ShopTopbar } from "./components"

import products from "../../data/products.json"
import { ProductGridList } from "../../ui/components"
import { getSortedProducts } from "../../utils"

const ShopPage = () => {
  const pageLimit = 15

  const [layout, setLayout] = useState("grid three-column")

  const [sortType, setSortType] = useState("")
  const [sortValue, setSortValue] = useState("")

  const [filterSortType, setFilterSortType] = useState("")
  const [filterSortValue, setFilterSortValue] = useState("")

  const [currentData, setCurrentData] = useState([])

  const [sortedProducts, setSortedProducts] = useState([])
  const [offset, setOffset] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  const getSortParams = (sortType, sortValue) => {
    setSortType(sortType)
    setSortValue(sortValue)
  }

  const getFilterSortParams = (sortType, sortValue) => {
    setFilterSortType(sortType)
    setFilterSortValue(sortValue)
  }

  useEffect(() => {
    let sortedProducts = getSortedProducts(products, sortType, sortValue)
    const filterSortedProducts = getSortedProducts(sortedProducts, filterSortType, filterSortValue)
    sortedProducts = filterSortedProducts
    setSortedProducts(sortedProducts)
    setCurrentData(sortedProducts.slice(offset, offset + pageLimit))
  }, [offset, products, sortType, sortValue, filterSortType, filterSortValue])

  return (
    <Fragment>
      <Breadcrumb />
      <div className="shop-area pt-95 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 order-2 order-lg-1">
              <ShopSidebar products={products} getSortParams={getSortParams} />
            </div>
            <div className="col-lg-9 order-1 order-lg-2">
              <ShopTopbar
                getLayout={setLayout}
                getFilterSortParams={getFilterSortParams}
                productCount={products.length}
                sortedProductCount={currentData.length}
              />

              <div className="shop-bottom-area mt-35">
                <div className={`row ${layout ? layout : ""}`}>
                  <ProductGridList products={currentData} spaceBottomClass="mb-25" />
                </div>
              </div>

              <div className="pro-pagination-style text-center mt-30">
                <Paginator
                  totalRecords={sortedProducts.length}
                  pageLimit={pageLimit}
                  pageNeighbours={2}
                  setOffset={setOffset}
                  currentPage={currentPage}
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
