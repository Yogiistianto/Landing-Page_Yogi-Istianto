'use client';

import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

interface InteractiveLanyardCardProps {
  children: React.ReactNode;
  isLoaded?: boolean;
}

export default function InteractiveLanyardCard({ children, isLoaded = true }: InteractiveLanyardCardProps) {
  const [isDragging, setIsDragging] = useState(false);

  // Exact card displacement motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Pendulum angle: card tilts in the direction of the horizontal drag pull
  const pendulumAngle = useTransform(x, [-100, 100], [-18, 18]);

  // Subtle 3D perspective tilt
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);
  const rotateX = useTransform(y, [-10, 60], [5, -8]);

  // Dynamic realistic drop shadow responding to drag displacement
  const dynamicBoxShadow = useTransform([x, y], ([latestX, latestY]: number[]) => {
    const lx = Number(latestX) || 0;
    const ly = Number(latestY) || 0;
    const offsetX = -lx * 0.12;
    const offsetY = 16 + ly * 0.12;
    const blur = 32 + Math.abs(ly) * 0.1;
    return `${offsetX}px ${offsetY}px ${blur}px rgba(15, 44, 89, 0.1), 0 4px 12px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.06)`;
  });

  // Dynamic Bezier Rope Curve:
  // Top anchor is permanently fixed at (0, 0)
  // Bottom anchor is dynamically attached to the metal ring on top of the card at (latestX, 114 + latestY)
  const ropePath = useTransform([x, y, pendulumAngle], ([latestX, latestY, angle]: number[]) => {
    const startX = 0;
    const startY = 0; // Ceiling anchor
    const endX = Number(latestX) || 0;
    const endY = 114 + (Number(latestY) || 0); // Bottom ring on top of card

    // Control Point 1: leaves ceiling bracket vertically downwards
    const cp1X = 0;
    const cp1Y = 45;

    // Control Point 2: enters card clip tangentially matching the card tilt
    const rad = ((Number(angle) || 0) * Math.PI) / 180;
    const tangentDist = 48;
    const cp2X = endX - Math.sin(rad) * tangentDist;
    const cp2Y = endY - Math.cos(rad) * tangentDist;

    return `M ${startX} ${startY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${endX} ${endY}`;
  });

  return (
    <div className="relative flex justify-center w-full pt-28">
      {/* Ceiling Anchor Bracket (Fixed at top of container) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 pointer-events-none">
        <div className="w-10 h-3 rounded-b-md bg-gradient-to-r from-neutral-400 via-neutral-200 to-neutral-400 border-x border-b border-neutral-400/70 shadow-sm" />
        <div className="w-3 h-1 bg-neutral-600 rounded-full -mt-0.5" />
      </div>

      {/* Dynamic SVG Rope / Ribbon Physics */}
      <svg
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none z-10 overflow-visible"
        style={{
          width: 240,
          height: 180,
        }}
        viewBox="-120 0 240 180"
      >
        <defs>
          <linearGradient id="lanyardGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#091E42" />
            <stop offset="25%" stopColor="#0F2C59" />
            <stop offset="50%" stopColor="#1E40AF" />
            <stop offset="75%" stopColor="#0F2C59" />
            <stop offset="100%" stopColor="#091E42" />
          </linearGradient>
        </defs>

        {/* Ambient shadow beneath the rope */}
        <motion.path
          d={ropePath}
          fill="none"
          stroke="rgba(15, 44, 89, 0.12)"
          strokeWidth="18"
          strokeLinecap="round"
        />

        {/* Thick woven lanyard ribbon */}
        <motion.path
          d={ropePath}
          fill="none"
          stroke="url(#lanyardGradient)"
          strokeWidth="14"
          strokeLinecap="round"
        />

        {/* Center woven stitch line */}
        <motion.path
          d={ropePath}
          fill="none"
          stroke="#93C5FD"
          strokeWidth="1.2"
          strokeDasharray="4 3"
          opacity="0.8"
        />
      </svg>

      {/* Outer Draggable Card Wrapper (Snap to origin, z-20 below header, touch-action: none) */}
      <motion.div
        style={{
          x,
          y,
          rotateZ: pendulumAngle,
          rotateY,
          rotateX,
          transformPerspective: 1000,
          transformOrigin: '50% 0px',
          touchAction: 'none',
        }}
        initial={{ y: -140, opacity: 0 }}
        animate={isLoaded ? { y: 0, opacity: 1 } : { y: -140, opacity: 0 }}
        transition={{
          type: 'spring',
          damping: 14,
          stiffness: 110,
          mass: 1,
          delay: isLoaded ? 0.15 : 0,
        }}
        drag
        dragSnapToOrigin={true}
        dragConstraints={{ top: 0, left: -100, right: 100, bottom: 50 }}
        dragElastic={0.1}
        dragTransition={{ bounceStiffness: 500, bounceDamping: 15 }}
        whileDrag={{ cursor: 'grabbing' }}
        whileHover={{ cursor: 'grab' }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        className="relative z-20 w-full touch-none select-none origin-top"
      >
        {/* Inner Wrapper: Smooth Idle Sway */}
        <motion.div
          animate={isDragging ? { rotate: 0 } : { rotate: [-1.2, 1.2, -1.2] }}
          transition={{
            repeat: Infinity,
            duration: 4.5,
            ease: 'easeInOut',
          }}
          className="origin-top relative w-full"
        >
          {/* Realistic Metal Clasp & Carabiner Ring on top of the card */}
          <div className="absolute left-1/2 -top-5 -translate-x-1/2 flex flex-col items-center pointer-events-none z-20">
            {/* Metal Swivel Ring: SVG rope terminates right here */}
            <div className="w-5 h-5 rounded-full border-[2.5px] border-slate-400 bg-slate-200 shadow-sm flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-500" />
            </div>

            {/* Swivel hinge cylinder */}
            <div className="w-2.5 h-1.5 bg-gradient-to-r from-slate-300 via-slate-100 to-slate-300 border border-slate-300 -mt-0.5 shadow-xs" />

            {/* Carabiner Jaw Clip */}
            <div className="w-8 h-4 rounded-[4px] bg-gradient-to-r from-slate-200 via-white to-slate-300 border border-slate-300 shadow-sm -mt-0.5 flex items-center justify-center">
              <div className="w-4 h-1 rounded-full bg-slate-400/40" />
            </div>
          </div>

          {/* Slot punch in card */}
          <div className="relative pt-3">
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-9 h-2 rounded-full bg-neutral-100 border border-neutral-300 z-20 pointer-events-none shadow-inner" />

            {/* Card with Dynamic Light & Shadow */}
            <motion.div
              style={{
                boxShadow: dynamicBoxShadow,
              }}
              className="rounded-xl"
            >
              {children}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
