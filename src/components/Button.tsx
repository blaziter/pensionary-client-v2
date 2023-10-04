import { Button } from '@mantine/core';
import { DefaultProps } from '@types';

interface Props extends DefaultProps {
    className?: string;
    onClick?: () => void;
}

export const ButtonComponent = (props: Props) => {
    return <Button onClick={props.onClick}>{props.children}</Button>;
};
