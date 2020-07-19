import React, { Component } from 'react';
import { Row, Col, Carousel, Card, Form, Input, Button } from 'antd';
import CustomScrollbars from 'util/CustomScrollbars';
import './main.css';

class Index extends Component {
    
    state = {
        view: "pincode",
    }
    viewPincode = () => {
        this.setState({ view: "pincode" })
        this.props.history.push('/dashboard/company');
    }
    viewSignIn = () => {
        this.setState({ view: "signin" })
        this.props.history.push('/dashboard/company');

    }
    viewSignUp = () => {
        this.setState({ view: "signup" })
        this.props.history.push('/dashboard/company');
    }
    viewCompanySignUp = () => {
        this.setState({ view: "companyRegister" })
    }

    handleKeyPress = (event) =>{
        let regex = new RegExp("^[0-9+]*$"); 
        let key = String.fromCharCode(event.charCode ? event.which : event.charCode); 
        if (!regex.test(key)) { 
         event.preventDefault();
         this.setState({
           data: { ...this.state.data, [event.target.name]: event.target.value }
         });
          return false; 
        } 
     }

    render () {
        const { view } = this.state;
        return (
            <CustomScrollbars>
            
            <Carousel effect="fade" dots={false} pauseOnHover={false} autoplay={true}>
                <div>
                    <img src="/gallery/daria-volkova-BMnX7L9G5xc-unsplash.jpg" />
                </div>
                <div>
                    <img src="/gallery/maddi-bazzocco-Hz4FAtKSLKo-unsplash.jpg" />
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
                <Col lg={9} md={14} xs={22}>
                    <div>
                        <Card title="GROIDS" bordered={false}>
                            {view === "pincode" ? (<>
                            <p style={{textAlign: "center", fontSize: "18px" }}>Groceries delivered in as little as 1 hour</p>
                            <Form id="pincode">
                                <Form.Item>
                                    <Input style={{height: "48px", fontSize: "16px"}} placeholder="Enter Pin Code" onKeyPress={this.handleKeyPress} maxLength={6} /><i className="icon icon-sent gx-mr-2" />
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" size="large" block style={{marginTop: "0px", marginBottom: "0px"}}>Continue</Button>
                                </Form.Item>
                            </Form>
                            <p style={{textAlign: "center", marginBottom: "4px"}}>Already have an account? <span style={{textDecoration: "none", color: "#34b880", cursor: "pointer"}} onClick={this.viewSignIn}>Sign in</span></p>
                            <p style={{textAlign: "center", marginBottom: "0px"}}>or <span style={{textDecoration: "none", color: "#34b880", cursor: "pointer"}} onClick={this.viewSignUp}>Create account </span></p>
                            </>): null }

                            {view === "signin" ? (<>
                            <Form id="signin">
                            <p style={{textAlign: "center", fontSize: "18px"}}>Sign in</p>
                            <Form.Item
                                rules={[{ required: true, message: 'The input is not valid E-mail!' }]} name="email"
                            >
                                <Input placeholder="Email" style={{height: "48px", fontSize: "16px"}} />
                            </Form.Item>
                            <Form.Item
                                rules={[{ required: true, message: 'Enter password!' }]}
                                name="password"
                            >
                                <Input type="password" placeholder="Password" style={{height: "48px", fontSize: "16px"}} />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" size="large" block style={{marginTop: "0px", marginBottom: "0px"}}>
                                Sign in
                                </Button>
                            </Form.Item>
                            </Form>
                            <p style={{textAlign: "center", marginBottom: "4px"}}><span style={{textDecoration: "none", cursor: "pointer"}} onClick={this.viewSignIn}>Forgot password?</span></p>
                            <p style={{textAlign: "center", marginBottom: "4px"}}>Don't have an account? <span style={{textDecoration: "none", color: "#34b880", cursor: "pointer"}} onClick={this.viewSignUp}>Create new</span></p>
                            <p style={{textAlign: "center", marginBottom: "0px"}}><span style={{textDecoration: "none", color: "#34b880", cursor: "pointer"}} onClick={this.viewPincode}>I'm a Guest User</span></p>
                            </>): null }

                            {view === "signup" ? (<>
                            <Form id="signup">
                            <p style={{textAlign: "center", fontSize: "18px"}}>Sign up</p>
                            <Form.Item
                            rules={[{ required: true, message: 'Enter first name!' }]}
                            name="firstname"
                            >
                                <Input placeholder="First Name" style={{height: "48px", fontSize: "16px"}}/>
                            </Form.Item>
                            <Form.Item
                            rules={[{ required: true, message: 'Enter last name!' }]}
                            name="lastname"
                            >
                                <Input placeholder="Last Name" style={{height: "48px", fontSize: "16px"}}/>
                            </Form.Item>
                            <Form.Item
                                rules={[{ required: true, message: 'The input is not valid E-mail!' }]} name="email"
                            >
                                <Input placeholder="Email" style={{height: "48px", fontSize: "16px"}} />
                            </Form.Item>
                            <Form.Item
                                rules={[{ required: true, message: 'Enter password!' }]}
                                name="password"
                            >
                                <Input type="password" placeholder="Password" style={{height: "48px", fontSize: "16px"}} />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" size="large" block style={{marginTop: "0px", marginBottom: "0px"}}>
                                Register
                                </Button>                            
                            </Form.Item>
                            <p style={{textAlign: "center", marginBottom: "4px"}}>Already have an account? <span style={{textDecoration: "none", color: "#34b880", cursor: "pointer"}} onClick={this.viewSignIn}>Sign in</span></p>
                            <p style={{textAlign: "center", marginBottom: "0px"}}><span style={{textDecoration: "none", color: "#34b880", cursor: "pointer"}} onClick={this.viewPincode}>I'm a Guest User</span></p>
                            </Form>
                            </>): null }

                            {view === "companyRegister" ? (<>
                            <Form id="companyRegister">
                            <p style={{textAlign: "center", fontSize: "18px"}}>Register my Company</p>
                            <Form.Item
                            rules={[{ required: true, message: 'Enter company name!' }]}
                            name="companyname"
                            >
                                <Input placeholder="Company Name" style={{height: "48px", fontSize: "16px"}}/>
                            </Form.Item>
                            <Form.Item
                                rules={[{ required: true, message: 'The input is not valid E-mail!' }]} name="email"
                            >
                                <Input placeholder="Email" style={{height: "48px", fontSize: "16px"}} />
                            </Form.Item>                            
                            <Form.Item
                            rules={[{ required: true, message: 'Enter mobile number!' }]}
                            name="mobile"
                            >
                                <Input placeholder="Mobile Number" style={{height: "48px", fontSize: "16px"}}/>
                            </Form.Item>
                            <Form.Item
                            rules={[{ required: true, message: 'Enter Contact Person Name!' }]}
                            name="contactperson"
                            >
                                <Input placeholder="Contact Person Name" style={{height: "48px", fontSize: "16px"}}/>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" size="large" block style={{marginTop: "0px", marginBottom: "0px"}}>
                                Register
                                </Button>                            
                            </Form.Item>
                            <p style={{textAlign: "center", marginBottom: "4px"}}>Already have an account? <span style={{textDecoration: "none", color: "#34b880", cursor: "pointer"}} onClick={this.viewSignIn}>Sign in</span></p>
                            <p style={{textAlign: "center", marginBottom: "0px"}}><span style={{textDecoration: "none", color: "#34b880", cursor: "pointer"}} onClick={this.viewPincode}>I'm a Guest User</span></p>
                            </Form>
                            </>): null }
                        </Card>
                        <img className="fd-card-logo" src="/gallery/Fandashtic-logo.svg" /> 
                    </div> 
                </Col>
            </Row>

            <Row className="signin-button">
                <Col>
                    <Button type="primary">
                        <span onClick={this.viewSignIn}>{view == "pincode" ? ( <>Sign in</>) : null }</span>
                        <span onClick={this.viewSignUp}>{view == "signin" ? ( <>Sign up</>) : null }</span>
                        <span onClick={this.viewPincode}>{view == "signup" ? ( <>Guest User</>) : null }</span>
                        <span onClick={this.viewPincode}>{view == "companyRegister" ? (<>Guest User</>): null}</span>
                    </Button>
                    <Button className="register-btn" type="primary">
                        <span onClick={this.viewCompanySignUp}>Register</span>
                    </Button>
                </Col>
            </Row>
            
            </CustomScrollbars>
        )
    }
}

export default Index

