/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"


import Header from "./header"
import "./reset.css"
import "./main.scss"
import "./slideshow-overrides.scss"

//Component animations
import { motion } from "framer-motion"

import Twitter from "../images/icons/twitter.svg"
import Youtube from "../images/icons/youtube.svg"
import Facebook from "../images/icons/facebook.svg"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)


  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children}</main>
        <footer>
          <div className="container">
            <span style={{color: "#4d9eff"}}>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a style={{color: "#4d9eff"}} href="https://www.gatsbyjs.com">Gatsby</a>
            </span>
            <ul>
              <li>Home</li>
              <li>Games</li>
              <li>Apps</li>
              <li>About</li>  
            </ul>
            <div className="social-btn-container" style={{display: 'flex'}}>
              <motion.div
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 1.0 }} className="btn btn--circle">
                <img src={Twitter} alt="Twitter Logo"/>
              </motion.div>
              <motion.div
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 1.0 }} className="btn btn--circle">
                <img src={Facebook} alt="Facebook Logo"/>
              </motion.div>
              <motion.div
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 1.0 }} className="btn btn--circle">
                <img src={Youtube} alt="Youtube Logo"/>
              </motion.div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
