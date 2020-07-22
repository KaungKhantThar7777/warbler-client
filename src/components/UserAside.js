import React from "react";
import defaultImage from "../images/default-profile-image.jpg";
const UserAside = ({
  currentUser: {
    user: { profileImageUrl, username },
  },
}) => {
  function toBase64(arr) {
    //arr = new Uint8Array(arr) if it's an ArrayBuffer
    return btoa(
      arr.reduce((data, byte) => data + String.fromCharCode(byte), "")
    );
  }
  return (
    <div className="col-sm-1 mt-3">
      <aside className="user-aside">
        <img
          style={{ borderRadius: "50%" }}
          src={
            profileImageUrl
              ? `data:image/jpg;base64, ${toBase64(profileImageUrl.data)}`
              : defaultImage
          }
          alt={username}
          width="150"
          height="150"
        />
        <div>
          <h3 className="text-center">{username}</h3>
        </div>
      </aside>
    </div>
  );
};

export default UserAside;
