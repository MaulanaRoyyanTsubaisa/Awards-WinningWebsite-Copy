import { gsap } from "gsap";
import { useState, useRef, useEffect } from "react";

export const VidPrev = ({ children }) => {
  const [isHovering, setIsHovering] = useState(false);

  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  const handleMouseMove = ({ clientX, clientY, currentTarget }) => {
    const rect = currentTarget.getBoundingClientRect();
    const xOffset = clientX - (rect.left + rect.width / 2);
    const yOffset = clientY - (rect.top + rect.height / 2);

    if (isHovering) {
      gsap.to(sectionRef.current, {
        x: xOffset * 0.05,
        y: yOffset * 0.05,
        rotationY: xOffset * 0.02,
        rotationX: -yOffset * 0.02,
        transformPerspective: 600,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(contentRef.current, {
        x: -xOffset * 0.03,
        y: -yOffset * 0.03,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  useEffect(() => {
    if (!isHovering) {
      gsap.to(sectionRef.current, {
        x: 0,
        y: 0,
        rotationY: 0,
        rotationX: 0,
        duration: 0.4,
        ease: "power2.out",
      });

      gsap.to(contentRef.current, {
        x: 0,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
      });
    }
  }, [isHovering]);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="absolute z-50 size-full overflow-hidden rounded-lg"
      style={{ perspective: "600px" }}
    >
      <div
        ref={contentRef}
        className="origin-center rounded-lg"
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </div>
    </section>
  );
};

export default VidPrev;
