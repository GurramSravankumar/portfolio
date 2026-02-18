import { useState, useEffect } from "react";
import "../styles/Certificates.css";

import cert1 from "../assets/hakerRank.png";
import cert2 from "../assets/pentagon.png";

function Certifications() {
  const certificates = [cert1, cert2];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (selectedImage) return; 

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === certificates.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [selectedImage]);

  return (
    <section className="certifications" id="certificates">
      <h2>CERTIFICATIONS</h2>

      <div className="slider-container">
        <div
          className="slider-track"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {certificates.map((img, index) => (
            <div className="slide" key={index}>
              <img
                src={img}
                alt="certificate"
                onClick={() => setSelectedImage(img)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="dots">
        {certificates.map((_, index) => (
          <span
            key={index}
            className={currentIndex === index ? "active-dot" : ""}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>

      {selectedImage && (
        <div className="modal">
          <button
            className="back-btn"
            onClick={() => setSelectedImage(null)}
          >
            ← Back
          </button>
          <img src={selectedImage} alt="Large Certificate" />
        </div>
      )}
    </section>
  );
}

export default Certifications;
