import { useCallback, useEffect, useRef, useState } from 'react';
import CardHoverEffect from '../hook/cardHoverEffect';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SendHorizontal } from 'lucide-react';

const Hero = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const primaryVideoRef = useRef<HTMLVideoElement>(null);
  const secondaryVideoRef = useRef<HTMLVideoElement>(null);

  const [nextVideoIndex, setNextVideoIndex] = useState<number>(1);
  const [isVideoTransitioning, setIsVideoTransitioning] =
    useState<boolean>(false);

  const handleMouseMove = CardHoverEffect();
  const handleVideoTransition = useCallback(() => {
    if (isVideoTransitioning) return;

    setNextVideoIndex((prev) => (prev % 4) + 1);
    setIsVideoTransitioning(true);
  }, [isVideoTransitioning]);

  const handleVideoSwitch = () => {
    if (!primaryVideoRef.current || !secondaryVideoRef.current) return;

    // Update primary video
    primaryVideoRef.current.poster = `img/hero-${(nextVideoIndex % 4) + 1}.webp`;
    primaryVideoRef.current.src = `videos/hero-${(nextVideoIndex % 4) + 1}.mp4`;
    primaryVideoRef.current.load();
    primaryVideoRef.current.pause();
    primaryVideoRef.current.classList.replace(
      'primary-video',
      'secondary-video',
    );

    // Update secondary video
    secondaryVideoRef.current.classList.replace(
      'secondary-video',
      'primary-video',
    );

    primaryVideoRef.current.removeAttribute('style');
    secondaryVideoRef.current.removeAttribute('style');

    // Swap refs using state management
    [primaryVideoRef.current, secondaryVideoRef.current] = [
      secondaryVideoRef.current,
      primaryVideoRef.current,
    ];

    setIsVideoTransitioning(false);
  };

  useGSAP(() => {
    if (!isVideoTransitioning) return;
    const tl = gsap.timeline({
      onStart: () => {
        secondaryVideoRef.current?.play();
      },
      onComplete: handleVideoSwitch,
    });
    tl.to(secondaryVideoRef.current, {
      // ! stop wiggling through the transition
      transform: 'none',
      duration: 0,
    })
      .to(secondaryVideoRef.current, {
        // * expand the secondary video
        width: '100%',
        height: '100%',
        borderRadius: '0',
        outline: 'none',
        ease: 'power3.inOut',
        duration: 0.3,
      })
      .to(primaryVideoRef.current, {
        // * shrink the primary video
        width: '0',
        height: '0',
        duration: 0.3,
        ease: 'power3.inOut',
      });
  }, [isVideoTransitioning]);

  useEffect(() => {
    const videoElement = secondaryVideoRef.current;
    videoElement?.addEventListener('click', handleVideoTransition);
    return () => {
      videoElement?.removeEventListener('click', handleVideoTransition);
    };
  }, [handleVideoTransition]);

  useGSAP(() => {
    gsap.set(videoContainerRef.current, {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    });
    gsap.to(videoContainerRef.current, {
      clipPath: 'polygon(0 0, 50% 0, 89% 100%, 31% 100%)',
      ease: 'power3.inOut', // Smoother easing
      scrollTrigger: {
        trigger: videoContainerRef.current,
        start: '25% 25%',
        end: '100% center',
        scrub: 1,
      },
    });
  }, []);

  return (
    <section
      id="hero"
      className="full-height group relative"
      onMouseMove={handleMouseMove}
    >
      <div className="center relative z-30 size-full" ref={videoContainerRef}>
        <div className="absolute left-10 top-24 z-20 max-md:left-5">
          <h1 className="special-font hero-heading text-blue-100">
            REDEFI<span>N</span>E
          </h1>
          <p className="font-robert-regular text-blue-100 max-lg:text-sm max-md:text-xs">
            Enter the Metagame <br />
            Unleash the Play Economy
          </p>
          <button
            id="watch-trailer"
            title="Watch trailer"
            className="center trailer-button mt-5 gap-x-2 rounded-2xl bg-yellow-300 px-6 py-2 font-general text-[0.7rem] font-bold"
          >
            <SendHorizontal fill="black" size={12} /> WATCH TRAILER
          </button>
        </div>
        <video
          ref={primaryVideoRef}
          preload="auto"
          autoPlay
          muted
          loop
          playsInline
          className="primary-video"
          poster="img/hero-1.webp"
          draggable="false"
          controls={false}
          disablePictureInPicture
        >
          <source src="videos/hero-1.mp4" type="video/mp4" />
        </video>
        <video
          ref={secondaryVideoRef}
          preload="auto"
          muted
          loop
          playsInline
          className="secondary-video"
          poster="img/hero-2.webp"
          draggable="false"
          controls={false}
          disablePictureInPicture
        >
          <source src="videos/hero-2.mp4" type="video/mp4" />
        </video>
        <h1 className="special-font hero-heading absolute bottom-4 right-5 z-20 text-blue-100">
          G<span>A</span>MING
        </h1>
      </div>
      <h1 className="special-font hero-heading absolute bottom-4 right-5 text-black">
        G<span>A</span>MING
      </h1>
    </section>
  );
};

export default Hero;
