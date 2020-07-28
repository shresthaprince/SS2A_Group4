import React from "react";
import "../styles/rectangles.css";
import Rectangle from "./common/rectangle";

const HomeView = () => {
  const rectangles = [
    { id: "rect1", colour: "#FEC1DB" },
    { id: "rect2", colour: "#F95064" },
    { id: "rect3", colour: "#F9C47A" },
    { id: "rect4", colour: "#8DEF74" },
    { id: "rect5", colour: "#8CD1E2" },
    { id: "rect6", colour: "teal" },
    { id: "rect7", colour: "gold" },
  ];

  return (
    <div className="login-body text-center">
      <svg id="loading" viewBox="0 0 200 160">
        <g transform="translate(100 0) scale(0.8 0.8) rotate(45 0 0)">
          {rectangles.map((rectangle) => (
            <Rectangle key={rectangle.id} attributes={rectangle} />
          ))}
        </g>
      </svg>
      <h3 className="display-5">
        Get your projects started off with students on the same page as you.
      </h3>
    </div>
  );
};

export default HomeView;
