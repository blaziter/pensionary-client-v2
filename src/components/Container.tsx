import { DefaultProps } from '@types';

interface Props extends DefaultProps {
  className?: string;
}

export const Container = (props: Props) => {
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
