import React, { useContext, useReducer} from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "assets/vendors/style";
import App from "./containers/App/index";

import Context from "appRedux/context";
import reducer from "appRedux/reducer";

const NextApp = () => {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <BrowserRouter>
     <Context.Provider value={{ state, dispatch }}>
        <Route path="/" component={App} />
      </Context.Provider>
    </BrowserRouter>
  )
}



export default NextApp;
