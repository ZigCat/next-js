import React from "react";
import { Link } from "next/link";

const Slider = ({ title, items, showMoreLink = '/', titleKey="title", imgKey="poster_path", link="/movie", }) => {
  return (
    <div className="slider">
      <div className="slider__title">
        <h2>{title}</h2>
        <a href={showMoreLink}>Показать больше</a>
      </div>
      <div className="slider__list">
        {items.map((item) => (
          <a className="slider__item" href={`${link}/${item.id}`}>
            {item[imgKey] ? (
              <img
                src={process.env.NEXT_PUBLIC_POSTER_IMG + item[imgKey]} alt={item[titleKey]}
              />
            ) : (
              <img src="/not-found.png" alt="not-found" />
            )}
            <div className="slider__item-title">{item.title || item.name}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Slider;
