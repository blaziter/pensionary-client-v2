interface Props {
  className: string;
}

export const Color = (props: Props) => {
  return (
    <>
      <div className={props.className}></div>
    </>
  );
};
