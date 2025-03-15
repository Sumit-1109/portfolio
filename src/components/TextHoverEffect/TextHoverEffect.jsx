"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export const TextHoverEffect = ({ texts, fontSize = "100px", width = "300px", height = "100px" }) => {
  const svgRef = useRef(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  // 🔄 Rotating Text Effect
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const typingSpeed = 100; // ⏳ Typing Speed
  const deletingSpeed = 50; // 🔥 Deleting Speed
  const period = 3000; // Time before switching words

  useEffect(() => {
    let ticker = setTimeout(() => tick(), isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(ticker);
  }, [text, isDeleting]);

  const tick = () => {
    let i = loopNum % texts.length;
    let fullText = texts[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setTimeout(() => setIsDeleting(true), period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  };

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
    <svg
      ref={svgRef}
      width={width}
      height={height}
      viewBox="0 0 100% 100%"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
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

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="20%"
          animate={maskPosition}
          transition={{ duration: 0.1, ease: "linear" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="70%" stopColor="black" />
        </motion.radialGradient>

        <mask id="textMask">
          <rect x="0" y="0" width="100%" height="100%" fill="url(#revealMask)" />
        </mask>
      </defs>

      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fill="white" stroke="url(#defaultGradient)" strokeWidth="0.3" fontSize={fontSize} className="font-bold">
        {text}
      </text>

      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fill="url(#hoverGradient)" stroke="none" mask="url(#textMask)" fontSize={fontSize} className="font-bold">
        {text}
      </text>
    </svg>
  );
};
