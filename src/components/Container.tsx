import React from 'react';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const Container = (props: Props) => {
  return (
    <>
      <div
        className={
          props.className ? `container ${props.className}` : 'container mx-auto'
        }
      >
        {props.children}
      </div>
    </>
  );
};

export default Container;
