import React from 'react'
import style from './menu.module.css'
import Link from 'next/link'
import Image from 'next/image'
import MenuPostWithoutImage from './MenuPostWithoutImage'
const Menu = () => {
    return (
        <div className={style.container}>
            <h2 className={style.subtitle}>{"What's Hot"}</h2>
            <h1 className={style.title}>Most Popular</h1>
            <div className={style.items}>
                <Link href={'/'} className={style.item}>
                    <div className={style.imageContainer}>
                        <Image
                            src={'/images/p1.jpeg'}
                            alt=''
                            fill
                            className={style.image}
                        />
                    </div>
                    <div className={style.textContainer}>
                        <span className={`${style.category} ${style.fashion}`}>fashion</span>
                        <h3 className={style.postTitle}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At quia nesciunt tenetur in minima </h3>
                        <div className={style.detail}>
                            <span className={style.username}>John Doe</span>
                            <span className={style.date}>-01.07.2024</span>
                        </div>

                    </div>
                </Link>


                <Link href={'/'} className={style.item}>
                    <div className={style.imageContainer}>
                        <Image
                            src={'/images/p1.jpeg'}
                            alt=''
                            fill
                            className={style.image}
                        />
                    </div>
                    <div className={style.textContainer}>
                        <span className={`${style.category} ${style.travel}`}>Travel</span>
                        <h3 className={style.postTitle}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At quia nesciunt tenetur in minima </h3>
                        <div className={style.detail}>
                            <span className={style.username}>John Doe</span>
                            <span className={style.date}>-01.07.2024</span>
                        </div>

                    </div>
                </Link>

                <Link href={'/'} className={style.item}>
                    <div className={style.imageContainer}>
                        <Image
                            src={'/images/p1.jpeg'}
                            alt=''
                            fill
                            className={style.image}
                        />
                    </div>
                    <div className={style.textContainer}>
                        <span className={`${style.category} ${style.travel}`}>Travel</span>
                        <h3 className={style.postTitle}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At quia nesciunt tenetur in minima </h3>
                        <div className={style.detail}>
                            <span className={style.username}>John Doe</span>
                            <span className={style.date}>-01.07.2024</span>
                        </div>

                    </div>
                </Link>


                <Link href={'/'} className={style.item}>
                    <div className={style.imageContainer}>
                        <Image
                            src={'/images/p1.jpeg'}
                            alt=''
                            fill
                            className={style.image}
                        />
                    </div>
                    <div className={style.textContainer}>
                        <span className={`${style.category} ${style.food}`}>FOOD</span>
                        <h3 className={style.postTitle}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At quia nesciunt tenetur in minima </h3>
                        <div className={style.detail}>
                            <span className={style.username}>John Doe</span>
                            <span className={style.date}>-01.07.2024</span>
                        </div>

                    </div>
                </Link>


                <Link href={'/'} className={style.item}>
                    <div className={style.imageContainer}>
                        <Image
                            src={'/images/p1.jpeg'}
                            alt=''
                            fill
                            className={style.image}
                        />
                    </div>
                    <div className={style.textContainer}>
                        <span className={`${style.category} ${style.culture}`}>culture</span>
                        <h3 className={style.postTitle}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At quia nesciunt tenetur in minima </h3>
                        <div className={style.detail}>
                            <span className={style.username}>John Doe</span>
                            <span className={style.date}>-01.07.2024</span>
                        </div>

                    </div>
                </Link>


            </div>

           <MenuPostWithoutImage/>

        </div>
    )
}

export default Menu