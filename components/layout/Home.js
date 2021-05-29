import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Footer from "../footer";
import Navbar from "../navbar/Navbar";
import ActionModal from "../modal/Action";
import DeleteAndUnfollow from "../modal/DeleteAndUnfollow";

function HomeLayout(props) {
  const { pathname } = useRouter();
  const [hide, setHide] = useState(false);

  // const checkPath = () => {
  //   const paths = ['/userName', '/post/[id]'];
  //   if (paths.includes(pathname)) {

  //   }
  // }

  const updateHideState = () => {
    if (window.innerWidth > 999 && pathname === "/") {
      // Set hide state
      setHide(true);
    } else if (window.innerWidth <= 999 && pathname === "/") {
      // Set hide state
      setHide(false);
    }
  };

  useEffect(() => {
    if (pathname === "/") {
      // Set hide state
      setHide(true);
    }
  }, [pathname]);

  useEffect(() => {
    // Add Resize event listener
    window.addEventListener("resize", updateHideState);

    return () => {
      // Remove resize event listener
      window.removeEventListener("resize", updateHideState);
    };
  }, []);

  return (
    <section className="layout-container">
      {/* Navigation layout */}
      <Navbar />

      {props.children}

      {/* Footer layout */}
      {!hide && (
        <div className="static-footer">
          <Footer />
        </div>
      )}

      {/* action modal */}
      <ActionModal />

      {/* delete and unfollow modal */}
      <DeleteAndUnfollow />
    </section>
  );
}

export default HomeLayout;
