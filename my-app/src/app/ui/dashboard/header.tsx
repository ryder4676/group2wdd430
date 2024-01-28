import Nav from '@/app/ui/dashboard/nav';
import Link from 'next/link';
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.component}>
        <img className="logo" src={require('../../assets/logo.png')} alt="Handcrafted Haven logo"/>
        <Nav />
        <Link href="../../login" className="link">
            <p>Log in</p>
        {/* LOG IN or SELLER'S NAME */}
        </Link>
    </div>
  );
}
