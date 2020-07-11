import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Main from '../../images/main.jpg';
import {Carousel} from 'react-bootstrap';



function MainContent() {
  return (
    <>
    <Header />
    <div className='container-fluid'>
        <div className='row'>
            <div className="col-lg-5">
              <h3 className="text-center mt-5">Bandhan.com</h3>
              <p className='align-justify'>Lorazepam, sold under the brand name Ativan among others, is a benzodiazepine medication. It is used to treat anxiety disorders, trouble sleeping, active seizures including status epilepticus, alcohol withdrawal, and chemotherapy-induced nausea and vomiting. </p>
              <p className='align-justify'>Lorazepam, sold under the brand name Ativan among others, is a benzodiazepine medication. It is used to treat anxiety disorders, trouble sleeping, active seizures including status epilepticus, alcohol withdrawal, and chemotherapy-induced nausea and vomiting. </p>
              <p className='align-justify'>Lorazepam, sold under the brand name Ativan among others, is a benzodiazepine medication. It is used to treat anxiety disorders, trouble sleeping, active seizures including status epilepticus, alcohol withdrawal, and chemotherapy-induced nausea and vomiting. </p>
            </div>
            <div className="col-lg-7">

            <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Main}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Main}
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Main}
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>

            </div>
        </div>
    </div>
    <Footer />
    </>
  );
}

export default MainContent;
