import React, { useEffect, useRef, useState } from "react";

type FeatureItem = { subtitle: string; image: string; description: string };
type Slot = "prev" | "current" | "next";

const FEATURES: FeatureItem[] = [
  {
    subtitle: "AI-assisted vision technology",
    image: "https://www-static-nw.husqvarna.com/-/images/aprimo/husqvarna/robotic-mowers/photos/action/i/is/is-749660.webp?v=e71689f68427f33c&format=WEBP_LANDSCAPE_COVER_XXL",
    description: "With AI-assisted vision technology, the robotic lawn mower can detect, classify, and avoid obstacles on the lawn. The system operates both in daylight and at night thanks to infrared illumination. Objects such as animals, balls, clothing, and water accumulations are classified, allowing the mower to effectively avoid obstacles while continuing to mow.",
  },
  {
    subtitle: "Remote management",
    image: "https://www-static-nw.husqvarna.com/-/images/aprimo/husqvarna/robotic-mowers/photos/action/o/op/op-110112.webp?v=d8e09db8427f33c&format=WEBP_LANDSCAPE_COVER_XXL",
    description: "Husqvarna robotic mowers are part of a comprehensive system — guided via satellite signals. With Husqvarna EPOS® (Exact Positioning Operating System) technology, the working area is defined with virtual boundaries. You control your mowers with Husqvarna Fleet Services, available both as an app and on desktop.",
  },
  {
    subtitle: "Flexible installation",
    image: "https://www-static-nw.husqvarna.com/-/images/aprimo/husqvarna/robotic-mower-installation-materials/photos/action/mx-143532.webp?v=33fd4ee5f9be1f8&format=WEBP_LANDSCAPE_COVER_XXXL",
    description: "Husqvarna Automower offers different installation paths depending on your garden, connectivity, and model — from traditional boundary wires to fully virtual, satellite-based setups. A physical wire is laid around the lawn's perimeter to define the mowing area.",
  },
];

const C = {
  grey600: "#3D3D3C",
  primary: "#FF6A13",
  white: "#FFFFFF",
};

const IMAGE_W = 678;
const IMAGE_H = 478;
const MOBILE_IMAGE_H = 280;
const IMAGE_GAP = 18;
const MOBILE_PEEK_OFFSET = 60;
const SLIDE_DURATION = 320;
const SLIDE_EASING = "ease-in-out";

const calcIdleOffset = (c: number, step: number) => (c > 0 ? -step : 0);

export type HighlightFeatureProps = {
  activeIndex?: number;
  forceMobile?: boolean;
};

