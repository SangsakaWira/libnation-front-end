import React from 'react';

interface Props {
  onClick: () => void;
}

const Profile: React.FC<Props> = ({onClick}) => {
  return (
    <h1>Profile</h1>
  );
};

export default Profile;