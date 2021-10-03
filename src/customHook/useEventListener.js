import { useEffect, useRef } from "react";

export default function useEventListener(
  eventType,
  callback,
  element = window
) {
  const calllbackRef = useRef(callback);

  useEffect(() => {
    calllbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = e => calllbackRef.current(e);
    element.addEventListener(eventType, handler);

    return () => element.removeEventListener(eventType, handler);
  }, [eventType, element]);
}
