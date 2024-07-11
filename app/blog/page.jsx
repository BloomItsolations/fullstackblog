import styles from "./blog.module.css";
import CardList from "../component/cardList/CardList";

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Blog</h1>
      <div className={styles.content}>
        <CardList />
      </div>
    </div>
  );
};

export default BlogPage;
