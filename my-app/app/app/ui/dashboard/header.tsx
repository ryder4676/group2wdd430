import Nav from './nav';
import Link from 'next/link';
import styles from "./header.module.css";
import Image from 'next/image';

export default function Header() {
  return (
    <div className={styles.component}>
        <Link href="../../login" className="link">
            <p>Log in</p>
        {/* LOG IN or SELLER'S NAME */}
        </Link>
        <Nav />
        <Image className={styles.img} src='/logo-justbird.png' alt="" />
    </div>
  );
}
