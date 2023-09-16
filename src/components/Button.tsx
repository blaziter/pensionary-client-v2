import { DefaultProps } from '@types';

interface Props extends DefaultProps {
  variant: string;
  onClick?: () => void;
}

interface VariantProps {
  [key: string]: string;
}

/**
 * @author blaziter
 * @param {Object} props.variant success, danger, warning
 * @returns
 */
export const Button = (props: Props) => {
  const variant: VariantProps = {
    success: 'bg-green-500 hover:bg-green-400',
    danger: 'bg-red-500 hover:bg-red-400',
    warning: 'bg-yellow-500 hover:bg-yellow-400',
  };

  return (
    <div>
      <button
        className={`rounded-lg px-4 py-2 text-white ${variant[props.variant]}`}
        {...props}
      >
        {props.children}
      </button>
    </div>
  );
};
