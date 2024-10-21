import React from 'react';
import { useParams } from 'react-router-dom';

const Welcome = () => {
  const { username } = useParams();

  return (
    <div>
      <p>Hallo {username}</p>
    </div>
  );
};

export default Welcome;
