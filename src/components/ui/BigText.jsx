const BigText = ({ textLeft, textMiddle, textRight, toRigth = false }) => {
  const className =
    "font-semibold text-center mb-5 text-[16px] lg:text-[18px] text-balance max-w-[500px] mx-auto";

  if (textLeft && textMiddle && textRight && !toRigth) {
    return (
      <h2 className={className}>
        {textLeft}{" "}
        <span className='text-primary-red text-[25px]  lg:text-[35px]'>
          {textMiddle}
        </span>{" "}
        {textRight}
      </h2>
    );
  } else if (toRigth) {
    return (
      <h2 className={className}>
        {textLeft}{" "}
        <span className='text-primary-red text-[25px] lg:text-[35px]'>
          {textRight}
        </span>
      </h2>
    );
  }
};

export default BigText;
