import { DefaultProps } from '@types';

interface Props extends DefaultProps {
    workplace: string;
    supervisor?: string;
}

export const StatusCard = (props: Props) => {
    return (
        <div className="flex flex-col items-center">
            <div className="flex gap-8">
                <span>{props.workplace}</span>
                {props.workplace !== 'Všeobecné sestry' && (
                    <span>Vedoucí oddělení: {props.supervisor}</span>
                )}
            </div>
            <div className="flex gap-8">{props.children}</div>
        </div>
    );
};
