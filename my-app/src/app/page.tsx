import styles from "./page.module.css";
import Header from "./ui/dashboard/header";
import Footer from "./ui/dashboard/footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Header/>
    <div className={styles.component}>  
    <div>
    <img className={styles.image} src="/logo5000x1292222.jpg" alt="Handcraft Image" />
      </div> 
    </div>
    <Footer/>
    </>
  );
}
