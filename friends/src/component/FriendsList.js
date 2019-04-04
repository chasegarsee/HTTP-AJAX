import React from "react";

const FriendsList = props => {
  return (
    <div className="FriendInfo">
      <p>{props.friend.name}</p>
      <p>{props.friend.age}</p>
      <p>{props.friend.email}</p>
    </div>
  );
};

export default FriendsList;
