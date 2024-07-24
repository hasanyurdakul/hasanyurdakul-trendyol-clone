import React from "react";

function PopularLinkGridItem({ gridItem }) {
  return (
    <div>
      <h1 className="text-2xl">{gridItem.title}</h1>
      <ul className="grid grid-cols-3 mt-6 ">
        {gridItem.items.map((item, key) => (
          <a
            key={key}
            href="/"
            className="hover:underline mt-1 text-[0.9rem] line-clamp-1 "
          >
            {item}
          </a>
        ))}
      </ul>
    </div>
  );
}

export default PopularLinkGridItem;
