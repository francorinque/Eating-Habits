const MyLink = ({ href, text, title, css, ...props }) => {
  return (
    <a
      href={href}
      title={title && title}
      {...props}
      className={`
        hover:text-primary-dark-green  transition duration-100 ${css}`}
    >
      {text}
    </a>
  );
};
export default MyLink;
