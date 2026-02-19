import { useState, useEffect } from "react";
function useCertificateSlider(certificates, delay = 3000) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (selectedImage) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === certificates.length - 1 ? 0 : prev + 1,
      );
    }, delay);
    return () => clearInterval(interval);
  }, [selectedImage, certificates.length, delay]);
  const openImage = (img) => {
    setSelectedImage(img);
  };
  const closeImage = () => {
    setSelectedImage(null);
  };
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  return {
    currentIndex,
    selectedImage,
    openImage,
    closeImage,
    goToSlide,
  };
}

export default useCertificateSlider;
