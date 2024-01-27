import Link from 'next/link';

const links = [
    { name: 'Home', href: '/app'},
    { name: 'Sellers', href: '/dashboard/invoices'},
  ];

export default function Nav(){
    return(
        <>
        {links.map((link) => {
        return (
            <Link
            key={link.name}
            href={link.href}
            className="nav-links"
            >
            </Link>
        );
      })}
        </>
    );
}