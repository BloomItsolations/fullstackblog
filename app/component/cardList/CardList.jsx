import React from "react";
import style from "./cardList.module.css";
import Card from "../card/Card";

const CardList = async () => {
  let data = await fetch(`${process.env.BASE_URL}/api/blogpost`, {
    cache: "no-store",
  });
  data = await data.json();
  return (
    <div className={style.container}>
      <div className={style.posts}>
        <div className={style.post}>
          {data &&
            data?.Post?.map((value, index) => (
              <Card key={(index + 1).toString()} value={value} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default CardList;
