import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

function PromoCarousel() {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="/resources/images/products/cars/benz 01.jpg"
                        alt="First slide"
                        fluid
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="/resources/images/products/cars/benz 02.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/resources/images/products/cars/benz 3.png"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
</Carousel>
        </div>
    )
}

export default PromoCarousel
