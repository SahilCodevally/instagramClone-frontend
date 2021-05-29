import Link from "next/link";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { Login as LoginForm } from "@codevallyorg/react-components";

import Loading from "../../../components/loading";
import AuthLayout from "../../../components/layout/Auth";
import * as authActions from "../../../store/auth/actions";
import { loginSchema } from "../../../schema/login/schema";

function Login(props) {
  const router = useRouter();

  const onSubmitHandler = (values) => {
    try {
      const loginData = {
        userName: values.username,
        password: values.password,
      };
      // Call login action
      props.login(loginData);
    } catch (err) {
      console.log({ err });
    }
  };

  if (props.isAuth) {
    setTimeout(() => {
      router.push("/");
    }, 2000);
    return <Loading />;
  }

  return (
    <AuthLayout>
      <div className="login-conatainer">
        <div className="login-div">
          <h1>Instagram Clone</h1>
          <div className="form-container">
            <LoginForm
              togglePassword={true}
              onSubmit={onSubmitHandler}
              labels={{ username: "", password: "", login: "Sign in" }}
              schema={loginSchema}
            />
          </div>
        </div>
        <div className="signup">
          <div>
            <p>
              Don't have account?{" "}
              <Link href={{ pathname: "/accounts/signup" }}>
                <span>Sign up</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}

// Map state to props
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    loading: state.auth.loading,
  };
};

// Map dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    login: (values) => dispatch(authActions.login(values)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
