import Nav from '@/app/ui/dashboard/nav';
import Link from 'next/link';
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.component}>
        <Link href="../../login" className="link">
            <p>Log in</p>
        {/* LOG IN or SELLER'S NAME */}
        </Link>
        <Nav />
        <Link href={'/'}>
          <img className={styles.img} src='/logo-justbird.png' alt="" />
        </Link>
    </div>
  );
}
