import React, { useEffect, useRef } from "react";
import Hero from "./components/hero/Hero";
import Banner from "./components/banner/Banner";

const App = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const enableSound = () => {
      if (audioRef.current) {
        audioRef.current.muted = false; // снимаем mute
        audioRef.current.play().catch(() => {});
      }
      // после первого действия удаляем слушатели
      document.removeEventListener("click", enableSound);
      document.removeEventListener("scroll", enableSound);
      document.removeEventListener("keydown", enableSound);
    };

    document.addEventListener("click", enableSound);
    document.addEventListener("scroll", enableSound);
    document.addEventListener("keydown", enableSound);

    return () => {
      document.removeEventListener("click", enableSound);
      document.removeEventListener("scroll", enableSound);
      document.removeEventListener("keydown", enableSound);
    };
  }, []);
  return (
    <div>
      <audio ref={audioRef} autoPlay loop muted>
        <source src="/assets/сенин суротун.m4a" type="audio/mpeg" />
        Ваш браузер не поддерживает аудио.
      </audio>
      <Banner />
      <Hero />
    </div>
  );
};

export default App;
