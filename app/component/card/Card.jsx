"use client";
import React, { useState, useEffect } from "react";
import style from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
import MarkdownPreview from "@/app/component/MarkdownPreview";

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
    <div className={style.container}>
      <div className={style.imageContainer}>
        {isVideo(value.image) ? (
          <video
            style={{
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            controls
            autoPlay
            className={style.image}
          >
            <source src={value.image} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image
            src={value.image}
            alt="cover Images"
            fill
            className={style.image}
          />
        )}
      </div>
      <div className={style.textContainer}>
        <Link href={`/blog/${value.slug}/${value._id}`} className={style.title}>
          {truncateText(value?.title, 150)}
        </Link>

        <MarkdownPreview markdown={clientContent} />
        <div className={style.cardbottombox}>
          <div>
            <Link
              href={`/blog/${value.slug}/${value._id}`}
              className={style.link}
            >
              Read More..
            </Link>
          </div>
          <div>
            <p className={style.auther}>{value?.authername}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
