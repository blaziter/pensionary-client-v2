interface Props {
    value: number;
    max: number;
}

export const Counter = (props: Props) => {
    return (
        <>
            <progress
                className="w-full self-stretch"
                value={props.value}
                max={props.max}
            ></progress>
        </>
    );
};
