import React, { useState, useEffect } from 'react';
import { Row, Col, Carousel, Card, Form, Input, Button, message } from 'antd';
import { useHistory } from "react-router-dom";
import CustomScrollbars from 'util/CustomScrollbars';
import './main.css';
import { AddCompany } from 'api/Company/CompanyController';
import { IsUserValid } from 'api/Shared/Master/UserController';
import { UserType } from 'api/Shared/Constant/Enum'
import { IsHasValue } from 'api/Shared/Util';
const WebSite = () => {
    const history = useHistory()
    const [view, SetView] = useState('pincode');

    //#region Register Company
    const [companyName, setcompanyName] = useState('');
    const [email, setemail] = useState('');
    const [mobileNumber, setmobileNumber] = useState('');
    const [contactPerson, setcontactPerson] = useState('');
    //#endregion Register Company

    //#region Login

    const [user_name, setuser_name] = useState('');
    const [password, setpassword] = useState('');
    const [userSession, setuserSession] = useState({});
    const [pincode, setPincode] = useState(0);
    //#endregion Login

    const viewPincode = () => {
        SetView("pincode");
    }

    const viewSignIn = () => {
        SetView("signin")
    }

    const SignIn = () => {
        IsUserValid(user_name, password, (res, err) => {
            if (res.Status === 200) {
                let user = res.data;
                setuserSession(user);
                let path = GetRoutePath(user);
                history.push(path);
            }
        });
    }

    const GetRoutePath = (authUser) => {
        if (IsHasValue(authUser) && IsHasValue(authUser.UserType)) {
            switch (authUser.UserType) {
                case UserType.SUPER_ADMIN:
                    return '/company/dashboard';
                case UserType.COMPANY_ADMIN:
                    return '/company/dashboard';
                case UserType.STORE_ADMIN:
                    return '/store/dashboard';
                case UserType.STORE_STAFF:
                    return '/store/dashboard';
                case UserType.CONSUMER:
                    return '/consumer/dashboard';
                case UserType.SUPPORT:
                    return '/consumer/dashboard';
                default:
                    return '/company/dashboard';
            }
        }
        else {
            return '/';
        }
    }

    const viewSignUp = () => {
        SetView("signup")
    }

    const viewCompanySignUp = () => {
        SetView("companyRegister")
    }

    const consumer = () => {        
        if (pincode.length === 6) {
            history.push('/consumer/dashboard');
        } else {
            alert('Enter Valid Pincode');
        }
    }

    const registerMyCompany = () => {
        let newCompany = {
            company_name: companyName,
            user_name: email,
            email_id: email,
            mobilenumber: mobileNumber,
            contactperson: contactPerson
        };

        AddCompany(newCompany, (res, err) => {
            if (res && res.data && res.data.Status === 200) {
                SetView("signin");
            }
            else if (res && res.data && res.data.Status !== 200) {
                alert(res.data.data);
            }
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
            <Row className="loginCard" justify='center'>
                <Col lg={9} md={14} xs={22}>
                    <div>
                        <Card title="GROIDS" bordered={false}>
                            {view === "pincode" ? (<>
                                <p style={{ textAlign: "center", fontSize: "18px" }}>Groceries delivered in as little as 1 hour</p>
                                <Form id="pincode">
                                    <Form.Item>
                                        <Input type="number" placeholder="Enter Pin Code" onChange={e => setPincode(e.target.value)} /><i className="icon icon-sent gx-mr-2" />
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
                                        <Input type="text" placeholder="User Name" value="user_name" onChange={e => setuser_name(e.target.value)} />
                                    </Form.Item>
                                    <Form.Item
                                        rules={[{ required: true, message: 'Enter password!' }]}
                                        name="password"
                                    >
                                        <Input type="password" placeholder="Password" value="password" onChange={e => setpassword(e.target.value)} />
                                    </Form.Item>
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" size="large" onClick={SignIn} block style={{ marginTop: "0px", marginBottom: "0px" }}>
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
                                    <Form.Item className="form-input-100"
                                        rules={[{ required: true, message: 'Enter company name!' }]}
                                        name="companyname"
                                    >
                                        <Input placeholder="Company Name" value="companyName" onChange={e => setcompanyName(e.target.value)} />
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
                    {view === "pincode" ? (<Button type="primary" onClick={viewSignIn}>Sign in</Button>) : null}
                    {view === "signin" ? (<Button type="primary" onClick={viewSignUp}>Sign up</Button>) : null}
                    {view === "signup" || view === "companyRegister" ? (<Button type="primary" onClick={viewPincode}>Guest User</Button>) : null}
                    <Button className="register-btn" onClick={viewCompanySignUp}>Register</Button>
                </Col>
            </Row>

        </CustomScrollbars>
    )
}

export default WebSite;