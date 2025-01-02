import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useState } from 'react';
import PlayerPreview from '../components/playerPreview';
import { ScrollTrigger } from 'gsap/all';
import { SendHorizontal } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  // State Management
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(1);
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);
  const [isVideoTransitioning, setIsVideoTransitioning] =
    useState<boolean>(false);

  // DOM References
  const containerRef = useRef<HTMLDivElement>(null);
  const primaryVideoRef = useRef<HTMLVideoElement>(null);
  const secondaryVideoRef = useRef<HTMLVideoElement>(null);
  const previewCardRef = useRef<HTMLDivElement>(null);
  const vidoeContainerRef = useRef<HTMLDivElement>(null);

  /**
   * Handles the video transition request
   * Prevents multiple transitions from occurring simultaneously
   */
  const initiateVideoTransition = () =>
    isVideoTransitioning ||
    (setCurrentVideoIndex((prev) => (prev % 4) + 1),
    setIsVideoTransitioning(true));

  /**
   * Begins the transition animation sequence
   * Starts playback of the incoming video
   */
  const startTransitionSequence = () => {
    secondaryVideoRef.current?.play();
  };

  /**
   * Completes the transition animation sequence
   * - Pauses the outgoing video
   * - Updates video sources
   * - Swaps video references
   */
  const completeTransitionSequence = () => {
    if (primaryVideoRef.current) {
      const nextVideoIndex = (currentVideoIndex % 4) + 1;
      primaryVideoRef.current.pause();
      primaryVideoRef.current.poster = `img/hero-${nextVideoIndex}.webp`;
      primaryVideoRef.current.src = `videos/hero-${nextVideoIndex}.mp4`;
    }

    // Swap video references for next transition
    [primaryVideoRef.current, secondaryVideoRef.current] = [
      secondaryVideoRef.current,
      primaryVideoRef.current,
    ];

    setIsVideoTransitioning(false);
  };

  // GSAP Animation Setup
  useGSAP(() => {
    if (isFirstRender) return setIsFirstRender(false);

    const transitionTimeline = gsap.timeline({
      onStart: startTransitionSequence,
      onComplete: completeTransitionSequence,
    });

    // Video transition animation sequence
    transitionTimeline
      .to(previewCardRef.current, {
        scale: 0,
        duration: 0,
      })
      .to(primaryVideoRef.current, {
        zIndex: 0,
        duration: 0,
      })
      .to(secondaryVideoRef.current, {
        zIndex: 10,
        duration: 0,
      })
      .to(secondaryVideoRef.current, {
        width: '100%',
        height: '100%',
        duration: 0.4,
        ease: 'power3.inOut',
      })
      .to(primaryVideoRef.current, {
        width: '13rem',
        height: '13rem',
        duration: 0,
      })
      .to(previewCardRef.current, {
        scale: 1,
        duration: 0.25,
        ease: 'power3.inOut',
      });
  }, [currentVideoIndex]);

  // Clip path animation on scroll
  // Transforms the video container from a rectangle to a trapezoid shape
  // as the user scrolls down the page
  useGSAP(() => {
    gsap.set(vidoeContainerRef.current, {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    });
    gsap.to(vidoeContainerRef.current, {
      clipPath: 'polygon(0 0, 50% 0, 89% 100%, 31% 100%)',
      ease: 'power3.inOut', // Smoother easing
      scrollTrigger: {
        trigger: vidoeContainerRef.current,
        start: '25% 25%',
        end: '100% center',
        scrub: 1,
      },
    });
  }, []);

  return (
    <section
      id="hero"
      className="full-height center relative"
      ref={containerRef}
    >
      <div className="absolute left-10 top-24 z-30 max-md:left-5">
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

      <div
        className="center relative z-10 size-full overflow-hidden"
        id="video-container"
        ref={vidoeContainerRef}
      >
        <PlayerPreview
          previewRef={previewCardRef}
          containerRef={containerRef}
          onPreviewClick={initiateVideoTransition}
          currentVideoIndex={currentVideoIndex}
        />
        <video
          ref={primaryVideoRef}
          preload="auto"
          autoPlay
          muted
          loop
          playsInline
          className="video-player z-10 size-full"
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
          className="video-player z-0 size-52"
          poster="img/hero-2.webp"
          draggable="false"
          controls={false}
          disablePictureInPicture
        >
          <source src="videos/hero-2.mp4" type="video/mp4" />
        </video>
        <h1 className="special-font hero-heading absolute bottom-4 right-5 z-30 text-blue-100">
          G<span>A</span>MING
        </h1>
      </div>
      <h1 className="special-font hero-heading absolute bottom-4 right-5 z-0 text-black">
        G<span>A</span>MING
      </h1>
    </section>
  );
};

export default Hero;
