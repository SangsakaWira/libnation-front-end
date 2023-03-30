import React from 'react';

interface Props {
  title: string;
  content: string;
}

const Card: React.FC<Props> = ({title, content}) => {
  return (
    <div>
      <h1>
        {title}
      </h1>
      <p>
        {content}
      </p>
    </div>
  );
};

export default Card;