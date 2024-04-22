const SeparatorGradient = ({ css }) => {
  return (
    <div
      className={`
      w-full h-[3px] rounded-[50%] bg-gradient-to-r opacity-[60%]
      from-secondary-medium-green via-primary-dark-green to-secondary-medium-green 
        ${css}
    `}
    />
  );
};
export default SeparatorGradient;
