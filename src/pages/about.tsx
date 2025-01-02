import { useGSAP } from '@gsap/react';
import SectionHeader from '../components/sectionHeader';
import { useRef } from 'react';
import gsap from 'gsap';

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const aboutContentRef = useRef<HTMLDivElement>(null);
  const aboutImgRef = useRef<HTMLImageElement>(null);
  useGSAP(() => {
    gsap.fromTo(
      aboutImgRef.current,
      {
        clipPath: 'inset(25% 40% 25% 40% round 0.6%)',
      },
      {
        clipPath: 'inset(0% 0% 0% 0% round 0%)',
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: aboutContentRef.current,
          scrub: 1,
          pin: true,
          pinSpacing: true,
        },
      },
    );
  }, []);
  return (
    <section ref={aboutRef} id="about" className="overflow-hidden">
      <SectionHeader
        H1={<>Welcome to Zentry</>}
        H2={
          <>
            Disc<span>o</span>ver the w0rld's <br /> largest shared
            <span>a</span>
            dventure
          </>
        }
      />
      <div ref={aboutContentRef} className="full-height relative">
        <div className="center absolute bottom-6 left-1/2 w-full -translate-x-1/2 flex-col px-10">
          <h3 className="text-center font-bold">
            The Game of Games begins—your life, now an epic MMORPG
          </h3>
          <p className="text-center">
            Zentry unites the every players from countless games and platforms,
            both digital and physical, into a unified Play Economy
          </p>
        </div>
        <img
          src="/img/stones.webp"
          className="center-position z-20 size-full object-cover"
          alt="stones img"
          draggable="false"
        />
        <img
          ref={aboutImgRef}
          src="/img/about.webp"
          className="z-10 size-full object-cover max-lg:scale-x-125 max-md:scale-x-[2]"
          alt="about img"
          draggable="false"
        />
      </div>
    </section>
  );
};

export default About;
