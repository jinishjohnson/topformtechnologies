"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";



const galleryImages = [
  {
    src: "https://images.pexels.com/photos/1022692/pexels-photo-1022692.jpeg",
    category: "office",
  },
  {
    src: "https://images.pexels.com/photos/1022693/pexels-photo-1022693.jpeg",
    category: "office",
  },
  {
    src: "https://images.pexels.com/photos/1022694/pexels-photo-1022694.jpeg",
    category: "team",
  },
  {
    src: "https://images.pexels.com/photos/1022695/pexels-photo-1022695.jpeg",
    category: "team",
  },
  {
    src: "https://images.pexels.com/photos/1022696/pexels-photo-1022696.jpeg",
    category: "projects",
  },
  {
    src: "https://images.pexels.com/photos/1022697/pexels-photo-1022697.jpeg",
    category: "projects",
  },
];

export default function Gallery() {
  const [index, setIndex] = useState(-1);
  const [category, setCategory] = useState("all");

  const categories = ["all", "office", "team", "projects"];
  const filteredImages =
    category === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === category);

  return (
    <div className="w-full min-h-screen bg-gray-50 py-20">

      <h2 className="text-4xl font-bold text-center mb-6">Gallery</h2>

      {/* Category filter */}
      <div className="flex justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => {
              setCategory(cat);
              setIndex(-1);
            }}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${category === cat
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-gray-700 border-gray-200 hover:border-blue-400 hover:text-blue-700"
              }`}
          >
            {cat === "all" ? "All" : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div
        className={`w-[90%] max-w-7xl mx-auto grid gap-6 
        grid-cols-2 sm:grid-cols-3 md:grid-cols-4`}
      >

        {filteredImages.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer overflow-hidden rounded-2xl shadow-md"
            onClick={() => setIndex(i)}
          >
            <Image
              src={img.src}
              alt=""
              width={400}
              height={400}
              className="w-full h-56 object-cover"
            />
          </motion.div>
        ))}

      </div>

      {/* Lightbox */}
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={filteredImages}
        index={index}
      />

    </div>
  );
}