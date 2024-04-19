import data from "../../data.json";

const Logo = () => {
  return (
    <img
      src={`${data["section-nav"].logo}`}
      alt='Logo svg de un texto y una manzana'
      className='w-[150px]'
    />
  );
};
export default Logo;
