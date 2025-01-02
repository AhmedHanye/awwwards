import clsx from 'clsx';
import CardHoverEffect from '../hook/cardHoverEffect';
import { JSX, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface CardProps {
  title?: JSX.Element;
  description?: JSX.Element;
  video?: string;
  box: number;
}
const Card = ({ title, description, video, box }: CardProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = CardHoverEffect();
  const handleMouseEnter = () => videoRef.current?.play();
  const handleMouseExit = () =>
    videoRef.current &&
    (videoRef.current.pause(), (videoRef.current.currentTime = 0));

  useGSAP(() => {
    gsap.fromTo(
      cardRef.current,
      {
        rotationX: '-80deg',
        opacity: 0,
      },
      {
        opacity: 1,
        rotationX: '0deg',
        duration: 0.9,
        scrollTrigger: {
          trigger: cardRef.current,
          start: '-240% bottom',
          end: 'bottom top',
          toggleActions: 'restart none none none',
        },
      },
    );
  }, []);
  return (
    <div
      ref={cardRef}
      className={`group cursor-grab ${clsx(box, {
        'col-start-1 col-end-3 row-start-1 row-end-4': box === 1,
        'col-start-2 col-end-3 row-start-4 row-end-6': box === 2,
        'col-start-1 col-end-2 row-start-4 row-end-8': box === 3,
        'col-start-2 col-end-3 row-start-6 row-end-8': box === 4,
        'col-start-2 col-end-3 row-start-8 row-end-10': box === 5,
        'card-violet col-start-1 col-end-2 row-start-8 row-end-10': box === 6,
      })} `}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseExit}
    >
      <div className="relative size-full overflow-hidden rounded-lg border-[1px] border-white border-opacity-20 transition-transform ease-linear will-change-transform [perspective:1000px] group-hover:[transform:rotateX(var(--rotate-x))_rotateY(var(--rotate-y))_scale(0.95)]">
        {video && (
          <video
            preload="auto"
            muted
            loop
            playsInline
            draggable="false"
            controls={false}
            disablePictureInPicture
            className="video-player size-full scale-125"
            ref={videoRef}
          >
            <source src={video} type="video/mp4" />
          </video>
        )}
        <div className="absolute left-4 top-4 w-72 max-w-64 max-md:max-w-40">
          {title}
          {description}
        </div>
        <div className="center absolute bottom-4 left-4 gap-2 max-md:flex-col">
          {box !== 6 && box !== 5 && (
            <button className="card-button text-gray-300">
              <Send size={12} className="max-md:size-3" fill="#d1d5db" /> COMING
              SOON
            </button>
          )}
          {box === 2 && (
            <button className="card-button text-yellow-300">
              LAUNCH SITE
              <Send size={12} className="max-md:size-3" fill="#edff66" />
            </button>
          )}
        </div>
        {box === 6 && (
          <img
            src="favicon.ico"
            className="absolute bottom-4 right-4 size-6 md:size-8 lg:size-12"
            alt="logo"
          />
        )}
      </div>
    </div>
  );
};

export default Card;
