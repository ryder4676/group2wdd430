import Image from "next/image";
import styles from "./footer.module.css";
export default function Footer(){
    return(
        <div className={styles.component}>
            <p>&copy; 2024</p>
            <p>Ailen Mansilla, Jayson Ronals, Ammon Jones, Godspower Okonkwo, Martin Ssemugabi</p>
            <p>Contact: man22007@byui.edu</p>
            <Image className={styles.img} src='/logo-justbird.png' alt="Handcrafted Haven logo"/>
        </div>
    );
}