const MyLink = ({ href, text }) => {
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      className='hover:text-primary-dark-green  transition duration-100'
    >
      {text}
    </a>
  );
};
export default MyLink;
