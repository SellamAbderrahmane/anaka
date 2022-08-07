import React from "react"
import Tab from "react-bootstrap/Tab"
import Nav from "react-bootstrap/Nav"
import ProductGrid from "./ProductGrid"
import SectionTitle from "../SectionTitle"
import Spinner from "../spinner/Spinner"

export const TabProduct = ({
  products,
  currency,
  bgColorClass,
  spaceTopClass,
  loading = false,
  spaceBottomClass,
  addToCart,
  addToWishlist,
  addToCompare,
  cartItems,
  wishlistItems,
  compareItems,
}: any) => {
  return (
    <div
      className={`product-area ${spaceTopClass && spaceTopClass} ${
        spaceBottomClass && spaceBottomClass
      } ${bgColorClass && bgColorClass}`}
    >
      <div className='container'>
        <SectionTitle titleText='DAILY DEALS!' positionClass='text-center' />
        <Tab.Container defaultActiveKey='bestSeller'>
          <Nav variant='pills' className='product-tab-list pt-30 pb-55 text-center'>
            <Nav.Item>
              <Nav.Link eventKey='newArrival'>
                <h4>New Arrivals</h4>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='bestSeller'>
                <h4>Best Sellers</h4>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Spinner spinning={loading}>
            <Tab.Content>
              <Tab.Pane eventKey='newArrival'>
                <div className='row'>
                  <ProductGrid
                    currency={currency}
                    addToCart={addToCart}
                    spaceBottomClass='mb-25'
                    addToCompare={addToCompare}
                    addToWishlist={addToWishlist}
                    cartItems={cartItems}
                    compareItems={compareItems}
                    wishlistItems={wishlistItems}
                    products={products?.news || []}
                  />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey='bestSeller'>
                <div className='row'>
                  <ProductGrid
                    currency={currency}
                    addToCart={addToCart}
                    spaceBottomClass='mb-25'
                    addToCompare={addToCompare}
                    addToWishlist={addToWishlist}
                    cartItems={cartItems}
                    compareItems={compareItems}
                    wishlistItems={wishlistItems}
                    products={products?.bestSellers || []}
                  />
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Spinner>
        </Tab.Container>
      </div>
    </div>
  )
}

export default TabProduct
