import "../styles/Certificates.css";

import cert1 from "../assets/hakerRank.png";
import cert2 from "../assets/pentagon.png";

import useCertificateSlider from "../customeHooks/useCertificateSlider";

function Certifications() {
  const certificates = [cert1, cert2];

  const {
    currentIndex,
    selectedImage,
    openImage,
    closeImage,
    goToSlide,
  } = useCertificateSlider(certificates);

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
              <img src={img} alt="certificate" onClick={() => openImage(img)} />
            </div>
          ))}
        </div>
      </div>

      <div className="dots">
        {certificates.map((_, index) => (
          <span
            key={index}
            className={currentIndex === index ? "active-dot" : ""}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>

      {selectedImage && (
        <div className="modal">
          <button className="back-btn" onClick={closeImage}>
            ← Back
          </button>

          <img src={selectedImage} alt="Large Certificate" />
        </div>
      )}
    </section>
  );
}

export default Certifications;
