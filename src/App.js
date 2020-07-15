import React, { useContext, useReducer, Suspense } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
//import { ConnectedRouter } from 'connected-react-router'
import Context from "store/context";
import reducer from "store/reducer";
import "assets/vendors/style";
import MainApp from "containers/App";

// AWS Amplify Config
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

const createBrowserHistory = require('history').createBrowserHistory;
export const history = createBrowserHistory();

const App = () => {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);

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
