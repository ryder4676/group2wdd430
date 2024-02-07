import Link from 'next/link';

const links = [
    { name: 'Home', href: '/app'},
    { name: 'Products', href: '/dashboard/products'},
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