export const HighlightFeatureComponent = ({ activeIndex: initialIndex = 0, forceMobile }: HighlightFeatureProps) => {
  const isMobile = forceMobile !== undefined ? forceMobile : window.innerWidth < 768;
  const init = Math.min(Math.max(0, initialIndex), FEATURES.length - 1);

  const [imageW, setImageW] = useState(() =>
    isMobile ? Math.max(0, window.innerWidth - 48 - MOBILE_PEEK_OFFSET) : IMAGE_W
  );
  const imageH = isMobile ? MOBILE_IMAGE_H : IMAGE_H;
  const borderRadius = isMobile ? 24 : 40;
  const slideStep = imageW + IMAGE_GAP;

  const [current, setCurrent] = useState(init);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [stripOffset, setStripOffset] = useState(() => calcIdleOffset(init, imageW + IMAGE_GAP));
  const [leftHovered, setLeftHovered] = useState(false);
  const [rightHovered, setRightHovered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMobile || !imageContainerRef.current) return;
    const ro = new ResizeObserver(([entry]) => {
      setImageW(entry.contentRect.width - MOBILE_PEEK_OFFSET);
    });
    ro.observe(imageContainerRef.current);
    return () => ro.disconnect();
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) setStripOffset(calcIdleOffset(current, imageW + IMAGE_GAP));
  }, [imageW]); // eslint-disable-line

  const feature = FEATURES[current];
  const slots: { idx: number; slot: Slot }[] = [
    ...(current > 0 ? [{ idx: current - 1, slot: "prev" as Slot }] : []),
    { idx: current, slot: "current" as Slot },
    ...(current < FEATURES.length - 1 ? [{ idx: current + 1, slot: "next" as Slot }] : []),
  ];

  const goNext = () => {
    if (animating || current === FEATURES.length - 1) return;
    setDirection("next");
    setAnimating(true);
    setStripOffset(stripOffset - slideStep);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      const next = current + 1;
      setCurrent(next);
      setStripOffset(calcIdleOffset(next, slideStep));
      setAnimating(false);
    }, SLIDE_DURATION);
  };

  const goPrev = () => {
    if (animating || current === 0) return;
    setDirection("prev");
    setAnimating(true);
    setStripOffset(stripOffset + slideStep);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      const prev = current - 1;
      setCurrent(prev);
      setStripOffset(calcIdleOffset(prev, slideStep));
      setAnimating(false);
    }, SLIDE_DURATION);
  };

  const isIncoming = (slot: Slot) =>
    animating && ((direction === "next" && slot === "next") || (direction === "prev" && slot === "prev"));
  const isOutgoing = (slot: Slot) =>
    animating && slot === "current" && direction === "prev";

  const btnTop = Math.round((imageH - 48) / 2);

  const arrowBtn = (hovered: boolean): React.CSSProperties => ({
    width: 48, height: 48, borderRadius: "50%", border: "none", cursor: "pointer",
    backgroundColor: hovered ? C.primary : C.white,
    display: "flex", alignItems: "center", justifyContent: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.16)", transition: "background-color 160ms", padding: 0, flexShrink: 0,
  });

  return (
    <div style={{
      borderTop: "1px solid rgba(0,0,0,0.08)",
      paddingTop: 40, paddingBottom: 36,
      paddingLeft: isMobile ? 24 : undefined,
      paddingRight: isMobile ? 24 : undefined,
      display: "flex", flexDirection: "column", gap: 20,
    }}>
      <p style={{ fontFamily: "'Husqvarna Gothic', sans-serif", fontWeight: 700, fontSize: 28, lineHeight: "32px", letterSpacing: "-0.2px", color: C.grey600, margin: 0 }}>
        Made for professionals
      </p>
      <p style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 350, fontSize: 18, lineHeight: "28px", letterSpacing: "0.4px", color: C.grey600, margin: 0, maxWidth: isMobile ? undefined : 732 }}>
        Husqvarna robotic mowers are developed specifically for professionals. With connected fleet
        management, AI-assisted vision for enhanced safety and performance and hassle-free installation.
      </p>
      <p style={{ fontFamily: "'Husqvarna Gothic', sans-serif", fontWeight: 700, fontSize: isMobile ? 16 : 20, lineHeight: isMobile ? "20px" : "28px", color: C.grey600, margin: 0 }}>
        {feature.subtitle}
      </p>

      <div ref={imageContainerRef} style={{ position: "relative", height: imageH, marginLeft: isMobile ? -24 : undefined, marginRight: isMobile ? -24 : undefined }}>
        <div style={{ display: "flex", gap: IMAGE_GAP, transform: `translateX(${stripOffset}px)`, transition: animating ? `transform ${SLIDE_DURATION}ms ${SLIDE_EASING}` : "none" }}>
          {slots.map(({ idx, slot }) => (
            <div key={`${slot}-${current}`} style={{
              width: imageW, height: imageH, borderRadius, overflow: "hidden", flexShrink: 0,
              transform: isOutgoing(slot) ? "scale(0.8)" : slot === "current" || isIncoming(slot) ? "scale(1)" : "scale(0.8)",
              transformOrigin: slot === "prev" ? "right center" : "left center",
              transition: isIncoming(slot) || isOutgoing(slot) ? `transform ${SLIDE_DURATION}ms ${SLIDE_EASING}` : "none",
            }}>
              <img src={FEATURES[idx].image} alt={FEATURES[idx].subtitle} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
          ))}
        </div>

        {current > 0 && (
          <div style={{ position: "absolute", left: isMobile ? 12 : -24, top: btnTop, zIndex: 2 }}
            onMouseEnter={() => setLeftHovered(true)} onMouseLeave={() => setLeftHovered(false)}>
            <button style={arrowBtn(leftHovered)} onClick={goPrev} aria-label="Previous">
              <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
                <path d="M8 2L2 8L8 14" stroke={leftHovered ? C.white : C.grey600} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        )}

        {current < FEATURES.length - 1 && (
          <div style={{ position: "absolute", ...(isMobile ? { right: 36 } : { left: imageW - 24 }), top: btnTop, zIndex: 2 }}
            onMouseEnter={() => setRightHovered(true)} onMouseLeave={() => setRightHovered(false)}>
            <button style={arrowBtn(rightHovered)} onClick={goNext} aria-label="Next">
              <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
                <path d="M2 2L8 8L2 14" stroke={rightHovered ? C.white : C.grey600} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        )}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: isMobile ? undefined : 700 }}>
        <p style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 350, fontSize: 18, lineHeight: "28px", letterSpacing: "0.4px", color: C.grey600, margin: 0 }}>
          {feature.description}
        </p>
        <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "'Roboto', sans-serif", fontWeight: 350, fontSize: 18, lineHeight: "28px", color: C.grey600, textDecoration: "underline" }}>
          <span>→</span><span>Read more</span>
        </a>
      </div>
    </div>
  );
};
