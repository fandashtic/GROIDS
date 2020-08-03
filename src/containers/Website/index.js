import React, { useState, useEffect } from 'react';
import { Row, Col, Carousel, Card, Form, Input, Button, message } from 'antd';
import { useHistory } from "react-router-dom";
import CustomScrollbars from 'util/CustomScrollbars';
import './main.css';
import { AddCompany } from 'api/Company/CompanyController';


const WebSite = () => {
    const history = useHistory()
    const [view, SetView] = useState('pincode');
    const [companyName, setcompanyName] = useState('');
    const [userName, setuserName] = useState('');
    const [email, setemail] = useState('');
    const [mobileNumber, setmobileNumber] = useState('');
    const [contactPerson, setcontactPerson] = useState('');

    const filter = {
        "filter": {
            "status": true
        }
    };

    useEffect(() => {

    }, [filter]);

    const viewPincode = () => {
        SetView("pincode")
        history.push('/dashboard/company');
    }

    const viewSignIn = () => {
        SetView("signin")
    }

    const login = () => {
        history.push('/dashboard/company');
    }

    const viewSignUp = () => {
        SetView("signup")
    }

    const viewCompanySignUp = () => {
        SetView("companyRegister")
    }

    const consumer = () => {
        message.info('Coming Soon')
    }

    const registerMyCompany = () => {
        let newCompany = {
            company_name: companyName,
            user_name: userName,
            email_id: email,
            mobilenumber: mobileNumber,
            contactperson: contactPerson
        };

        AddCompany(newCompany, (data, err) => {
            console.log(data);
            console.log(err);
        });
    }

    const handleKeyPress = (event) => {
        // let regex = new RegExp("^[0-9+]*$"); 
        // let key = String.fromCharCode(event.charCode ? event.which : event.charCode); 
        // if (!regex.test(key)) { 
        //  event.preventDefault();
        //  this.setState({
        //    data: { ...this.state.data, [event.target.name]: event.target.value }
        //  });
        //   return false; 
        // } 
    }

    return (
        <CustomScrollbars>

            <Carousel effect="fade" dots={false} pauseOnHover={false} autoplay={true}>
                <div>
                    <img src="/gallery/daria-volkova-BMnX7L9G5xc-unsplash.jpg" alt="" />
                </div>
                <div>
                    <img src="/gallery/maddi-bazzocco-Hz4FAtKSLKo-unsplash.jpg" alt="" />
                </div>
                <div>
                    <img src="/gallery/gemma-stpjHJGqZyw-unsplash.jpg" alt="" />
                </div>
                <div>
                    <img src="/gallery/fikri-rasyid-ezeC8-clZSs-unsplash.jpg" alt="" />
                </div>
                <div>
                    <img src="/gallery/erol-ahmed-leOh1CzRZVQ-unsplash.jpg" alt="" />
                </div>
                <div>
                    <img src="/gallery/maria-lin-kim-8RaUEd8zD-U-unsplash.jpg" alt="" />
                </div>
            </Carousel>
            <Row className="headerCard" justify='center'>
                <Col lg={9} md={14} xs={22}>
                    <div>
                        <Card title="GROIDS" bordered={false}>
                            {view === "pincode" ? (<>
                                <p style={{ textAlign: "center", fontSize: "18px" }}>Groceries delivered in as little as 1 hour</p>
                                <Form id="pincode">
                                    <Form.Item>
                                        <Input type="number" placeholder="Enter Pin Code" onKeyPress={handleKeyPress} maxLength={6} /><i className="icon icon-sent gx-mr-2" />
                                    </Form.Item>
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" size="large" block style={{ marginTop: "0px", marginBottom: "0px" }} onClick={consumer}>Continue</Button>
                                    </Form.Item>
                                </Form>
                                <p style={{ textAlign: "center", marginBottom: "4px" }}>Already have an account? <span style={{ textDecoration: "none", color: "#34b880", cursor: "pointer" }} onClick={viewSignIn}>Sign in</span></p>
                                <p style={{ textAlign: "center", marginBottom: "0px" }}>or <span style={{ textDecoration: "none", color: "#34b880", cursor: "pointer" }} onClick={viewSignUp}>Create account </span></p>
                            </>) : null}

                            {view === "signin" ? (<>
                                <Form id="signin">
                                    <p style={{ textAlign: "center", fontSize: "18px" }}>Sign in</p>
                                    <Form.Item
                                        rules={[{ required: true, message: 'The input is not valid E-mail!' }]} name="email"
                                    >
                                        <Input type="email" placeholder="Email" />
                                    </Form.Item>
                                    <Form.Item
                                        rules={[{ required: true, message: 'Enter password!' }]}
                                        name="password"
                                    >
                                        <Input type="password" placeholder="Password" />
                                    </Form.Item>
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" size="large" onClick={login} block style={{ marginTop: "0px", marginBottom: "0px" }}>
                                            Sign in
                            </Button>
                                    </Form.Item>
                                </Form>
                                <p style={{ textAlign: "center", marginBottom: "4px" }}><span style={{ textDecoration: "none", cursor: "pointer" }} onClick={viewSignIn}>Forgot password?</span></p>
                                <p style={{ textAlign: "center", marginBottom: "4px" }}>Don't have an account? <span style={{ textDecoration: "none", color: "#34b880", cursor: "pointer" }} onClick={viewSignUp}>Create new</span></p>
                                <p style={{ textAlign: "center", marginBottom: "0px" }}><span style={{ textDecoration: "none", color: "#34b880", cursor: "pointer" }} onClick={viewPincode}>I'm a Guest User</span></p>
                            </>) : null}

                            {view === "signup" ? (<>
                                <p style={{ textAlign: "center", fontSize: "18px" }}>Sign up</p>
                                <Form id="signup" layout="inline">
                                    <Form.Item className="form-input-50"
                                        rules={[{ required: true, message: 'Enter first name!' }]}
                                        name="firstname"
                                    >
                                        <Input placeholder="First Name" />
                                    </Form.Item>
                                    <Form.Item className="form-input-50"
                                        rules={[{ required: true, message: 'Enter last name!' }]}
                                        name="lastname"
                                    >
                                        <Input placeholder="Last Name" />
                                    </Form.Item>
                                    <Form.Item className="form-input-100"
                                        rules={[{ required: true, message: 'The input is not valid E-mail!' }]} name="email"
                                    >
                                        <Input type="email" placeholder="Email" />
                                    </Form.Item>
                                    <Form.Item className="website-form-btn">
                                        <Button type="primary" htmlType="submit" size="large" block style={{ marginTop: "0px", marginBottom: "0px" }}>
                                            Register
                                        </Button>
                                    </Form.Item>
                                </Form>
                                <p style={{ textAlign: "center", marginBottom: "4px" }}>Already have an account? <span style={{ textDecoration: "none", color: "#34b880", cursor: "pointer" }} onClick={viewSignIn}>Sign in</span></p>
                                <p style={{ textAlign: "center", marginBottom: "0px" }}><span style={{ textDecoration: "none", color: "#34b880", cursor: "pointer" }} onClick={viewPincode}>I'm a Guest User</span></p>
                            </>) : null}

                            {view === "companyRegister" ? (<>
                                <p style={{ textAlign: "center", fontSize: "18px" }}>Register my Company</p>
                                <Form id="companyRegister" layout="inline">
                                    <Form.Item className="form-input-50"
                                        rules={[{ required: true, message: 'Enter company name!' }]}
                                        name="companyname"
                                    >
                                        <Input placeholder="Company Name" value="companyName" onChange={e => setcompanyName(e.target.value)} />
                                    </Form.Item>
                                    <Form.Item className="form-input-50"
                                        rules={[{ required: true, message: 'Enter username!' }]} name="username"
                                    >
                                        <Input type="text" placeholder="Username" value="userName" onChange={e => setuserName(e.target.value)} />
                                    </Form.Item>
                                    <Form.Item className="form-input-100"
                                        rules={[{ required: true, message: 'The input is not valid E-mail!' }]} name="email"
                                    >
                                        <Input type="email" placeholder="Email" value="email" onChange={e => setemail(e.target.value)} />
                                    </Form.Item>
                                    <Form.Item className="form-input-50"
                                        rules={[{ required: true, message: 'Enter mobile number!' }]}
                                        name="mobile"
                                    >
                                        <Input placeholder="Mobile Number" value="mobileNumber" onChange={e => setmobileNumber(e.target.value)} />
                                    </Form.Item>
                                    <Form.Item className="form-input-50"
                                        rules={[{ required: true, message: 'Enter Contact Person Name!' }]}
                                        name="contactperson"
                                    >
                                        <Input placeholder="Contact Person Name" value="contactPerson" onChange={e => setcontactPerson(e.target.value)} />
                                    </Form.Item>
                                    <Form.Item className="website-form-btn">
                                        <Button type="primary" htmlType="submit" onClick={registerMyCompany} size="large" block style={{ marginTop: "0px", marginBottom: "0px" }}>
                                            Register
                                        </Button>
                                    </Form.Item>
                                </Form>
                                <p style={{ textAlign: "center", marginBottom: "4px" }}>Already have an account? <span style={{ textDecoration: "none", color: "#34b880", cursor: "pointer" }} onClick={viewSignIn}>Sign in</span></p>
                                <p style={{ textAlign: "center", marginBottom: "0px" }}><span style={{ textDecoration: "none", color: "#34b880", cursor: "pointer" }} onClick={viewPincode}>I'm a Guest User</span></p>
                            </>) : null}
                        </Card>
                        <img className="fd-card-logo" alt="" src="/gallery/Fandashtic-logo.svg" />
                    </div>
                </Col>
            </Row>

            <Row className="signin-button">
                <Col>
                    <Button type="primary">
                        <span onClick={viewSignIn}>{view === "pincode" ? (<>Sign in</>) : null}</span>
                        <span onClick={viewSignUp}>{view === "signin" ? (<>Sign up</>) : null}</span>
                        <span onClick={viewPincode}>{view === "signup" ? (<>Guest User</>) : null}</span>
                        <span onClick={viewPincode}>{view === "companyRegister" ? (<>Guest User</>) : null}</span>
                    </Button>
                    <Button className="register-btn" type="primary">
                        <span onClick={viewCompanySignUp}>Register</span>
                    </Button>
                </Col>
            </Row>

        </CustomScrollbars>
    )
}

export default WebSite
