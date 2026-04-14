import { useEffect, useState } from "react";
import logo from '../assets/GetAJob.png';

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
      <img src={logo} alt="Logo" className="splash-logo" />
    </div>
  );
}