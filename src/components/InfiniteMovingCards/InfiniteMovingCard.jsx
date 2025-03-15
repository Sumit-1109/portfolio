import React from "react";
import InfiniteMovingCards from "../ui/InfiniteMovingCards";

export default function InfiniteMovingCard() {
  return (
    <div style={{ textAlign: "center", padding: "40px 0" }}>
      <h2
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          marginBottom: "100px", marginTop: "30px",
        }}
      >
        {/* Hover effect on Technologies */}
        <span
          style={{
            color: "blue",
            display: "inline-block",
            position: "relative",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.querySelector(".underline").style.transform =
              "scaleX(1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.querySelector(".underline").style.transform =
              "scaleX(0)";
          }}
        >
          Technologies
          {/* Underline */}
          <span
            className="underline"
            style={{
              position: "absolute",
              bottom: "-3px",
              left: "0",
              width: "100%",
              height: "3px",
              backgroundColor: "blue",
              transform: "scaleX(0)",
              transformOrigin: "left",
              transition: "transform 0.3s ease-in-out",
            }}
          ></span>
        </span>{" "}
        I mastered hands-on
      </h2>

      <InfiniteMovingCards items={technologies} direction="right" speed="slow" />
    </div>
  );
}

const technologies = [
  { title: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" },
  { title: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" },
  { title: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" },
  { title: "React.JS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { title: "Node.JS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" },
  { title: "Express.JS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
  { title: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { title: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { title: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { title: "Next.JS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { title: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { title: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg" },
];
