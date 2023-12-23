import React, { useState, useEffect, lazy, Suspense } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Col, Container, Row } from "reactstrap";
import { heroImg, counterImg } from '../assets/images/ImagePaths'
import '../styles/home.css'
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'
import Services from "../components/Services/Services";
import HowIt from "../components/HowItWorks/how";
import WhatYouGet from '../components/WhatUGet/Get'
import ProductList from "../components/UI/ProductsList";
import Clock from "../components/UI/Clock";
import products from '../assets/data/products'
import CustomProject from "../components/Custom/CustomProject";

const ShowReviews = lazy(() => import("../components/Reviews/ShowReviews"));


const Home = () => {

  const year = new Date().getFullYear();
  const [data, setData] = useState(products);

  useEffect(() => {
    const completedProducts = products.filter(item => item.category === 'chair');
    setData(completedProducts);
    window.scrollTo(0, 0);
  }, [])

  return (

    <Helmet title={"Home"}>

      {/* Hero Section */}
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero__content">
                <p className="hero__subtitle">Get Your Stress Free Projects in {year}</p>
                <h2>- Affordable Cost<br />- Instant Download</h2>
                <p>Welcome to Code Makers, your go-to destination for custom projects and ready-made projects. We also offer a curated selection of completed projects available for purchase and download.</p>

                <Link to='/shop'>
                  <motion.button whileHover={{ scale: 1.1 }} className="buy__btn">
                    Shop Now
                  </motion.button>
                </Link>

              </div>
            </Col>

            <Col lg='6' md='6' className="imgDiv">
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>

          </Row>
        </Container>
      </section>

      {/* How it Works Section */}
      <HowIt />

      {/* What You Will Get Section */}
      <WhatYouGet />

      {/* Custom Project Section */}
      <CustomProject />

      {/* Features Section RD */}
      <Services />

      {/* Completed Projects Section RD */}
      <section className='trending__products mt-0 pt-0 mb-0'>
        <Container className="mt-0">
          <Row>
            <Col lg='12' className="text-center">
              <h2 className="section__title mb-4">Completed Projects</h2>
            </Col>
            <ProductList data={data} />
          </Row>
        </Container>
      </section>

      {/* Limited Offer Section RD */}
      {
        process.env.REACT_APP_SHOW_OFFER === "true" ?
          <section className="timer__count">
            <Container>
              <Row>
                <Col lg='6' md='12' className="count__down-col">
                  <div className="clock__top-content text-white">
                    <h4 className="fs-5 mb-4">
                      20% Discount - All Android Projects
                    </h4>
                  </div>
                  <Clock />

                  <motion.button whileHover={{ scale: 1.1 }} className="buy__btn store__btn">
                    <Link to={'/shop'} className="">Visit Store</Link>
                  </motion.button>
                </Col>

                <Col lg='6' md='12' className="text-end counter__img">
                  <img src={counterImg} alt="Product Img" />
                </Col>
              </Row>
            </Container>
          </section>
          : null
      }

      {/* Reviews Section */}
      <center>
        <h2 className="section__title mb-2 pt-4">Our Google Reviews</h2>
        <p className='fs-5 mb-3'>What Students Says</p>
      </center>
      <Suspense fallback={<div>.</div>}>
        <ShowReviews />
      </Suspense>

    </Helmet>

  );
};

export default Home;