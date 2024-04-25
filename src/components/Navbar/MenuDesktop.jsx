import data from "../../data.json";
import MyLink from "../ui/MyLink";

const MenuDesktop = () => {
  const { links } = data["section-nav"];

  return (
    <div className='hidden w-full lg:flex items-center'>
      {/* links */}
      <ul className='w-full flex items-center justify-end gap-5'>
        {links.map((link) =>
          link.isExternal ? (
            <li key={link.id}>
              <MyLink
                href={link.href}
                text={link.text}
                title={link.title}
                target='_blank'
                rel='noreferrer'
              />
            </li>
          ) : (
            <li key={link.id}>
              <MyLink href={link.href} text={link.text} title={link.title} />
            </li>
          )
        )}
      </ul>
    </div>
  );
};
export default MenuDesktop;
