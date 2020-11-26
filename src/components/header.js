import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from "../images/logo.svg"

const Header = ({ siteTitle }) => (
  <section className="section--top-hero">
    <div className="container">
      <header>
        <nav>
          <Link className="nav-logo" to="/">
            <img src={Logo} alt="Ellies Games Logo"/>
          </Link>
          <ul>
            <li>Homes</li>
            <li>Games</li>
            <li>Apps</li>
            <li>About</li>  
          </ul>
          <div className="btn--container">
            <div className="btn btn--small">
              Contact
            </div>
          </div>
        </nav>
      </header>
      <div className="hero-slider">
        <h1>Math that’s fun!</h1>
        <div className="btn--container">
          <div className="btn btn--large">
            MATH DUEL
          </div>
        </div>
      </div> 
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
