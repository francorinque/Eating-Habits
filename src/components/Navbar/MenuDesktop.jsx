import data from "../../data.json";
import MyLink from "../ui/MyLink";
import OutlineButton from "../ui/OutlineButton";

const MenuDesktop = () => {
  const { links } = data["section-nav"];

  return (
    <div className='hidden w-full md:flex items-center justify-between pl-10'>
      {/* links */}
      <ul className='flex items-center justify-start gap-4'>
        {links.map((link) => (
          <li key={link.id}>
            <MyLink href={link.href} text={link.text} />
          </li>
        ))}
      </ul>
      {/* buttons */}
      <ul className='flex items-center gap-4'>
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
export default MenuDesktop;
