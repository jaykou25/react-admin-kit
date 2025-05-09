const MyInput = (props) => {
  const { value = '', onChange } = props;
  // console.log({ value });
  return (
    <input
      value={value}
      onChange={(e) => {
        console.log('onchange', e);
        onChange(e.target.value);
      }}
    />
  );
};

export default MyInput;
