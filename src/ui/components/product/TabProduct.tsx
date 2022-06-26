import React from "react"
import Tab from "react-bootstrap/Tab"
import Nav from "react-bootstrap/Nav"
import ProductGrid from "./ProductGrid"
import SectionTitle from "../SectionTitle"
import Spinner from "../spinner/Spinner"

export const TabProduct = ({
  category,
  products,
  bgColorClass,
  spaceTopClass,
  loading = false,
  spaceBottomClass,
}: any) => {
  return (
    <div
      className={`product-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      } ${bgColorClass ? bgColorClass : ""}`}
    >
      <div className="container">
        <SectionTitle titleText="DAILY DEALS!" positionClass="text-center" />
        <Tab.Container defaultActiveKey="bestSeller">
          <Nav variant="pills" className="product-tab-list pt-30 pb-55 text-center">
            <Nav.Item>
              <Nav.Link eventKey="newArrival">
                <h4>New Arrivals</h4>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="bestSeller">
                <h4>Best Sellers</h4>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Spinner spinning={loading}>
            <Tab.Content>
              <Tab.Pane eventKey="newArrival">
                <div className="row">
                  <ProductGrid
                    products={products?.news || []}
                    category={category}
                    type="new"
                    limit={8}
                    spaceBottomClass="mb-25"
                  />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="bestSeller">
                <div className="row">
                  <ProductGrid
                    products={products?.bestSellers || []}
                    category={category}
                    type="bestSeller"
                    limit={8}
                    spaceBottomClass="mb-25"
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
