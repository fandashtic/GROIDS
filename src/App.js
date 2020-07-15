import React, { useContext, useReducer, Suspense } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
//import { ConnectedRouter } from 'connected-react-router'
import Context from "store/context";
import reducer from "store/reducer";
import "assets/vendors/style";
import MainApp from "containers/App";

import { GetAllUsers } from './api/Tables/UserReposidery';


// AWS Amplify Config
import Amplify, { API } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure({
  "aws_project_region": "us-east-2",
    "aws_cognito_identity_pool_id": "us-east-2:70e15111-8865-450d-8bc3-4df6c92d6334",
    "aws_cognito_region": "us-east-2",
    "aws_user_pools_id": "us-east-2_RsQecbeJo",
    "aws_user_pools_web_client_id": "sf109f853n4lh3sjq6nhv4rqd",
    "oauth": {},
    "aws_cloud_logic_custom": [
        {
            "name": "groids",
            "endpoint": "https://z2j43cnhu5.execute-api.us-east-2.amazonaws.com/dev",
            "region": "us-east-2"
        },
        {
            "name": "api",
            "endpoint": "https://qzvkkrr9mi.execute-api.us-east-2.amazonaws.com/dev",
            "region": "us-east-2"
        }
    ]
});

function getData() { 
  const apiName = 'api';
  const path = '/groids';
  const myInit = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return API.get(apiName, path, myInit);
}


const createBrowserHistory = require('history').createBrowserHistory;
export const history = createBrowserHistory();

const App = () => {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);

  // (async function () {
  //   const response = await getData();
  //   console.log(response);
  // })();

  (async function () {
    let filter = 
    {
      "is_deleted": false
    }
    await GetAllUsers((data, err) =>{
      console.log(data);
    }, filter);
    
  })();

  return (
    <BrowserRouter>
      <Context.Provider value={{ state, dispatch }} >
        <Switch>
          <Route path="/" component={MainApp} />
        </Switch>
      </Context.Provider>
    </BrowserRouter>
  )
}


export default App;
