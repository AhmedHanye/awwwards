import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { debounce } from 'lodash';
import { AlignJustify, Send } from 'lucide-react';
import { useCallback, useRef } from 'react';

const Navbar = () => {
  const navbarRef = useRef<HTMLElement>(null);
  const posRef = useRef<number>(0);

  const changeNav = debounce(
    (preHeight: number, height: number) => {
      if (!navbarRef.current) return;

      const tl = gsap.timeline({
        defaults: { ease: 'power2.inOut', duration: 0.4 },
      });
      tl.to(navbarRef.current, {
        backgroundColor: height !== 0 ? 'black' : 'transparent', // * background is transparent when the scroll is at the top
      }).to(
        navbarRef.current,
        {
          y: preHeight >= height ? 0 : -navbarRef.current.offsetHeight - 50, // * go up when scrolling down and go down when scrolling up
        },
        '<',
      );
    },
    100,
    {
      trailing: true, // !only the final scroll event is processed
      maxWait: 400, // !if you don't stop scrolling, it will excute after 400ms for the scroll event that happens in that time
    },
  );
  const handleNavScroll = useCallback(
    () => changeNav(posRef.current, (posRef.current = window.scrollY)),
    [changeNav],
  ); // ! using useCallback to prevent the function from being recreated on every render

  useGSAP(() => {
    window.addEventListener('scroll', handleNavScroll);
    return () => {
      window.removeEventListener('scroll', () => handleNavScroll);
    };
  }, []);
  return (
    <nav
      id="navbar"
      ref={navbarRef}
      className="fixed top-0 z-50 mx-3 mt-2 flex w-[calc(100%-1.5rem)] items-center justify-between rounded-lg px-8 py-3 text-[0.62rem] uppercase max-lg:px-4 max-md:px-2"
    >
      <div className="center h-12 gap-4 max-lg:h-8">
        <a href="/">
          <img
            src="favicon.ico"
            width={42}
            height={42}
            className="max-lg:size-8"
            alt="logo"
          />
        </a>
        <button className="btn relative h-8 w-28 overflow-hidden rounded-full bg-blue-75 font-semibold max-lg:h-6 max-lg:w-20">
          <span className="btn-text-one center gap-1">
            Products <Send size={12} className="black-arrow max-lg:size-3" />
          </span>
          <span className="btn-text-two center gap-1">
            Products <Send size={12} className="black-arrow max-lg:size-3" />
          </span>
        </button>
        <button className="btn relative h-8 w-28 overflow-hidden rounded-full bg-blue-75 font-semibold max-lg:h-6 max-lg:w-20">
          <span className="btn-text-one">whitepaper</span>
          <span className="btn-text-two">whitepaper</span>
        </button>
      </div>
      <div
        id="navbar-links"
        className="center relative h-8 w-[32rem] text-white max-lg:hidden"
      >
        <a href="/" className="navbar-link">
          nexus <Send size={12} className="white-arrow" />
        </a>
        <a href="/" className="navbar-link">
          vault <Send size={12} className="white-arrow" />
        </a>
        <a href="/" className="navbar-link">
          prologue
          <Send size={12} className="white-arrow" />
        </a>
        <a href="/" className="navbar-link">
          about
          <Send size={12} className="white-arrow" />
        </a>
        <a href="/" className="navbar-link">
          contact
          <Send size={12} className="white-arrow" />
        </a>
        <div id="navbar-hover-effect"></div>
      </div>
      <AlignJustify className="cursor-pointer lg:hidden" color="white" />
    </nav>
  );
};

export default Navbar;
