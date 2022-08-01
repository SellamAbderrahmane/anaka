import React, { Fragment, useCallback, useState } from "react"
import Spinner from "../../../ui/components/spinner/Spinner"

const ProductSingleReview = ({ review }) => {
  return (
    <div className='single-review'>
      <div className='review-img'>
        <img src={review.user?.img} alt='' />
      </div>
      <div className='review-content'>
        <div className='review-top-wrap'>
          <div className='review-left'>
            <div className='review-name'>
              <h4>{review.user?.name}</h4>
            </div>
            {/* <div className='review-rating'>
              <i className='fa fa-star' />
              <i className='fa fa-star' />
              <i className='fa fa-star' />
              <i className='fa fa-star' />
              <i className='fa fa-star' />
            </div> */}
          </div>
          {/* <div className='review-left'>
                  <button>Reply</button>
                </div> */}
        </div>
        <div className='review-bottom'>
          <p>{review.content}</p>
        </div>
      </div>
    </div>
  )
}

const ProductReviews = ({ loading, reviews, onReviewSubmet, isUserConnected }: any) => {
  const [content, setContent]: any = useState("")

  const handleForm = (e: any) => {
    e.preventDefault()

    if (typeof onReviewSubmet === "function") {
      onReviewSubmet({
        content,
      })
    }
  }

  return (
    <Spinner spinning={loading}>
      <div className='row'>
        <div className={isUserConnected ? "col-lg-7" : "col-lg-12"}>
          <div className='review-wrapper'>
            {reviews.map((review: any, indx: number) => (
              <ProductSingleReview review={review} key={indx} />
            ))}
          </div>
        </div>
        {isUserConnected && (
          <div className='col-lg-5'>
            <div className='ratting-form-wrapper pl-50'>
              <h3 className='mb-3'>Add a Review</h3>
              <div className='ratting-form'>
                <form onSubmit={handleForm}>
                  {/* <div className='star-box'>
                <span>Your rating:</span>
                <div className='ratting-star'>
                  <i className='fa fa-star' />
                  <i className='fa fa-star' />
                  <i className='fa fa-star' />
                  <i className='fa fa-star' />
                  <i className='fa fa-star' />
                </div>
              </div> */}
                  <div className='row'>
                    <div className='col-md-12'>
                      <div className='rating-form-style mb-10'>
                        <textarea
                          name='Your Review'
                          placeholder='Message'
                          value={content}
                          onChange={(e) => setContent(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className='col-md-12'>
                      <div className='rating-form-style form-submit'>
                        <input type='submit' defaultValue='Submit' />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </Spinner>
  )
}

export default ProductReviews
