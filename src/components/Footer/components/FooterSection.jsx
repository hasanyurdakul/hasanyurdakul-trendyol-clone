import React from "react";

function FooterSection({ item }) {
  return (
    <div>
      {/* Titles */}
      <h1 className="text-white text-2xl font-semibold mt-8 mb-4">
        {item.title}
      </h1>
      {/* Links */}
      <div className="flex flex-col gap-4">
        {item.links &&
          item.links.map((link, key) => (
            <a key={key} href="/" className="text-white">
              {link}
            </a>
          ))}
      </div>
      {/* Pictures */}
      <div
        className={`flex gap-2 mt-2  justify-start items-start ${
          item.title === "Mobil Uygulamalar"
            ? "flex-col "
            : "md:flex-row flex-col "
        }`}
      >
        {item.pictures &&
          item.pictures.map((picture, key) => (
            <img
              key={key}
              src={picture.src}
              alt={picture.name}
              className={` ${
                item.title === "Mobil Uygulamalar" ? "h-10" : "h-7 rounded-md"
              }`}
            />
          ))}
      </div>
    </div>
  );
}

export default FooterSection;
