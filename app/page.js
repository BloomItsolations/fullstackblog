import Link from "next/link";
import Navbar from "./component/navbar/Navbar";
import styles from './homepage.module.css'
import CategoryList from "./component/categoryList/CategoryList";
import CardList from "./component/cardList/CardList";
import Menu from "./component/menu/Menu";
export default function Home({ searchParams }) {
   console.log("SearchParams", searchParams);

   const page = parseInt(searchParams.page) || 1;

  return <div className={styles.container}>
     <CardList/>
  </div>
}