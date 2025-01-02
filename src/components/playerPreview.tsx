import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import debounce from 'lodash/debounce';
import { useCallback, useRef } from 'react';

interface PlayerPreviewProps {
  previewRef: React.RefObject<HTMLDivElement | null>;
  containerRef: React.RefObject<HTMLDivElement | null>;
  onPreviewClick: () => void;
  currentVideoIndex: number;
}

/**
 * PlayerPreview Component
 * Renders an interactive preview card with 3D rotation effects
 * Features:
 * - Mouse-following animation
 * - Perspective rotation
 * - Auto-scaling on hover
 */
const PlayerPreview = ({
  previewRef,
  containerRef,
  onPreviewClick,
  currentVideoIndex,
}: PlayerPreviewProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  /**
   * Handles 3D rotation effect based on mouse position
   * Applies perspective transformation to both wrapper and preview
   */
  const handleMouseMove = debounce((e: MouseEvent) => {
    if (!wrapperRef.current || !containerRef.current) return;

    const timeline = gsap.timeline({
      defaults: { duration: 0.4, ease: 'power2.out' },
    });

    // Calculate normalized mouse coordinates
    const bounds = containerRef.current.getBoundingClientRect();
    const normalizedX = (e.clientX - bounds.left) / bounds.width;
    const normalizedY = (e.clientY - bounds.top) / bounds.height;

    // Calculate rotation angles
    const rotationX = (normalizedY - 0.5) * -70; // Max 35° rotation
    const rotationY = (normalizedX - 0.5) * 70; // Max 35° rotation

    // Apply 3D transformations
    timeline
      .to(wrapperRef.current, {
        rotationX,
        rotationY,
        transformPerspective: 1000,
      })
      .to(
        previewRef.current,
        {
          rotationX: -rotationX * 0.7, // Counter-rotation
          rotationY: -rotationY * 0.7,
        },
        '<',
      );
  }, 2);

  const handleMouseLeave = debounce(() => {
    gsap.to(wrapperRef.current, {
      width: 0,
      height: 0,
      duration: 0.5,
      ease: 'power2.out',
    });
  }, 1000);

  const handleMouseInteraction = useCallback(
    (e: MouseEvent) => {
      gsap.to(wrapperRef.current, {
        width: '13rem',
        height: '13rem',
        duration: 0.4,
        ease: 'power2.out',
      });
      handleMouseMove(e);
      handleMouseLeave();
    },
    [wrapperRef, handleMouseMove, handleMouseLeave],
  );

  useGSAP(() => {
    const element = containerRef.current;
    if (!element) return;

    element.addEventListener('mousemove', handleMouseInteraction);
    return () => {
      element.removeEventListener('mousemove', handleMouseInteraction);
    };
  }, [handleMouseInteraction, containerRef, handleMouseLeave]);

  return (
    <div
      ref={wrapperRef}
      id="player-preview"
      className="center z-20 size-0 cursor-pointer overflow-hidden rounded-lg hover:!size-fit"
      onClick={onPreviewClick}
    >
      <div
        ref={previewRef}
        className="pulse-size center overflow-hidden rounded-lg border-2 border-black"
      >
        <img
          src={`/img/hero-${(currentVideoIndex % 4) + 1}.webp`}
          alt="Preview card img"
          className="size-52 object-cover"
          draggable="false"
        />
      </div>
    </div>
  );
};

export default PlayerPreview;
