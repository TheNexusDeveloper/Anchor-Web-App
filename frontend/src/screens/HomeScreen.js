import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'

import products from '../products'
import PromoCarousel from '../components/PromoCarousel'

function HomeScreen() {
    return (
        <div>
            <div>
                <PromoCarousel />
            </div>
            <div>
                <h1>latest products</h1>
                 <Row>
                    {products.map(product => (
                        <Col  key={product._id}sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    )
}

export default HomeScreen
