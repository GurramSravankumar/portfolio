import { useState, useEffect } from "react";

function useHeaderTransition(homeId = "home") {
  const [showImageHeader, setShowImageHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const home = document.getElementById(homeId);

      if (!home) return;

      const rect = home.getBoundingClientRect();

      if (rect.bottom <= 40) {
        setShowImageHeader(true);
      } else {
        setShowImageHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [homeId]);

  return showImageHeader;
}

export default useHeaderTransition;
