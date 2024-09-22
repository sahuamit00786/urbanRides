import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FoundNot = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Static Dots Effect */}
      {[...Array(100)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full w-1 h-1 opacity-20 animate-pulse"
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
          }}
        />
      ))}

      {/* TV Screen */}
      <div className="w-64 h-64 border-8 border-white rounded-lg overflow-hidden relative">
        <div className="absolute inset-0 bg-black" />
        <div
          className="absolute inset-0 bg-white animate-pulse"
          style={{
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E')",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-black text-4xl font-bold">
          404
        </div>
      </div>

      <h1 className="text-6xl font-bold text-white mt-8 mb-2">SIGNAL LOST</h1>
      <p className="text-xl text-gray-400 mb-8 text-center">
        We've lost the transmission.
        <br />
        The page you're looking for doesn't exist.
      </p>
      <Link to="/">
        <button className="bg-white text-black py-2 px-4 rounded hover:bg-gray-200 transition-colors">
          Reconnect
        </button>
      </Link>
    </div>
  );
};

export default FoundNot;
