import Nav from '@/app/ui/dashboard/nav';
import Link from 'next/link';

export default function Header() {
  return (
    <div>
        <img className="logo" src={require('../../assets/logo.png')} alt="Handcrafted Haven logo"/>
        <Nav />
        <Link href="../../login" className="link">
            <p>Log in</p>
        {/* LOG IN or SELLER'S NAME */}
        </Link>
    </div>
  );
}
