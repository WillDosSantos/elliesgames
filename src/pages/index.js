import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

//Component animations
import { motion } from "framer-motion"

//Images
import Hero2 from "../images/hero-2-img.svg"
import Hero3 from "../images/hero-3-img.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="section--lte-gray">
    <div className="container">
      <div className="grid grid-2">
        <div className="col">
          <img alt="Second Hero" src={Hero2}/>
        </div>
        <div className="col" style={{ padding: '1em', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column' }}>
          <h2 className="lte-bg">
            Apps & Games for all ages
          </h2>
          <p>Want to get the latest games and apps? Sign up for our email list and be the one of the first to be the most exclusive content.</p>
          <motion.div
          whileHover={{ scale: 0.9 }}
          whileTap={{ scale: 1.0 }}
          className="btn--container btn--sans-border">
            <div className="btn btn--large">
              View All
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    </section>
    <section className="section--gray" style={{padding: '2em'}}>
      <div className="container">
        <div className="grid grid-2">
          <div className="btn btn--square">Latest for iOS</div>
          <div className="btn btn--square">Latest for Android</div>
        </div>
      </div>
    </section>
    <section className="section--orange">
      <div className="container">
        <div className="grid grid-2">
          <div className="section-content">
            <h1>It’s time for school</h1>
            <p>Safety is the priority right now but we also don’t want to feel like we are at a stand still. Motivate your kids with a great new app!</p>
            <motion.div
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 1.0 }}
            className="btn--container"
            style={{marginTop: '1em'}}
            >
              <div className="btn btn--large btn--large__blue">
                Get the app
              </div>
            </motion.div>
          </div>
          <img className="grid-img-hero" src={Hero3}/>
        </div>
      </div>
    </section>
    <section className="section--gray" style={{padding: '2em'}}>
      <div className="container">
        <h3>What others are saying</h3>
        <div className="card-container">
          <div className="card">
            <div className="card--avatar"></div>
            <div className="card--content">
              <div className="card--content--header">
                <h5>Donna Smith</h5>
              </div>  
              <p>Safety is the priority right now but we also don’t want to feel like we are at a stand still. Motivate your kids with a great new app!</p>
            </div> 
        </div>
        <div className="card-bg"></div>
        </div>
      </div>
    </section>
    <section style={{
      position: 'relative',
      top: '-100px',
      paddingTop: '100px'
    }}>
      <div className="container"
      style={{    
        paddingTop: '100px',
        marginBottom: '-100px',
      }}
      >
        <div className="grid grid-2">
          <div className="section-content">
            <h3 style={{textAlign: 'left'}}>
              Get the
              latest news!
            </h3>
            <p style={{marginTop: '1em'}}>
              Want to get the latest games and apps? Sign up for our email list and be the one of the first to be the most exclusive content.
            </p>
          </div>
          <div className="input-container">
            <input placeholder="Enter your email..."></input>
            <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1 }} 
            className="btn btn--small__green">
              Submit
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
