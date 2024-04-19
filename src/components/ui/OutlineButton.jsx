const OutlineButton = ({ children }) => {
  return (
    <button
      className='border border-primary-dark-green  py-2 px-5
        rounded-md shadow-sm
     '
    >
      {children}
    </button>
  );
};
export default OutlineButton;
