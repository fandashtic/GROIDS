import React, { Component, useState } from 'react';
import { Row, Col, Carousel, Card, Form, Input, Button } from 'antd';
import CustomScrollbars from 'util/CustomScrollbars'; 
import './main.css';

class Index extends Component {
    state = {
        view: true,
    }
    viewChanged = () => {
        this.setState({ view: !this.state.view })
    }
    render () {
        const { view } = this.state
        return (
            <CustomScrollbars>
            
            <Carousel effect="fade" dots={false} pauseOnHover={false} autoplay={true}>
                <div>
                    <img src="/gallery/wonderlane-mQMN0u6Kwp0-unsplash.jpg" />
                </div>
                <div>
                    <img src="/gallery/daria-volkova-BMnX7L9G5xc-unsplash.jpg" />
                </div>
                <div>
                    <img src="/gallery/gemma-stpjHJGqZyw-unsplash.jpg" />
                </div>
                <div>
                    <img src="/gallery/fikri-rasyid-ezeC8-clZSs-unsplash.jpg" />
                </div>
                <div>
                    <img src="/gallery/erol-ahmed-leOh1CzRZVQ-unsplash.jpg" />
                </div>
                <div>
                    <img src="/gallery/maria-lin-kim-8RaUEd8zD-U-unsplash.jpg" />
                </div>
            </Carousel>
            <Row className="headerCard" justify='center'>
                <Col lg={9} md={14} xs={18}>
                    <div>
                        <Card title="GROIDS" bordered={false}>
                            <p style={{textAlign: "center", fontSize: "18px" }}>Groceries delivered in as little as 1 hour</p>
                            <Form>
                                <Input style={{height: "48px", fontSize: "16px"}} placeholder="Enter pin code" />
                                <Button type="primary" htmlType="submit" size="large" block style={{marginTop: "20px"}}>Continue</Button>
                            </Form>
                            <p style={{textAlign: "center", marginBottom: "4px"}}>Already have an account? <span style={{textDecoration: "none", color: "#038fde", cursor: "pointer"}}>Sign in</span></p>
                            <p style={{textAlign: "center", marginBottom: "0px"}}>or <span style={{textDecoration: "none", color: "#038fde", cursor: "pointer"}}>Create account </span></p>
                        </Card>
                    </div> 
                </Col>
            </Row>

            <Row className="user-buttons">
                <Col>
                    <Button type="primary">Sign in</Button>
                </Col>
            </Row>
            
            </CustomScrollbars>
        )
    }
}

export default Index

