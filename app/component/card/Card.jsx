'use client'
import React, { useContext } from 'react';
import style from './card.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { ThemeContext } from '../context/ThemeContext';

const Card = ({ value }) => {
    const { toggle, theme } = useContext(ThemeContext);

    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    };
      console.log("truncate, ", truncateText(value?.content, 190) )
    return (
        <div
            className={style.container}
            style={theme === "dark" ? { backgroundColor: "#0f172a" } : { backgroundColor: "#f8f9f9" }}
        >
            <div className={style.imageContainer}>
                <Image
                    src={value.image}
                    alt=''
                    fill
                    className={style.image}
                />
            </div>
            <div className={style.textContainer}>
                <Link href={`/${value?._id}`} className={style.title}>
                    {truncateText(value?.title, 150)}
                </Link>
                <p
                    className={style.desc}
                    dangerouslySetInnerHTML={{ __html: truncateText(value?.content, 190) }}
                ></p>
                <div className={style.cardbottombox}>
                    <div>
                        <Link href={`/${value._id}`} className={style.link}>Read More..</Link>
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
