import { debounce } from 'lodash';
import { useCallback } from 'react';

const CardHoverEffect = () => {
  const MoveByMouse = debounce(
    (e: React.MouseEvent<HTMLElement>) => {
      const element = e.currentTarget;
      if (!element) return;

      const { left, top, width, height } = element.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      const xPercent = x / width;
      const yPercent = y / height;
      const rotateX = (xPercent - 0.5) * 25; // left right
      const rotateY = (yPercent - 0.5) * -25; // up down

      // Update CSS variables
      element.style.setProperty('--rotate-y', `${rotateX}deg`);
      element.style.setProperty('--rotate-x', `${rotateY}deg`);
    },
    16,
    {
      maxWait: 16,
    },
  ); // 60fps

  return useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => MoveByMouse({ ...e }),
    [MoveByMouse],
  );
};

export default CardHoverEffect;
