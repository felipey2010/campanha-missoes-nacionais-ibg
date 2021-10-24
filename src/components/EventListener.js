import { useState } from "react";
import useEventListener from "../customHook/useEventListener";
import CircularProgressBar from "./CircularProgressBar";

export default function EventListener({ showMeter }) {
  const [key, setKey] = useState("e");
  const percentage = 116;
  useEventListener("keydown", e => {
    if (e.key.toLowerCase() === "m" || e.key.toLowerCase() === "e")
      setKey(e.key);
  });

  if (key.toLowerCase() === "m" || showMeter) {
    return (
      <CircularProgressBar
        strokeWidth="30"
        sq_Size="230"
        percentage={percentage}
      />
    );
  } else if (key.toLowerCase() === "e" || showMeter) {
    return (
      <>
        <h2>
          "E em nenhum outro há salvação, porque também debaixo do céu nenhum
          outro nome há, dado entre os homens pelo qual devamos ser salvos."
        </h2>
        <p>Atos 4: 12 (Almeida)</p>
      </>
    );
  }
}
