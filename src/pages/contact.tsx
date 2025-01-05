import SectionHeader from '../components/sectionHeader';
import CardHoverEffect from '../hook/cardHoverEffect';
const Contact = () => {
  const handleMouseMove = CardHoverEffect();
  return (
    <section
      id="contact"
      className="full-height flex flex-col pt-12 text-blue-75"
    >
      <div
        className="center group relative mx-10 my-auto h-5/6 rounded-lg bg-black"
        onMouseMove={handleMouseMove}
      >
        <div className="center z-10 flex-col">
          <SectionHeader
            H1={<>Join Zentry</>}
            H2={
              <>
                let's b<span>u</span>ild the
                <br /> new era of g<span>a</span>ming <br />t<span>o</span>
                gether.
              </>
            }
            color="white"
          />
          <button className="btn relative h-8 w-36 overflow-hidden rounded-full bg-blue-75 text-sm font-semibold text-black max-md:w-32 max-md:text-[0.7rem]">
            <span className="btn-text-one">CONTACT US</span>
            <span className="btn-text-two">CONTACT US</span>
          </button>
        </div>
        <div className="hovering-effect contact-clip-path-1 absolute -top-[6.4rem] left-4 size-96 max-md:hidden">
          <img
            src="img/contact-1.webp"
            className="size-[36rem] object-cover pt-32"
            alt="contact img 1"
            loading='lazy'
          />
        </div>
        <div className="hovering-effect contact-clip-path-2 absolute bottom-0 right-[60%] size-96 max-md:hidden">
          <img
            src="img/contact-2.webp"
            className="size-96 object-cover"
            alt="contact img 2"
            loading='lazy'
          />
        </div>
        <div className="hovering-effect contact-clip-path-3 absolute -right-16 -top-32 size-80 max-md:-right-0">
          <img
            src="img/swordman.webp"
            className="size-[18rem] object-cover p-4"
            alt="swordman img"
            loading='lazy'
          />
        </div>
      </div>
      <footer className="flex items-center justify-between bg-violet-300 p-6">
        <p>©Nova 2024. All rights reserved</p>
        <a href="/" className="hover:underline">
          Privacy Policy
        </a>
      </footer>
    </section>
  );
};

export default Contact;
