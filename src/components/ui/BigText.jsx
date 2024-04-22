const BigText = ({ textLeft, textMiddle, textRight, toRigth = false }) => {
  if (textLeft && textMiddle && textRight && !toRigth) {
    return (
      <h2 className='font-semibold text-center mb-8 text-[18px] text-balance'>
        {textLeft}{" "}
        <span className='text-primary-red text-[35px]'>{textMiddle}</span>{" "}
        {textRight}
      </h2>
    );
  } else if (toRigth) {
    return (
      <h2 className='font-semibold text-center mb-8 text-[18px] text-balance'>
        {textLeft}{" "}
        <span className='text-primary-red text-[35px]'>{textRight}</span>
      </h2>
    );
  }
};

export default BigText;
