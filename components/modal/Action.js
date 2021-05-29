import { connect } from "react-redux";
import { useRouter } from "next/router";
import { Modal, Container, Row } from "react-bootstrap";

import config from "../../config";
import { notify } from "../../utils/toster";
import { copyToClipboard } from "../../utils/general";
import * as userActions from "../../store/user/actions";
import * as postsActions from "../../store/posts/actions";
import * as modalActions from "../../store/modal/actions";

function ActionModal(props) {
  const router = useRouter();
  const {
    show,
    user,
    author,
    postId,
    closeModal,
    isFollowing,
    unfollow,
    openDeleteModal,
    openUnfollowModal,
  } = props;

  // Copy link function
  const copyLink = (e) => {
    e.preventDefault();

    const postUrl = `${config.DOMAIN_URL}/post/${postId}`;

    // Clipboard funtion
    copyToClipboard(postUrl);

    // Show notification
    notify("success", "Link copied to clipboard.");

    // Close modal
    closeModal();
  };

  // Go to post handler
  const goToPostHanlder = () => {
    // Close modal
    closeModal();

    // Go to post
    router.push(`/post/${postId}`);
  };

  // Unfollow handler function
  const unfollowHandler = () => {
    const authorData = { ...author };

    // Close modal
    closeModal();

    setTimeout(() => {
      // Open unfollow modal
      openUnfollowModal(authorData);
    }, 300);
  };

  // Delete handler function
  const deleteHandler = () => {
    const post_id = postId;

    // Close modal
    closeModal();

    setTimeout(() => {
      // Open delete modal
      openDeleteModal(post_id);
    }, 500);
  };

  return (
    <Modal centered show={show} onHide={closeModal}>
      <Modal.Body>
        <Container>
          {user?._id !== author?._id && isFollowing && (
            <div>
              <Row onClick={unfollowHandler}>
                <div className="unfollow-and-delete">Unfollow</div>
              </Row>
              <hr />
            </div>
          )}
          {user?._id === author?._id && (
            <div>
              <Row onClick={deleteHandler}>
                <div className="unfollow-and-delete">Delete</div>
              </Row>
              <hr />
            </div>
          )}
          {router.pathname !== "/post/[id]" && (
            <div>
              <Row onClick={goToPostHanlder}>
                <div>Go to post</div>
              </Row>
              <hr />
            </div>
          )}
          <Row onClick={copyLink}>
            <div>Copy Link</div>
          </Row>
          <hr />
          <Row onClick={closeModal}>
            <div>Cancel</div>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    show: state.modal.actionModal.show,
    postId: state.modal.actionModal.postId,
    author: state.modal.actionModal.author,
    isFollowing: state.modal.actionModal.isFollowing,
  };
};

// Map dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(modalActions.closeActionModal()),
    openDeleteModal: (postId) => dispatch(modalActions.openDeleteModal(postId)),
    openUnfollowModal: (author) =>
      dispatch(modalActions.openUnfollowModal(author)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionModal);
