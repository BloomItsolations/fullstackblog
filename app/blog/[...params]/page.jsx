import style from "./single.module.css";
import Image from "next/image";
import MarkdownPreview from "@/app/component/MarkdownPreview";
const SinglePage = async ({ params }) => {
  let [slug, _id] = params.params;
  let data = await fetch(
    `${process.env.BASE_URL}/api/blogpost/${slug}/${_id}`,
    {
      cache: "no-store",
    }
  );
  data = await data.json();
  let newdata = data?.data;
  const isVideo = (url) => {
    return /\.(mp4|webm|ogg)$/i.test(url);
  };

  if (!data) {
    return <div>Loading ...</div>;
  }

  return (
    <div className={style.container}>
      {isVideo(newdata?.image) ? (
        <video
          style={{ width: "1000px", height: "500px", objectFit: "contain" }}
          controls
          className={style.media}
        >
          <source src={newdata?.image} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <Image
          src={newdata?.image}
          alt={"cover Image"}
          width={1200}
          height={350}
          className={style.image}
        />
      )}

      <div className={style.content}>
        <h1 className={style.title}>{newdata?.title}</h1>
        <MarkdownPreview markdown={newdata?.content} />
      </div>
    </div>
  );
};

export default SinglePage;
