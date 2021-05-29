import { useEffect } from "react";
import { connect } from "react-redux";
import { useRouter } from "next/router";

import Posts from "../components/posts";
import Loading from "../components/loading";
import HomeLayout from "../components/layout/Home";
import * as authActions from "../store/auth/actions";
import * as postActions from "../store/posts/actions";
import SideContainer from "../components/sideContainer/SideContainer";

function Home(props) {
  const router = useRouter();
  const { error, user, posts, isAuth, fetchPosts, initState, loading } = props;

  if (!isAuth) {
    router.push("/accounts/login");
    return <Loading />;
  }

  useEffect(() => {
    // Fetch posts
    fetchPosts();

    return () => {
      // Clear posts store on unmount
      initState();
    };
  }, []);

  if (error && error.statusCode === 401) {
    // Logout from web-app
    props.logout();

    // Redirect to login page
    router.replace("/accounts/login");
  }

  if (loading) {
    return <Loading />;
  }

  console.log("main feed page");

  return (
    <>
      <HomeLayout>
        <main className="home-main">
          <section className="home-section">
            <div className="post-container">
              <Posts posts={posts} />
            </div>
            <SideContainer user={user} />
          </section>
        </main>
      </HomeLayout>
    </>
  );
}

// Map state to props
const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    posts: state.post.posts,
    error: state.post.error,
    isAuth: state.auth.isAuth,
    loading: state.post.loading,
  };
};

// Map dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(authActions.logout()),
    initState: () => dispatch(postActions.postsInit()),
    fetchPosts: () => dispatch(postActions.fetchPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
