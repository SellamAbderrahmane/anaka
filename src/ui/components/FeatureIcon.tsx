import React from "react"

const FeatureIcon = (props: any) => {
  const featureIconData = [
    {
      id: 1,
      image: "/assets/img/icon-img/support-1.png",
      title: "Free Shipping",
      subtitle: "Free shipping on all order",
    },
    {
      id: 2,
      image: "/assets/img/icon-img/support-2.png",
      title: "Support 24/7",
      subtitle: "Free shipping on all order",
    },
    {
      id: 3,
      image: "/assets/img/icon-img/support-3.png",
      title: "Money Return",
      subtitle: "Free shipping on all order",
    },
    {
      id: 4,
      image: "/assets/img/icon-img/support-4.png",
      title: "Order Discount",
      subtitle: "Free shipping on all order",
    },
  ]

  return (
    <div className="support-area pt-100 pb-60">
      <div className="container">
        <div className="row">
          {featureIconData.map((singleFeature) => {
            return <SingleFeatureIcon singleFeature={singleFeature} key={singleFeature.id} />
          })}
        </div>
      </div>
    </div>
  )
}

const SingleFeatureIcon = ({ singleFeature }) => {
  return (
    <div className="col-lg-3 col-sm-6">
      <div className="support-wrap mb-30">
        <div className="support-icon">
          <img className="animated" src={process.env.PUBLIC_URL + singleFeature.image} alt="" />
        </div>
        <div className="support-content">
          <h5>{singleFeature.title}</h5>
          <p>{singleFeature.subtitle}</p>
        </div>
      </div>
    </div>
  )
}

export default FeatureIcon
