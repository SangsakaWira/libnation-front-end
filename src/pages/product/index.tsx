import React from 'react';

interface Props {
  onClick: () => void;
}

const Product: React.FC<Props> = ({onClick}) => {
  return (
    <h1>Product</h1>
  );
};

export default Product;