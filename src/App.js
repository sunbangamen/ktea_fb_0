import React, { useReducer, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { authService } from "./services/firebase";

import Chat from "./pages/Chat";
// import SignUp from "./pages/SignUp";
// import Login from "./pages/Login";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
// import LineChart from "./pages/LineChart";
import Chart from "./pages/Chart";
import ChartOne from "./pages/ChartOne";
import SignIn from "./material/sign/SignIn";
import SignUp from "./material/sign/SignUp";

const initialState = {
  authenticated: false,
  loading: true,
};

function reducer(state, action) {
  switch (action.type) {
    case "GET_USER":
      return { ...state, authenticated: action.result };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { authenticated } = state;

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: "GET_USER",
          result: true,
        });
      } else {
        dispatch({
          type: "GET_USER",
          result: false,
        });
      }
    });
  }, []);

  return (
    <Router>
      <Switch>
        <PrivateRoute path="/chat" authenticated={authenticated} component={Chat} />
        <PrivateRoute path="/chart" authenticated={authenticated} component={ChartOne} />
        {/* <PublicRoute path="/signup" authenticated={authenticated} component={SignUp} /> */}
        <PublicRoute path="/signup" authenticated={authenticated} component={SignUp} />
        {/* <PublicRoute path={["/", "/login"]} authenticated={authenticated} component={Login} /> */}
        <PublicRoute path={["/", "/login"]} authenticated={authenticated} component={SignIn} />
      </Switch>
    </Router>
  );
}

export default App;
