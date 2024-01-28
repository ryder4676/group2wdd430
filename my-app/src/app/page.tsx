import styles from "./page.module.css";
import Header from "./ui/dashboard/header";
import Footer from "./ui/dashboard/footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Header/>
    <div className={styles.component}>   
       <h1 className={styles.title}>Handcrafted Heaven</h1>
       <img className={styles.image} src="/hub-3852530_1920.jpg" alt="Handcraft Image" />
    </div>
    <Footer/>
    </>
  );
}
