import React from "react";
import defaultImage from "../images/default-profile-image.jpg";
const UserAside = ({
  currentUser: {
    user: { profileImageUrl, username },
  },
}) => {
  return (
    <div className="col-sm-2 mt-3">
      {/* 
      <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
     */}
      <aside className="user-aside">
        <div className="card" width="18rem">
          <img
            className="card-img-top"
            src={
              `${window.location.origin}/uploads/${profileImageUrl}` ||
              defaultImage
            }
            alt={username}
            width="200"
            height="200"
          />
          <div className="card-body">
            <h3 className="card-title text-center">{username}</h3>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default UserAside;
