import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

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
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/games">Games</Link>
            </li>
            <li>
              <Link to="/apps">Apps</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>  
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
  </section>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
