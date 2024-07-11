import Menu from "../component/menu/Menu";
import style from "./single.module.css";
import Image from "next/image";

const SinglePage = async ({ params }) => {
  let { slug } = params;

  let data = await fetch(`${process.env.BASE_URL}/api/blogpost/${slug}`, { cache: 'no-store' });
  data = await data.json();
  let newdata = data?.data;

  return (
    <div className={style.container}>
      <Image
        src={newdata.image}
        alt={newdata.title}
        width={1200}
        height={350}
        className={style.image}
      />
      <div className={style.content}>
        <h1 className={style.title}>{newdata.title}</h1>
        <p
          className={style.text}
          dangerouslySetInnerHTML={{ __html: newdata.content }}
        ></p>
      </div>
    </div>
  );
};

export default SinglePage;
