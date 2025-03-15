"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export const TextHoverEffectForButtons = ({ texts, fontSize = "20px", width = "200px", height = "50px" }) => {
  const svgRef = useRef(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current) {
      const svgRect = svgRef.current.getBoundingClientRect();
      setMaskPosition({
        cx: `${((cursor.x - svgRect.left) / svgRect.width) * 100}%`,
        cy: `${((cursor.y - svgRect.top) / svgRect.height) * 100}%`,
      });
    }
  }, [cursor]);

  return (
    <motion.div
      style={{ display: "inline-block", width, height }}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
    >
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox="0 0 200 50"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        className="select-none"
      >
        <defs>
          <linearGradient id="defaultGradient">
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="gray" />
          </linearGradient>

          <linearGradient id="hoverGradient">
            <stop offset="0%" stopColor="#00FFFF" />
            <stop offset="50%" stopColor="#8A2BE2" />
            <stop offset="100%" stopColor="#FF1493" />
          </linearGradient>

          {/* FIXED: Standard radialGradient instead of motion.radialGradient */}
          <radialGradient id="revealMask" cx={maskPosition.cx} cy={maskPosition.cy} r="20%" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="white" />
            <stop offset="70%" stopColor="black" />
          </radialGradient>

          <mask id="textMask">
            <rect x="0" y="0" width="100%" height="100%" fill="url(#revealMask)" />
          </mask>
        </defs>

        {/* Default text */}
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fill="white" stroke="url(#defaultGradient)" strokeWidth="0.3" fontSize={fontSize} className="font-bold">
          {texts[0]}
        </text>

        {/* Masked text (hover effect) */}
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fill="url(#hoverGradient)" stroke="none" mask="url(#textMask)" fontSize={fontSize} className="font-bold">
          {texts[0]}
        </text>
      </svg>
    </motion.div>
  );
};
