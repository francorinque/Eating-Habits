import useNav from "../../hooks/useNav";
import Logo from "../ui/Logo";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";

import { BsJustify, BsXLg } from "react-icons/bs";

const Navbar = () => {
  const { isOpen, handleIsOpen, hasScrolled } = useNav();

  return (
    <header
      className={`
      flex justify-between items-center  pr-2
      h-[78px] fixed top-0 left-[50%] translate-x-[-50%] w-full max-w-maxWidth z-[98]
   `}
    >
      <Logo />
      <button
        className='text-2xl cursor-pointer z-[99] text-secondary flex items-center justify-center md:hidden'
        onClick={handleIsOpen}
      >
        {isOpen ? <BsXLg /> : <BsJustify />}
      </button>
      <MenuDesktop />
      <MenuMobile isOpen={isOpen} onClick={handleIsOpen} />
    </header>
  );
};
export default Navbar;
