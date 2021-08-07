import { useCallback, useEffect, useMemo, useState } from "react";

export const useWindowSize = () => {

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const handleResize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, [])

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const ratio = useMemo(() => (windowSize.width/windowSize.height).toFixed(2), [windowSize])
  const showMobile = useMemo(() => ratio <= 0.75, [ratio])
  return {...windowSize, ratio, showMobile};
}