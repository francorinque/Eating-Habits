import data from "../../data.json";
import MyLink from "../ui/MyLink";
import OutlineButton from "../ui/OutlineButton";

const MenuMobile = ({ isOpen, onClick }) => {
  const { links } = data["section-nav"];

  return (
    <div
      className={`${
        isOpen ? "flex" : "hidden"
      } bg-black-900/20 w-full h-screen fixed inset-0 md:hidden
        backdrop-blur-sm
      `}
      onClick={onClick}
    >
      <ul
        className={`
        fixed  left-0 top-0 px-2 py-5 h-screen
        w-[50vw] min-w-[220px] flex flex-col gap-4  items-start text-black-900 bg-bg shadow-md
         *:p-2 *:w-full *:text-center
        `}
      >
        {links.map((link) => (
          <li key={link.id}>
            <MyLink href={link.href} text={link.text} />
          </li>
        ))}
        <li>
          <button className=' w-full'>
            <MyLink
              href={data["section-nav"]["button-one"].href}
              text={data["section-nav"]["button-one"].text}
            />
          </button>
        </li>
        <li>
          <OutlineButton>
            <MyLink
              href={data["section-nav"]["button-two"].href}
              text={data["section-nav"]["button-two"].text}
            />
          </OutlineButton>
        </li>
      </ul>
    </div>
  );
};
export default MenuMobile;
