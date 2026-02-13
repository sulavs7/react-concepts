import React from "react";

function ProfilePicture() {
  const imgurl = "./src/assets/minion.webp";

  const handleClick = (e) => (e.target.style.display = "none"); //to disappear the img

  return <img onClick={(e) => handleClick(e)} src={imgurl} alt="profile pic" />;
}

export default ProfilePicture;
