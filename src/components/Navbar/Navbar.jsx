import useNav from '../../hooks/useNav';
import Logo from '../ui/Logo';
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';

import { BsJustify, BsXLg } from 'react-icons/bs';

const Navbar = () => {
  const { isOpen, handleIsOpen, hasScrolled } = useNav();

  return (
    <header
      className={`
      z-[98] fixed top-0 left-0 w-full   h-[78px] flex items-center justify-center
      ${hasScrolled ? 'bg-[#DDF7E3]  shadow-sm' : 'bg-transparent'}
   `}
    >
      <nav
        className={`
       flex justify-between items-center  px-2 relative h-full
       w-full max-w-maxWidth
      `}
      >
        <Logo />
        <button
          className='text-2xl cursor-pointer z-[99] text-secondary flex items-center justify-center lg:hidden'
          onClick={handleIsOpen}
        >
          {isOpen ? <BsXLg /> : <BsJustify />}
        </button>
        <MenuDesktop />
        <MenuMobile isOpen={isOpen} onClick={handleIsOpen} />
      </nav>
    </header>
  );
};
export default Navbar;
