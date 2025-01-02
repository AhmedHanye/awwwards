import clsx from 'clsx';
import { JSX, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);
const SectionHeader = ({
  H1,
  H2,
  color = 'black',
}: {
  H1: JSX.Element;
  H2: JSX.Element;
  color?: string;
}) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const h2Ref = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.fromTo(
      h2Ref.current,
      {
        rotationZ: '-5deg',
        rotationX: '-80deg',
        rotateY: '-100deg',
        translateX: '-40%',
        translateY: '100%',
        scale: 1.1,
      },
      {
        rotationZ: '0deg',
        rotationX: '0deg',
        rotateY: '0deg',
        translateX: '0%',
        translateY: '0%',
        scale: 1,
        opacity: 1,
        ease: 'power2.out',
        duration: 1,
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top bottom',
          end: 'top 10%',
          // toggleActions: 'restart none none none',
          scrub: 1,
        },
      },
    );
  }, []);
  return (
    <header
      ref={headerRef}
      className={clsx(
        'center flex-col gap-y-5 text-wrap px-5 py-24 uppercase max-md:py-16',
        {
          'text-black': color === 'black',
          'text-blue-75': color === 'blue',
        },
      )}
    >
      <h1 className="font-general text-xs font-semibold max-lg:text-[0.6rem] max-md:text-[0.5rem]">
        {H1}
      </h1>
      <h2
        ref={h2Ref}
        className="special-font rotate- text-center font-zentry text-[7rem] leading-[0.9] max-lg:text-6xl max-md:text-5xl"
      >
        {H2}
      </h2>
    </header>
  );
};

export default SectionHeader;
