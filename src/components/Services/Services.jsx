import React from 'react'
import './services.css'
import { Col, Container, Row } from 'reactstrap'
import serviceData from '../../assets/data/serviceData'
import { motion } from 'framer-motion'

const Services = () => {
  return <section className='services mb-0'>

    <Container>
      <Row>

        <center className="title">
          <h2 className="section__title mb-3">Features</h2>
          <p className='sub__heading'>Get Latest Android & PHP Projects Ideas 2023</p>
        </center>
        {
          serviceData.map((item, index) => (

            <Col lg='4' md='4' key={index}>
              <motion.div whileHover={{ scale: 1.05 }} className="service__item" style={{ background: `${item.bg}` }}>
                <span><i className={item.icon}></i></span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </motion.div>
            </Col>

          ))
        }


      </Row>
    </Container>

  </section>
}

export default Services