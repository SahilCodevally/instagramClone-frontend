function ActionButton(props) {
  const { post, buttonClick } = props;
  return (
    <div className="post-action">
      <button onClick={(e) => buttonClick(e, post)}>
        <div className="action-div">
          <div className="svg-container">
            <svg
              aria-label="More options"
              className="_8-yf5 "
              fill="#262626"
              height="16"
              viewBox="0 0 48 48"
              width="16"
            >
              <circle
                clipRule="evenodd"
                cx="8"
                cy="24"
                fillRule="evenodd"
                r="4.5"
              ></circle>
              <circle
                clipRule="evenodd"
                cx="24"
                cy="24"
                fillRule="evenodd"
                r="4.5"
              ></circle>
              <circle
                clipRule="evenodd"
                cx="40"
                cy="24"
                fillRule="evenodd"
                r="4.5"
              ></circle>
            </svg>
          </div>
        </div>
      </button>
    </div>
  );
}

export default ActionButton;
