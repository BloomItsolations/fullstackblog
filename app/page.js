import styles from "./homepage.module.css";
import CardList from "./component/cardList/CardList";
export default function Home() {
  return (
    <div className={styles.container}>
      <CardList />
    </div>
  );
}
