import React from 'react'
import { Slide, Zoom } from 'react-slideshow-image'

//Component animations
import { motion } from "framer-motion"

//Images
import slideImg1 from "../images/slides/slide1-img-1.png"
import slideImg2 from "../images/slides/slide1-img-2_1.png"
import slideImg3 from "../images/slides/slide1-img-2.png"
import slide2Img1 from "../images/slides/slide2-img-1.svg"
import slide2Img2 from "../images/slides/slide2-img-2.svg"
import slide2Img3 from "../images/slides/slide2-img-3.svg"

const Slideshow = () => {
  const zoomOutProperties = {
    indicators: true,
    scale: 0.4,
    indicators: i => (<div className="indicator">{i + 1}</div>)
  }
  return (
    <div>
      <Slide {...zoomOutProperties} easing="ease">
        <div className="each-slide">
          <div className="slide-content">
            <h1>Math that’s fun!</h1>
            <motion.div
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 1.0 }}
            className="btn--container">
              <div className="btn btn--large">
                MATH DUEL
              </div>
            </motion.div>
          </div>
          <div className="img-container">
            <img className="img-1" src={slideImg1}/>
            <img className="img-2" src={slideImg2}/>
            <img className="img-3" src={slideImg3}/>
          </div>
        </div>
        <div className="each-slide">
        <div className="slide-content">
          <h1>Fun and safe tv for kids!</h1>
          <motion.div
          whileHover={{ scale: 0.9 }}
          whileTap={{ scale: 1.0 }}
          className="btn--container">
            <div className="btn btn--large">
              Learn More
            </div>
          </motion.div>
        </div>
        <div className="img-container">
          <img className="img-1" src={slideImg1}/>
          <img className="img-2" src={slideImg2}/>
          <img className="img-3" src={slideImg3}/>
        </div>
      </div>
      <div className="each-slide">
          <div className="slide-content">
            <h1>A pet island adventure</h1>
            <motion.div
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 1.0 }}
            className="btn--container">
              <div className="btn btn--large">
               Vet Island
              </div>
            </motion.div>
          </div>
          <div className="img-container">
            <img className="img-1" src={slide2Img1}/>
            <img className="img-2" src={slide2Img2}/>
          </div>
        </div>
      </Slide>
    </div>
  )
};

export default Slideshow;
