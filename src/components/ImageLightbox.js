import React, { useEffect } from "react";
import { createPortal } from "react-dom";

function ImageLightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [image, onClose]);

  if (!image || typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <div
      className="image-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${image.alt} expanded view`}
      onClick={onClose}
    >
      <div
        className="image-lightbox-content"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="image-lightbox-close"
          onClick={onClose}
          aria-label="Close expanded image"
        >
          Close
        </button>
        <img src={image.src} alt={image.alt} />
      </div>
    </div>,
    document.body
  );
}

export default ImageLightbox;
