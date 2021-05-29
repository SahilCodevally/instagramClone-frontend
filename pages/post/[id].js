import { useEffect } from "react";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import Link from "next/link";
import moment from "moment";
import { Carousel } from "react-responsive-carousel";

import Loading from "../../components/loading";
import HomeLayout from "../../components/layout/Home";
import * as postsAction from "../../store/posts/actions";
import * as modalAction from "../../store/modal/actions";
import ActionButton from "../../components/button/ActionButton";

const Post = (props) => {
  const { query, isReady } = useRouter();
  const { post, isAuth, error, loading, getPost, initState, openModal } = props;

  if (!isAuth) {
    router.push("/accounts/login");
    return <Loading />;
  }

  // Action click handler function
  const actionClickHandler = (e, post) => {
    e.preventDefault();

    const postId = post._id;
    const author = post.author;
    const isFollowing = post.isFollowing;

    // Open action modal
    openModal(author, postId, isFollowing);
  };

  useEffect(() => {
    if (isReady) {
      // Fetch post
      getPost(query.id);
    }
  }, [query.id]);

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

  if (loading) {
    return <Loading />;
  }

  let profileImage = "/user-img.jpg";
  if (post?.author?.profileImage?.url) {
    profileImage = post.author.profileImage.url;
  }

  return (
    <HomeLayout>
      <div className="post-view">
        <div className="post-div">
          <article className="single-post-article">
            <header className="post-header">
              <div className="author-image">
                <Link href={`/${post?.author?.userName}`}>
                  <img
                    alt="author-img"
                    src={profileImage}
                    width="32px"
                    height="32px"
                  />
                </Link>
              </div>
              <div className="author-detail">
                <div className="author-username">
                  <Link href={`/${post?.author?.userName}`}>
                    <span>{post?.author?.userName}</span>
                  </Link>
                </div>
              </div>
            </header>
            <ActionButton post={post} buttonClick={actionClickHandler} />
            <div className="media-container">
              <Carousel showArrows={true} showThumbs={false} showStatus={false}>
                {post?.images?.map((image) => (
                  <div>
                    <img alt={image.key} src={image.url} />
                  </div>
                ))}
              </Carousel>
            </div>
            <div className="post-detail">
              <div className="detail">
                <ul>
                  <div>
                    <li>
                      <div className="detail-container">
                        <div className="author-image">
                          <Link href={`/${post?.author?.userName}`}>
                            <img
                              alt="author-img"
                              src={profileImage}
                              width="32px"
                              height="32px"
                            />
                          </Link>
                        </div>
                        <div className="post-info">
                          <h2>
                            <div className="author-username">
                              <Link href={`/${post?.author?.userName}`}>
                                <span>{post?.author?.userName}</span>
                              </Link>
                            </div>
                          </h2>
                          <span>{post?.detail}</span>
                          <div className="time-stamp">
                            {moment(post?.createdAt).startOf("hour").fromNow()}
                          </div>
                        </div>
                      </div>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
    </HomeLayout>
  );
};

const mapStateProps = (state) => {
  return {
    post: state.post.post,
    error: state.post.error,
    isAuth: state.auth.isAuth,
    loading: state.post.loading,
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    initState: () => dispatch(postsAction.postsInit()),
    getPost: (id) => dispatch(postsAction.fetchSinglePost(id)),
    openModal: (author, postId, isFollowing) =>
      dispatch(modalAction.openActionModal(author, postId, isFollowing)),
  };
};

export default connect(mapStateProps, mapDispatchProps)(Post);
