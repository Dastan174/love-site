import React, { useRef } from "react";
import Hero from "./components/hero/Hero";

const App = () => {
  const audioRef = useRef(null);

  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.muted = false; // снимаем mute
      audioRef.current.play();
    }
  };
  return (
    <div>
      <button
        onClick={playMusic}
        className="px-6 py-3 bg-pink-500 text-white rounded-2xl shadow-lg hover:bg-pink-600 transition"
      >
        Включить музыку 🎵
      </button>

      {/* <audio ref={audioRef} autoPlay loop muted>
        <source src="/assets/сенин суротун.m4a" type="audio/mpeg" />
        Ваш браузер не поддерживает аудио.
      </audio> */}

      <Hero />
    </div>
  );
};

export default App;
