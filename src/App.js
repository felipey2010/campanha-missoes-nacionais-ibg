import { useState } from "react";
import "./App.css";
import logo from "./images/logo.png";
import logo_ibg from "./images/ibg logo.png";
import EventListener from "./components/EventListener";

export default function App() {
  const [showMeter, setShowMeter] = useState(false);
  return (
    <div className="App">
      <div className="top">
        <img src={logo_ibg} alt="Logo IBG" />
        <img src={logo} alt="Logo Campanha" />
      </div>
      <div className="middle">
        <div className="middle-container">
          <EventListener showMeter={showMeter} />
        </div>
        <button
          className="btn-show-meter"
          onClick={() => setShowMeter(!showMeter)}>
          Mostrar alvo
        </button>
      </div>
      <div className="bottom">
        <p className="position-absolute bottom-0 start-50 translate-middle footer-text">
          Criado com ❤️ por{" "}
          <a
            href="https://portfolio-philip.vercel.app/"
            target="_blank"
            rel="noreferrer">
            Felipey
          </a>
        </p>
      </div>
    </div>
  );
}
