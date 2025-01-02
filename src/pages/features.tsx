import Card from '../components/card';

const Features = () => {
  const cardsData = [
    {
      title: (
        <h2 className="bento-title special-font">
          RADIA<span>N</span>T
        </h2>
      ),
      description: (
        <p className="pt-2 text-sm text-gray-300 max-md:text-xs">
          A cross-platform metagame app, turning your activities across Web2 and
          Web3 games into a rewarding adventure.
        </p>
      ),
      video: 'videos/feature-1.mp4',
      box: 1,
    },
    {
      title: (
        <h2 className="bento-title special-font">
          N<span>E</span>XUS
        </h2>
      ),
      description: (
        <p className="pt-2 text-sm text-gray-300 max-md:text-xs">
          A gamified social hub, adding a new dimension of play to your
          identity, Web3 engagement and social interaction
        </p>
      ),
      video: 'videos/feature-3.mp4',
      box: 2,
    },
    {
      title: (
        <h2 className="bento-title special-font">
          ZIG<span>M</span>A
        </h2>
      ),
      description: (
        <p className="pt-2 text-sm text-gray-300 max-md:text-xs">
          An anime and gaming-inspired NFT collection - the IP primed for
          expansion.
        </p>
      ),
      video: 'videos/feature-2.mp4',
      box: 3,
    },
    {
      title: (
        <h2 className="bento-title special-font">
          AZ<span>U</span>L
        </h2>
      ),
      description: (
        <p className="pt-2 text-sm text-gray-300 max-md:text-xs">
          A cross-world AI Agent - elevating your gameplay to be more fun and
          productive.
        </p>
      ),
      video: 'videos/feature-4.mp4',
      box: 4,
    },
    {
      video: 'videos/hero-1.mp4',
      box: 5,
    },
    {
      title: (
        <h2 className="bento-title special-font text-black">
          M<span>O</span>RE
          <br />
          CO<span>M</span>ING
          <br />S<span>O</span>ON
        </h2>
      ),
      box: 6,
    },
  ];
  return (
    <section
      id="features"
      className="bg-black px-4 py-20 text-blue-75 lg:px-24 xl:px-40"
    >
      <header>
        <h1 className="max-mg:text-base text-xl max-lg:text-lg">
          Dive into the Zentry Universe
        </h1>
        <p className="max-mg:text-sm max-w-[28rem] text-lg opacity-75 max-lg:text-base">
          Immerse yourself in a rich and ever-expanding ecosystem where a
          vibrant array of products converge into an interconnected universe.
          Radiant
        </p>
      </header>
      <div className="grid h-[80rem] grid-cols-2 grid-rows-9 gap-3 py-20 md:h-[85rem] md:gap-5 md:py-24 lg:h-[90rem] lg:py-32 xl:h-[100rem] xl:gap-10 xl:py-40 2xl:h-[125rem]">
        {cardsData.map((card) => (
          <Card
            key={card.box}
            title={card.title}
            description={card.description}
            video={card.video}
            box={card.box}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
