import { FC, useState, useEffect, Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import AppTheme from "./theme";
import { Route, Switch } from "react-router-dom";
import { DashboardScreen, LoginScreen, SelectScreen } from "./screens";
import { setLogin } from "./states/action/actions";
import { RootState } from "./states";
import { UserActionTypes } from "./states/types/types";

const App: FC = () => {
  const storedToken = localStorage.getItem("token");
  const { token } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<Dispatch<UserActionTypes>>();

  useEffect(() => {
    if (Boolean(storedToken)) {
      if (typeof storedToken === "string") {
        dispatch(setLogin({ token: storedToken }));
      }
    }
  }, [token]);

  let routs;
  if (token) {
    routs = (
      <Switch>
        <Route path="/" exact component={() => <DashboardScreen />} />
        <Route path="/select" component={SelectScreen} />
      </Switch>
    );
  } else {
    routs = (
      <Switch>
        <Route path="/" component={() => <LoginScreen />} />
      </Switch>
    );
  }
  return <AppTheme>{routs}</AppTheme>;
};

export default App;
