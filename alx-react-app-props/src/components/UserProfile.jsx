import React, { useContext } from 'react';
import UserContext from '../UserContext';

function UserProfile(props) {
  const userData = useContext(UserContext);

  return (
    <div>
      {/* Props from parent (if any) */}
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>

      {/* Data from Context */}
      <h2>User Profile</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;