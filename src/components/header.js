import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Slideshow from "../components/slideshow"
import 'react-slideshow-image/dist/styles.css'

//Images
import slideImg1 from "../images/slides/slide1-img-1.png"
import slideImg2 from "../images/slides/slide1-img-2_1.png"
import slideImg3 from "../images/slides/slide1-img-2.png"

//Component animations
import { motion } from "framer-motion"

import Logo from "../images/logo.svg"

const Header = ({ siteTitle }) => (
  <section className="section--top-hero">
    <div className="container" style={{paddingBottom: '0px'}}>
      <header>
        <nav>
          <Link className="nav-logo" to="/">
            <img src={Logo} alt="Ellies Games Logo"/>
          </Link>
          <ul>
            <li>Home</li>
            <li>Games</li>
            <li>Apps</li>
            <li>About</li>  
          </ul>
          <motion.div
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 1.0 }}
            className="btn--container">
            <div className="btn btn--small">
              Contact
            </div>
          </motion.div>
        </nav>
      </header>
    </div>
    <Slideshow/>
  </section>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
