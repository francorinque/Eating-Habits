const MyLink = ({ href, text, title, css }) => {
  return (
    <a
      href={href}
      title={title && title}
      className={`
        hover:text-primary-dark-green  transition duration-100 ${css}`}
    >
      {text}
    </a>
  );
};
export default MyLink;
