import React from "react"
import { ShopCategories, ShopColor, ShopSearch, ShopSize, ShopTag } from "../../../ui/components"
import {
  getIndividualCategories,
  getIndividualTags,
  getIndividualColors,
  getProductsIndividualSizes,
} from "../../../utils"

export const ShopSidebar = ({ products, getSortParams }) => {
  const uniqueCategories = getIndividualCategories(products)
  const uniqueColors = getIndividualColors(products)
  const uniqueSizes = getProductsIndividualSizes(products)
  const uniqueTags = getIndividualTags(products)

  return (
    <div className="sidebar-style mr-30">
      {/* shop search */}
      <ShopSearch />

      {/* filter by categories */}
      <ShopCategories categories={uniqueCategories} getSortParams={getSortParams} />

      {/* filter by color */}
      <ShopColor colors={uniqueColors} getSortParams={getSortParams} />

      {/* filter by size */}
      <ShopSize sizes={uniqueSizes} getSortParams={getSortParams} />

      {/* filter by tag */}
      <ShopTag tags={uniqueTags} getSortParams={getSortParams} />
    </div>
  )
}

export default ShopSidebar
