import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { animateScroll } from "react-scroll"

const Footer = ({
  backgroundColorClass,
  spaceTopClass,
  spaceBottomClass,
  spaceLeftClass,
  spaceRightClass,
  containerClass,
  extraFooterClass,
  sideMenu,
}: any) => {
  const [scroll, setScroll] = useState(0)
  const [top, setTop] = useState(0)

  useEffect(() => {
    setTop(100)
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    animateScroll.scrollToTop()
  }

  const handleScroll = () => {
    setScroll(window.scrollY)
  }

  return (
    <footer
      className={`footer-area ${backgroundColorClass ? backgroundColorClass : ""} ${
        spaceTopClass ? spaceTopClass : ""
      } ${spaceBottomClass ? spaceBottomClass : ""} ${extraFooterClass ? extraFooterClass : ""} ${
        spaceLeftClass ? spaceLeftClass : ""
      } ${spaceRightClass ? spaceRightClass : ""}`}
    >
      <div className={`${containerClass ? containerClass : "container"}`}>
        <div className="row">
          <div className={`${sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"}`}>
            <FooterCopyright footerLogo="/assets/img/logo/logo.png" spaceBottomClass="mb-30" />
          </div>
          <div className={`${sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"}`}>
            <div className="footer-widget mb-30 ml-30">
              <div className="footer-title">
                <h3>ABOUT US</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/about"}>About us</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>Store location</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/contact"}>Contact</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>Orders tracking</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={`${sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"}`}>
            <div
              className={`${sideMenu ? "footer-widget mb-30 ml-95" : "footer-widget mb-30 ml-50"}`}
            >
              <div className="footer-title">
                <h3>USEFUL LINKS</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>Returns</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>Support Policy</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>Size guide</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>FAQs</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={`${sideMenu ? "col-xl-3 col-sm-4" : "col-lg-2 col-sm-6"}`}>
            <div
              className={`${sideMenu ? "footer-widget mb-30 ml-145" : "footer-widget mb-30 ml-75"}`}
            >
              <div className="footer-title">
                <h3>FOLLOW US</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <a href="//www.facebook.com" target="_blank" rel="noopener noreferrer">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="//www.twitter.com" target="_blank" rel="noopener noreferrer">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="//www.instagram.com" target="_blank" rel="noopener noreferrer">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="//www.youtube.com" target="_blank" rel="noopener noreferrer">
                      Youtube
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <div className={`${sideMenu ? "col-xl-3 col-sm-8" : "col-lg-4 col-sm-6"}`}>
            <FooterNewsletter
              spaceBottomClass="mb-30"
              spaceLeftClass="ml-70"
              sideMenu={sideMenu}
            />
          </div> */}
        </div>
      </div>
      <button className={`scroll-top ${scroll > top ? "show" : ""}`} onClick={() => scrollToTop()}>
        <i className="fa fa-angle-double-up"></i>
      </button>
    </footer>
  )
}

const FooterCopyright = ({ footerLogo, spaceBottomClass, colorClass }: any) => {
  return (
    <div
      className={`copyright ${spaceBottomClass ? spaceBottomClass : ""} ${
        colorClass ? colorClass : ""
      }`}
    >
      <div className="footer-logo">
        <Link to={process.env.PUBLIC_URL + "/"}>
          <img alt="" src={process.env.PUBLIC_URL + footerLogo} />
        </Link>
      </div>
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <a href="https://hasthemes.com" rel="noopener noreferrer" target="_blank">
          Flone
        </a>
        .<br /> All Rights Reserved
      </p>
    </div>
  )
}

export default Footer
