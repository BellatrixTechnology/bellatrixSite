
import React, { useState, useRef, useEffect } from "react";
import { TweenLite, Power3 } from "gsap";
import leftArrow from "../../src/assets/arrow-left.svg";
import rightArrow from ".././assets/arrow-right.svg";
import "../Testimonial.scss"

const testimonials = [
    {
      name: "Alexa",
      title: "Freelance Graphic Designer",
      image: `${require("../../src/assets/slider1.jpg")}`,
      quote:
        "Saya rasa Fetux Space merupakan sesuatu yang selama ini saya cari. Disini saya dapat belajar banyak hal terutama tentang design, hal ini sangat membantu karir saya sebagai seorang freelance designer. Apalagi harga yang ditawarkan juga sangat terjangkau."
    },
    {
      name: "Henry",
      title: "Freelance Graphic Designer",
      image: `${require("../../src/assets/slider2.jpg")}`,
      quote:
        "Saya rasa Fetux Space merupakan sesuatu yang selama ini saya cari. Disini saya dapat belajar banyak hal terutama tentang design, hal ini sangat membantu karir saya sebagai seorang freelance designer. Apalagi harga yang ditawarkan juga sangat terjangkau."
    },
    {
      name: "Jonny",
      title: "Freelance Graphic Designer",
      image: `${require("../../src/assets/slider3.jpg")}`,
      quote:
        "Saya rasa Fetux Space merupakan sesuatu yang selama ini saya cari. Disini saya dapat belajar banyak hal terutama tentang design, hal ini sangat membantu karir saya sebagai seorang freelance designer. Apalagi harga yang ditawarkan juga sangat terjangkau."
    },
  ];
  
  function App() {
    let imageList = useRef(null);
    let testimonialList = useRef(null);
    const imageWidth = 340;
  
    const [state, setState] = useState({
      isActive1: true,
      isActive2: false,
      isActive3: false
    });
  
    useEffect(() => {
      TweenLite.to(testimonialList.children[0], 0, {
        opacity: 1
      });
    }, []);
  
    //Image transition
    const slideLeft = (index, duration, multiplied = 1) => {
      TweenLite.to(imageList.children[index], duration, {
        x: -imageWidth * multiplied,
        ease: Power3.easeOut
      });
    };
  
    const slideRight = (index, duration, multiplied = 1) => {
      TweenLite.to(imageList.children[index], duration, {
        x: imageWidth * multiplied,
        ease: Power3.easeOut
      });
    };
  
    const scale = (index, duration) => {
      TweenLite.from(imageList.children[index], duration, {
        scale: 1.2,
        ease: Power3.easeOut
      });
    };
  
    //Content transition
  
    const fadeOut = (index, duration) => {
      TweenLite.to(testimonialList.children[index], duration, {
        opacity: 0
      });
    };
  
    const fadeIn = (index, duration) => {
      TweenLite.to(testimonialList.children[index], duration, {
        opacity: 1,
        delay: 1
      });
    };
  
    const nextSlide = () => {
      if (imageList.children[0].classList.contains("active")) {
        setState({ isActive1: false, isActive2: true });
        //Image transition
        slideLeft(0, 1);
        slideLeft(1, 1);
        scale(1, 1);
        slideLeft(2, 1);
        slideLeft(2, 0);
        fadeOut(0, 1);
        fadeIn(1, 1);
      } else if (imageList.children[1].classList.contains("active")) {
        setState({ isActive2: false, isActive3: true });
        //Image transition
        slideRight(0, 1);
        slideLeft(1, 1, 2);
        slideLeft(2, 1, 2);
        scale(2, 1);
        //content transition
        fadeOut(1, 1);
        fadeIn(2, 1);
      } else if (imageList.children[2].classList.contains("active")) {
        setState({ isActive1: true, isActive3: false });
        //Image transition
        slideLeft(2, 1, 3);
        slideLeft(0, 1, 0);
        slideLeft(1, 0, 0);
        scale(0, 1);
        //content transition
        fadeOut(2, 1);
        fadeIn(0, 1);
      }
    };
  
    const prevSlide = () => {
      if (imageList.children[0].classList.contains("active")) {
        setState({ isActive1: false, isActive3: true });
        //Image transition
        slideLeft(2, 0, 3);
        slideLeft(2, 1, 2);
        scale(2, 1);
        slideRight(0, 1);
        slideRight(1, 1);
        //content transtion
        fadeOut(0, 1);
        fadeIn(2, 1);
      } else if (imageList.children[1].classList.contains("active")) {
        setState({ isActive2: false, isActive1: true });
        //Image transition
        slideLeft(0, 0);
        slideRight(0, 1, 0);
        slideRight(1, 1, 0);
        slideRight(2, 1, 2);
        scale(0, 1);
        //content transtion
        fadeOut(1, 1);
        fadeIn(0, 1);
      } else if (imageList.children[2].classList.contains("active")) {
        setState({ isActive2: true, isActive3: false });
        slideLeft(2, 1);
        slideLeft(1, 0, 2);
        slideLeft(1, 1);
        scale(1, 1);
        //content transtion
        fadeOut(2, 1);
        fadeIn(1, 1);
      }
    };
  
    return (
      <div className="testimonial-section">
        <div className="testimonial-container">
          <div onClick={prevSlide} className="arrows left">
            <span>
              <img src={leftArrow} alt="left arrow" />
            </span>
          </div>
          <div className="inner">
            <div className="t-image">
              <ul ref={el => (imageList = el)}>
                <li className={state.isActive1 ? "active" : ""}>
                  <img src={testimonials[0].image} alt={testimonials[0].name} />
                </li>
                <li className={state.isActive2 ? "active" : ""}>
                  <img src={testimonials[1].image} alt={testimonials[0].name} />
                </li>
                <li className={state.isActive3 ? "active" : ""}>
                  <img src={testimonials[2].image} alt={testimonials[0].name} />
                </li>
              </ul>
            </div>
            <div className="t-content">
              <ul ref={el => (testimonialList = el)}>
                <li className={state.isActive1 ? "active" : ""}>
                  <div className="content-inner">
                    <p className="quote">{testimonials[0].quote}</p>
                    <h3 className="name">{testimonials[0].name}</h3>
                    <h4 className="title">{testimonials[0].title}</h4>
                  </div>
                </li>
                <li className={state.isActive2 ? "active" : ""}>
                  <div className="content-inner">
                    <p className="quote">{testimonials[1].quote}</p>
                    <h3 className="name">{testimonials[1].name}</h3>
                    <h4 className="title">{testimonials[1].title}</h4>
                  </div>
                </li>
                <li className={state.isActive3 ? "active" : ""}>
                  <div className="content-inner">
                    <p className="quote">{testimonials[2].quote}</p>
                    <h3 className="name">{testimonials[2].name}</h3>
                    <h4 className="title">{testimonials[2].title}</h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="arrows right" onClick={nextSlide}>
            <img src={rightArrow} alt="right arrow" />
          </div>
        </div>
      </div>
  );
};

export default App;
