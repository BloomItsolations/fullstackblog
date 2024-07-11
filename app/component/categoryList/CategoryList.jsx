import React from 'react'
import style from './categoryList.module.css'
import Link from 'next/link'
import Image from 'next/image'
const CategoryList =async  () => {

   let data =await fetch(`${process.env.BASE_URL}/api/category`,{cache:'no-store'});
   data=await data.json();

  return (
    <div className={style.container}>
        <h1 className={style.title} >Popular Categories</h1>
          <div className={style.categories}>
              {
                data && data?.category?.map((value)=>(
                  <Link href={`/blog?cat=${value?._id}`} key={value.id} className={`${style.category} ${style[value.title]}`}>
                  <Image 
                    src={value?.image}
                    alt=''
                    width={32}
                    height={32}
                    className={style.image}
                  />
                  {value.title}
                </Link>
                
                ))
              }
        </div>

    </div>
  )
}

export default CategoryList