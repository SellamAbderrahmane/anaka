import React from "react"
import Tab from "react-bootstrap/Tab"
import Nav from "react-bootstrap/Nav"
import ProductReviews from "./ProductReviews"

const ProductDescriptionTab = ({
  productFullDesc,
  additionalInfo,
  onReviewSubmet,
  reviewsLoading,
  productReviews = [],
  isUserConnected,
}: any) => {
  return (
    <div className='description-review-area pb-90'>
      <div className='container'>
        <div className='description-review-wrapper'>
          <Tab.Container defaultActiveKey='productDescription'>
            <Nav variant='pills' className='description-review-topbar'>
              <Nav.Item>
                <Nav.Link eventKey='additionalInfo'>Additional Information</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='productDescription'>Description</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='productReviews'>Reviews({productReviews?.length})</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className='description-review-bottom'>
              <Tab.Pane eventKey='additionalInfo'>
                <div className='product-anotherinfo-wrapper'>
                  <ul>
                    {additionalInfo &&
                      additionalInfo.map((info: any, indx: number) => {
                        return (
                          <li key={indx}>
                            <span>{info.label}</span> {info.value}
                          </li>
                        )
                      })}
                  </ul>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey='productDescription'>{productFullDesc}</Tab.Pane>
              <Tab.Pane eventKey='productReviews'>
                <ProductReviews
                  reviews={productReviews}
                  onReviewSubmet={onReviewSubmet}
                  loading={reviewsLoading}
                  isUserConnected={isUserConnected}
                />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </div>
  )
}

export default ProductDescriptionTab
