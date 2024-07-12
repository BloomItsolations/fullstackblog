"use client";
import React, { useState, useEffect } from "react";
import style from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = ({ value }) => {
  const [clientContent, setClientContent] = useState("");

  useEffect(() => {
    if (value?.content) {
      setClientContent(truncateText(value.content, 190));
    }
  }, [value]);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  const isVideo = (url) => {
    return /\.(mp4|webm|ogg)$/i.test(url);
  };

  return (
    <div className={style.container} style={{ backgroundColor: "#f8f9f9" }}>
      <div className={style.imageContainer}>
        {isVideo(value.image) ? (
          <video
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            controls
            className={style.image}
          >
            <source src={value.image} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image src={value.image} alt="" fill className={style.image} />
        )}
      </div>
      <div className={style.textContainer}>
        <Link href={`/blog/${value?._id}`} className={style.title}>
          {truncateText(value?.title, 150)}
        </Link>
        <div
          className={style.desc}
          dangerouslySetInnerHTML={{ __html: clientContent }}
        ></div>
        <div className={style.cardbottombox}>
          <div>
            <Link href={`/blog/${value._id}`} className={style.link}>
              Read More..
            </Link>
          </div>
          <div>
            <p className={style.auther}>Author: {value?.authername}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
