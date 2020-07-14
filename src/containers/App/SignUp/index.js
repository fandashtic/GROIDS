import React, {useEffect} from "react";
import {Button, Checkbox, Input, message,Form} from "antd";
import Icon from '@ant-design/icons';
//import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory} from "react-router-dom";
import CircularProgress from "components/CircularProgress/index";

import IntlMessages from "util/IntlMessages";
const FormItem = Form.Item;

const SignUp =()=> {
    const history = useHistory();
    const [form] = Form.useForm();
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };
      const onFinish = values => {
        console.log("finish",values)
        //dispatch(showAuthLoader());
       // dispatch(userSignIn(values));
      };
      return (
        <div className="gx-app-login-wrap">
      <div className="gx-app-login-container">
        <div className="gx-app-login-main-content">
          <div className="gx-app-logo-content">
            <div className="gx-app-logo-content-bg">
              <img src={"https://via.placeholder.com/272x395"} alt='Neature'/>
            </div>
            <div className="gx-app-logo-wid">
              <h1><IntlMessages id="app.userAuth.signUp"/></h1>
              <p><IntlMessages id="app.userAuth.bySigning"/></p>
              <p><IntlMessages id="app.userAuth.getAccount"/></p>
            </div>
            <div className="gx-app-logo">
              <img alt="example" src={require("assets/images/logo.png")}/>
            </div>
          </div>

          <div className="gx-app-login-content">
            <Form
              initialValues={{ remember: true }}
              name="basic"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className="gx-signin-form gx-form-row0">
              <FormItem rules={[{required: true, message: 'Please input your username!'}]} name="Username">
                  <Input placeholder="Username"/>
              </FormItem>

              <FormItem name="email" rules={[{
              required: true, type: 'email', message: 'The input is not valid E-mail!',
              }]}>
                  <Input placeholder="Email"/>
              </FormItem>
              <FormItem name="password"
                        rules={[{required: true, message: 'Please input your Password!'}]}>
                  <Input type="password" placeholder="Password"/>
              </FormItem>
              <FormItem  name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
                <Link className="gx-login-form-forgot" to="/custom-views/user-auth/forgot-password">Forgot password</Link>
              </FormItem>
              <FormItem>
                <Button type="primary" className="gx-mb-0" htmlType="submit">
                  <IntlMessages id="app.userAuth.signUp"/>
                </Button>
                <span><IntlMessages id="app.userAuth.or"/></span> <Link to="/signin"><IntlMessages
                id="app.userAuth.signIn"/></Link>
              </FormItem>
            </Form>
          </div>
          {/* {loader &&
          <div className="gx-loader-view">
            <CircularProgress/>
          </div>
          }
          {showMessage &&
          message.error(alertMessage)} */}
        </div>
      </div>
    </div>
  );
}
export default SignUp
