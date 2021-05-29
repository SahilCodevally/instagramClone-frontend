import { useEffect } from "react";
import { useRouter } from "next/router";
import { connect } from "react-redux";

import Loading from "../components/loading";
import Profile from "../components/profile/Profile";
import HomeLayout from "../components/layout/Home";
import * as userActions from "../store/user/actions";
import Tags from "../components/profile/Tags";
import PostsContainer from "../components/profile/Post";

const User = (props) => {
  const { query, isReady } = useRouter();
  const { userName } = query;
  const { user, isAuth, error, loading, initState, fetchUserData } = props;

  if (!isAuth) {
    router.push("/accounts/login");
    return <Loading />;
  }

  useEffect(() => {
    if (isReady) {
      // Call fetch user data function
      fetchUserData(userName);
    }
  }, [userName]);

  useEffect(() => {
    // Clean up function
    return () => {
      initState();
    };
  }, []);

  if (error && error.statusCode === 401) {
    // Logout from web-app
    props.logout();

    // Redirect to login page
    router.replace("/accounts/login");
  }

  if (loading || !isReady) {
    return <Loading />;
  }

  return (
    <HomeLayout>
      <div className="user-container">
        <Profile user={user} />
        <Tags userName={userName} />
        <PostsContainer posts={user?.posts} />
      </div>
    </HomeLayout>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    error: state.user.error,
    isAuth: state.auth.isAuth,
    loading: state.user.loading,
  };
};

// Map dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    initState: () => dispatch(userActions.userInit()),
    fetchUserData: (userName) => dispatch(userActions.fetchUserData(userName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
