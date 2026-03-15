import React from "react";

const Rain = ({ count = 20 }) => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 2;
        const duration = 2.8 + Math.random() * 1.5;
        const height = 50 + Math.random() * 60;

        return (
          <span
            key={i}
            style={{
              left: `${left}%`,
              height: `${height}px`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
            className="rain-drop absolute -top-20 w-[1.5px]"
          />
        );
      })}

      <style>
        {`
          .rain-drop {
            background: linear-gradient(
              to bottom,
              transparent,
              rgba(45, 212, 191, 0.6),
              transparent
            );
            transform: rotate(12deg);
            animation-name: rain;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }

          @keyframes rain {
            0% {
              transform: translate(0, 0) rotate(12deg);
              opacity: 1;
            }
            15% {
              opacity: 1;
            }
            100% {
              transform: translate(40px, 45vh) rotate(12deg);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Rain;
