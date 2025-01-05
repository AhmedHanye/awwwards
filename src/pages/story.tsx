import SectionHeader from '../components/sectionHeader';
import CardHoverEffect from '../hook/cardHoverEffect';
const Story = () => {
  const handleMouseMove = CardHoverEffect();
  return (
    <section id="story" className="overflow-hidden bg-black py-20">
      <SectionHeader
        H1={<>the open ip universe</>}
        H2={
          <>
            the st<span>o</span>ry of
            <br />a hidden real<span>m</span>
          </>
        }
        color="blue"
      />
      <div className="lg:full-height relative h-[55vh] md:h-[85vh]">
        <div
          className="group absolute -top-24 left-1/2 h-64 w-[26rem] opacity-90 [transform:rotateY(30deg)_rotateZ(5deg)_translateX(-50%)] md:h-96 md:w-[32rem] lg:h-[40rem] lg:w-[65rem]"
          onMouseMove={handleMouseMove}
        >
          <img
            src="img/entrance.webp"
            className="size-full object-cover transition-transform ease-linear will-change-transform [perspective:1000px] group-hover:[transform:rotateX(var(--rotate-x))_rotateY(var(--rotate-y))]"
            alt="entrance img"
            style={{
              clipPath: 'polygon(4% 0, 83% 21%, 100% 73%, 0% 100%)',
            }}
            loading="lazy"
          />
        </div>
        <div className="absolute bottom-3 right-3 w-1/3 pe-2 max-md:w-2/3 md:pe-5 lg:pe-10">
          <p className="text-blue-75">
            Where realms converge, lies Zentry and the boundless pillar.
            Discover its secrets and shape your fate amidst infinite
            opportunities.
          </p>
          <button className="btn relative mt-5 h-8 w-48 overflow-hidden rounded-full bg-blue-75 text-sm font-semibold">
            <span className="btn-text-one">DISCOVER PROLOGUE</span>
            <span className="btn-text-two">DISCOVER PROLOGUE</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Story;
