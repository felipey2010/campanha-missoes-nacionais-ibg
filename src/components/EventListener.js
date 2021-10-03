import { useState } from "react";
import useEventListener from "../customHook/useEventListener";

export default function EventListener({ showMeter }) {
  const [key, setKey] = useState("");
  useEventListener("keydown", e => {
    setKey(e.key);
  });

  if (key.toLowerCase() === "m" || showMeter) {
    return <h2>Porcentagem</h2>;
  }

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
