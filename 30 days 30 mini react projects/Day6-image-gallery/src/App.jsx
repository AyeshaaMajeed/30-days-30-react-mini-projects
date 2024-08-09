import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import images from "./images";
import "./index.css";

import {
  Captions,
  Download,
  Fullscreen,
  Zoom,
  Thumbnails,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";

const App = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <div className="p-4">
      <div className="grid grid-col sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={image.title}
            className="w-full h-80 cursor-pointer hover:scale-105 rounded-lg transition-transform duration-200 object-cover"
            onClick={() => handleImageClick(index)}
          ></img>
        ))}
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Captions, Download, Fullscreen, Zoom, Thumbnails]}
        slides={images.map((image) => ({
          src: image.url,
          title: image.title,
          description: image.description,
        }))}
        index={currentIndex}
        captions={{ showToggle: true, descriptionTextAlign: "start" }}
      />
    </div>
  );
};

export default App;
