import { connect } from "react-redux";
import { useRouter } from "next/router";
import { Modal, Container, Row } from "react-bootstrap";

import * as userActions from "../../store/user/actions";
import * as postsActions from "../../store/posts/actions";
import * as modalActions from "../../store/modal/actions";

function DeleteAndUnfollow(props) {
  const {
    postId,
    author,
    unfollow,
    deletePost,
    showDeleteModal,
    showUnfollowModal,
    closeDeleteModal,
    closeUnfollowModal,
  } = props;

  // Close modal function
  const closeModal = () => {
    if (showDeleteModal) {
      // Close delete modal
      closeDeleteModal();
    } else {
      // Close unfollow modal
      closeUnfollowModal();
    }
  };

  let profileImage = "/user-img.jpg";
  if (showUnfollowModal && author?.profileImage?.url) {
    profileImage = author.profileImage.url;
  }

  // Delete click handler function
  const deleteClickHandler = () => {
    // Close modal
    closeModal();

    // Call delete post function
    deletePost(postId);
  };

  // Unfollow click handler function
  const unfollowClickHandler = () => {
    // Close modal
    closeModal();

    // Call unfollow function
    unfollow(author?._id);
  };

  return (
    <Modal
      centered
      onHide={closeModal}
      show={showDeleteModal || showUnfollowModal}
    >
      <Modal.Body>
        <Container>
          {showDeleteModal && (
            <div>
              <Row className="no-cursor">
                <div className="unfollow-and-delete">
                  Are you sure want to delete post?
                </div>
              </Row>
              <hr />
              <Row onClick={deleteClickHandler}>
                <div className="unfollow-and-delete">Delete</div>
              </Row>
            </div>
          )}
          {showUnfollowModal && (
            <div>
              <Row className="no-cursor">
                <div className="unfollow-user-img">
                  <img alt="user-img" src={profileImage} />
                </div>
                <div className="unfollow-text">
                  <div>Unfollow @{author?.userName}?</div>
                </div>
              </Row>
              <hr />
              <Row onClick={unfollowClickHandler}>
                <div className="unfollow-and-delete">Unfollow</div>
              </Row>
            </div>
          )}
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
    postId: state.modal.deleteModal.postId,
    author: state.modal.unfollowModal.author,
    showDeleteModal: state.modal.deleteModal.show,
    showUnfollowModal: state.modal.unfollowModal.show,
  };
};

// Map dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    unfollow: (authorId) => dispatch(userActions.unfollow(authorId)),
    deletePost: (postId) => dispatch(postsActions.postDelete(postId)),
    closeDeleteModal: () => dispatch(modalActions.closeDeleteModal()),
    closeUnfollowModal: () => dispatch(modalActions.closeUnfollowModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteAndUnfollow);
