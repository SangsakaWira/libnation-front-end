import React from 'react';

interface Props {
  onClick: () => void;
}

const Home: React.FC<Props> = ({}) => {
  return (
      <>
      <h1>Home</h1>
    </>
  );
};

export default Home;