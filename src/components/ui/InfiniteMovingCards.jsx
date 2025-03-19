import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./InfiniteMovingCards.scss"; // Import styles

const InfiniteMovingCards = ({ items, direction = "left", speed = "fast" }) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
    }
  };

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "20s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      className="infinite-moving-container"
      ref={containerRef}
    >
      <ul ref={scrollerRef} className="infinite-moving-list">
        {items.map((item, idx) => (
          <li key={idx} className="infinite-moving-item">
            <motion.div className="infinite-moving-content">
              <img
                src={item.img}
                alt={item.title}
                className="infinite-moving-image"
              />
              <h1 className="infinite-moving-title">{item.title}</h1>
            </motion.div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfiniteMovingCards;
