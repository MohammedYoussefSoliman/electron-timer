import { FC, useState, MouseEvent, useEffect, Dispatch } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import useHTTP from "../hooks/useHTTP";
import { Button } from "@material-ui/core";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { LogoIcon, Spinner } from "../assets/SVG";
import { Checkbox, PasswordInput, TextInput } from "./formComponents";
import { setLogin, setUser } from "../states/action/actions";
import { UserActionTypes } from "../states/types/types";
import { useStyles } from "../helpers/styles";
import "./layout.scss";

const Login: FC = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const [resError, setResError] = useState<string | undefined>(undefined);
  const handleResError = (err: string | undefined) => {
    setResError(err);
  };
  const validationSchema = yup.object({
    username: yup.string().required("This field is required"),
    password: yup.string().required("This field is required"),
  });
  const history = useHistory();
  const dispatch = useDispatch<Dispatch<UserActionTypes>>();

  const { call } = useHTTP<any>({
    endPoint: "/login",
    method: "POST",
  });

  const handleLogin = async (
    email: string,
    password: string,
    remember: boolean,
    setSubmitting: (arg: boolean) => void,
    handleResError: (arg: string | undefined) => void
  ) => {
    try {
      setSubmitting(true);
      const { status, data } = await call({ email, password });
      if (status === 200) {
        handleResError(undefined);
        if (remember) {
          localStorage.setItem("token", data.access_token);
        }
        dispatch(setLogin({ token: data.access_token }));
        let currentUser = {
          id: data.user.id,
          first_name: data.user.first_name,
          middle_name: data.user.middle_name
            ? data.user.middle_name
            : undefined,
          last_name: data.user.last_name,
          email: data.user.email,
          role: data.user.roles,
          avatar: data.user.photo ? data.user.photo : undefined,
        };
        dispatch(setUser(currentUser));
        history.push("/select");
      } else if (status !== 200) {
        handleResError("Email address or password is incorrect");
      }
    } catch (e) {
      console.log(e);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="layout">
      <div className="layout--login">
        <div className="login--logo">
          <LogoIcon width={200} />
        </div>
        <div className="login--form">
          <Formik
            initialValues={{
              username: "",
              password: "",
              remember: false,
            }}
            validationSchema={validationSchema}
            onSubmit={(data, { setSubmitting }) => {
              handleLogin(
                data.username,
                data.password,
                data.remember,
                setSubmitting,
                handleResError
              );
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <TextInput
                  name="username"
                  label="Username or email"
                  resError={resError}
                />
                <PasswordInput
                  label="Password"
                  name="password"
                  showPassword={showPassword}
                  handleShowPassword={() => setShowPassword(!showPassword)}
                  handleMouseDownPassword={handleMouseDownPassword}
                  resError={resError}
                />
                <div className="action--group">
                  <div className="action--group__item">
                    <Checkbox name="remember" type="checkbox" />
                    <h5 className="action--label">Remember me</h5>
                  </div>
                  <div className="action--group__item">
                    <h5 className="action--label">
                      <a href="#">Register</a>
                    </h5>
                  </div>
                </div>
                <div className="submit--group">
                  <Button className={classes.btn} type="submit">
                    {isSubmitting && (
                      <div className="login--spinner">
                        <Spinner size="24" />
                      </div>
                    )}
                    <span>Log in</span>
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
