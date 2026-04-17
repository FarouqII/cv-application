import { useEffect, useState } from "react";
import logo800 from '../assets/GetAJob-800.webp';
import logo600 from '../assets/GetAJob-600.webp';
import logo300 from '../assets/GetAJob-300.webp';
import logo150 from '../assets/GetAJob-150.webp';

export default function SplashScreen({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);

      setTimeout(() => {
        onFinish();
      }, 600);

    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`splash ${fadeOut ? "fade-out" : ""}`}>
      <picture>
        <source
          srcSet={`
            ${logo150} 150w,
            ${logo300} 300w,
            ${logo600} 600w,
            ${logo800} 800w
          `}
          type="image/webp"
        />
        <img
          src={logo300}
          srcSet={`
            ${logo150} 150w,
            ${logo300} 300w,
            ${logo600} 600w,
            ${logo800} 800w
          `}
          sizes="(max-width: 600px) 150px, 300px"
          alt="Logo"
          className="splash-logo"
        />
      </picture>
    </div>
  );
}