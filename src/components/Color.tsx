import React from 'react';

interface Props {
  className: string;
}

const Color = (props: Props) => {
  return (
    <>
      <div className={props.className}></div>
    </>
  );
};

export default Color;
