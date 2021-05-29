import { useRef } from "react";

function Profile(props) {
  const fileRef = useRef(null);
  const { user } = props;

  let profileImage = "/user-img.jpg";
  if (user?.profileImage?.url) {
    profileImage = user.profileImage.url;
  }

  const onFilechange = (e) => {
    console.log(e.target.files);
  };

  const onBtnClick = () => {
    fileRef.current.click();
  };

  return (
    <div className="profile-container">
      <header className="profile">
        <div className="image-container">
          <div className="image-div">
            <button onClick={onBtnClick}>
              <img
                src={profileImage}
                alt="user-image"
                width="100%"
                height="100%"
              />
            </button>
            <div>
              <form>
                <input
                  type="file"
                  accept="image/*"
                  ref={fileRef}
                  onChange={onFilechange}
                />
              </form>
            </div>
          </div>
        </div>
        <div className="detail-container">
          <div className="fullname-info">
            <h2>{user?.userName}</h2>
            <div className="setting">
              <button>
                <svg
                  aria-label="Options"
                  className="_8-yf5 "
                  fill="#262626"
                  height="24"
                  viewBox="0 0 48 48"
                  width="24"
                >
                  <path
                    clipRule="evenodd"
                    d="M46.7 20.6l-2.1-1.1c-.4-.2-.7-.5-.8-1-.5-1.6-1.1-3.2-1.9-4.7-.2-.4-.3-.8-.1-1.2l.8-2.3c.2-.5 0-1.1-.4-1.5l-2.9-2.9c-.4-.4-1-.5-1.5-.4l-2.3.8c-.4.1-.8.1-1.2-.1-1.4-.8-3-1.5-4.6-1.9-.4-.1-.8-.4-1-.8l-1.1-2.2c-.3-.5-.8-.8-1.3-.8h-4.1c-.6 0-1.1.3-1.3.8l-1.1 2.2c-.2.4-.5.7-1 .8-1.6.5-3.2 1.1-4.6 1.9-.4.2-.8.3-1.2.1l-2.3-.8c-.5-.2-1.1 0-1.5.4L5.9 8.8c-.4.4-.5 1-.4 1.5l.8 2.3c.1.4.1.8-.1 1.2-.8 1.5-1.5 3-1.9 4.7-.1.4-.4.8-.8 1l-2.1 1.1c-.5.3-.8.8-.8 1.3V26c0 .6.3 1.1.8 1.3l2.1 1.1c.4.2.7.5.8 1 .5 1.6 1.1 3.2 1.9 4.7.2.4.3.8.1 1.2l-.8 2.3c-.2.5 0 1.1.4 1.5L8.8 42c.4.4 1 .5 1.5.4l2.3-.8c.4-.1.8-.1 1.2.1 1.4.8 3 1.5 4.6 1.9.4.1.8.4 1 .8l1.1 2.2c.3.5.8.8 1.3.8h4.1c.6 0 1.1-.3 1.3-.8l1.1-2.2c.2-.4.5-.7 1-.8 1.6-.5 3.2-1.1 4.6-1.9.4-.2.8-.3 1.2-.1l2.3.8c.5.2 1.1 0 1.5-.4l2.9-2.9c.4-.4.5-1 .4-1.5l-.8-2.3c-.1-.4-.1-.8.1-1.2.8-1.5 1.5-3 1.9-4.7.1-.4.4-.8.8-1l2.1-1.1c.5-.3.8-.8.8-1.3v-4.1c.4-.5.1-1.1-.4-1.3zM24 41.5c-9.7 0-17.5-7.8-17.5-17.5S14.3 6.5 24 6.5 41.5 14.3 41.5 24 33.7 41.5 24 41.5z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <ul className="social-info">
            <li>
              <span>
                <span className="count">{user?.posts?.length}</span> posts
              </span>
            </li>
            <li>
              <span onClick={() => {}}>
                <span className="count">{user?.followers?.length}</span>{" "}
                followers
              </span>
            </li>
            <li>
              <span onClick={() => {}}>
                <span className="count">{user?.following?.length}</span>{" "}
                following
              </span>
            </li>
          </ul>
          <div className="username-detail-info">
            <h1>{user?.fullName}</h1>
            <br />
            <span>{user?.bio}</span>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Profile;
