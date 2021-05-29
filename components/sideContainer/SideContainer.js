import Link from "next/link";
import Footer from "../footer";

function SideContainer(props) {
  const { user } = props;

  let profileImage = "/user-img.jpg";

  if (user?.profileImage?.url) {
    profileImage = user.profileImage.url;
  }

  return (
    <div className="side-container">
      <div className="user-detail">
        <div className="user-image-div">
          <Link href={`/${user.userName}`}>
            <img alt="user-img" src={profileImage} width="56px" height="56px" />
          </Link>
        </div>
        <div className="user-name-div">
          <div className="username">
            <Link href={`/${user.userName}`}>{user?.userName}</Link>
          </div>
          <div className="fullname">{user?.fullName}</div>
        </div>
      </div>
      <div className="suggestions">
        <div className="title-info">
          <div className="title">Suggestions For You</div>
          <div className="see-more">
            <Link href="/">See All</Link>
          </div>
        </div>
        <div className="suggestions-container"></div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default SideContainer;
