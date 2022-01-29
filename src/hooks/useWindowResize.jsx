import { useEffect, useState } from "react";

export const useWindowResize = (initialSize) => {
  const [windowSize, setWindowSize] = useState(initialSize);

  const windowListener = (e) => {
    e.target.innerWidth < initialSize
      ? setWindowSize(e.target.innerWidth - 20)
      : setWindowSize(initialSize);
  };

  useEffect(() => {
    window.addEventListener("resize", windowListener);
    return () => {
      window.removeEventListener("resize", windowListener);
    };
  });

  return [windowSize];
};
