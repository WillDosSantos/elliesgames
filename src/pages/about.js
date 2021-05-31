import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="Page two" />
    <section>
      <div className="container">
        <h2>Who we are</h2>
        <p>Ellies games was created in 2008 by Erik Bye when he realized he wanted to make some educational based and fun games for his daughter, Ellie. Over the years, he has created a number of applications and games for kids getting amazing reviews from parents and kids all over the world.</p>
        <Link to="/">Go back to the homepage</Link>
      </div>
    </section>
  </Layout>
)

export default AboutPage
