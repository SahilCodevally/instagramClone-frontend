import Link from "next/link";
import { connect } from "react-redux";
import { Form, Field } from "react-final-form";
import { Text } from "@codevallyorg/react-components";

import { yupValidator } from "../../../utils/general";
import AuthLayout from "../../../components/layout/Auth";
import * as authActions from "../../../store/auth/actions";
import { signupSchema } from "../../../schema/signup/schema";

function Signup(props) {
  const onSubmitHandler = async (values) => {
    try {
      // Call login action
      props.signup(values);
    } catch (err) {
      console.log({ err });
    }
  };

  return (
    <AuthLayout>
      <div className="signup-conatainer">
        <div className="signup-div">
          <h1>Instagram Clone</h1>
          <div className="form-container">
            <Form
              onSubmit={onSubmitHandler}
              validate={(value) => yupValidator(value, signupSchema)}
              render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <Field name="email" type="email">
                      {({ input, meta }) => (
                        <Text
                          {...input}
                          type="email"
                          placeholder="Email"
                          error={
                            meta.touched && meta.error ? meta.error : undefined
                          }
                        />
                      )}
                    </Field>
                  </div>
                  <div className="form-group">
                    <Field name="fullName" type="text">
                      {({ input, meta }) => (
                        <Text
                          {...input}
                          type="text"
                          placeholder="Full name"
                          error={
                            meta.touched && meta.error ? meta.error : undefined
                          }
                        />
                      )}
                    </Field>
                  </div>
                  <div className="form-group">
                    <Field name="userName" type="text">
                      {({ input, meta }) => (
                        <Text
                          {...input}
                          type="text"
                          placeholder="Username"
                          error={
                            meta.touched && meta.error ? meta.error : undefined
                          }
                        />
                      )}
                    </Field>
                  </div>
                  <div className="form-group">
                    <Field name="password" type="password">
                      {({ input, meta }) => (
                        <Text
                          {...input}
                          type="password"
                          placeholder="Password"
                          error={
                            meta.touched && meta.error ? meta.error : undefined
                          }
                        />
                      )}
                    </Field>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary mx-auto w-100 mt-3"
                  >
                    Sign up
                  </button>
                </form>
              )}
            />
          </div>
        </div>
        <div className="login">
          <div>
            <p>
              Have an account?{" "}
              <Link href={{ pathname: "/accounts/login" }}>
                <span>Log in</span>
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
    loading: state.auth.loading,
  };
};

// Map dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    signup: (values) => dispatch(authActions.signup(values)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
