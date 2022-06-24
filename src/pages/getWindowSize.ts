import { useEffect, useState } from "react";

export default function useWindowSize () {
    const windowIsLoaded = typeof window !== 'undefined';

    function getWindowSize () {
        return {
            width: windowIsLoaded ? window.innerWidth : null,
            height: windowIsLoaded ? window.innerHeight : null
    }
  }

  const [windowSize, setWindowSize] = useState(getWindowSize());

  function handleResize () {
    setWindowSize(getWindowSize())
  }

  useEffect(() => {
    if (windowIsLoaded) {
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        }
    }

  }, [windowIsLoaded])

  return windowSize
}