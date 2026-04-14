
"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const MyLink = ({href, children}) => {
    const pathname = usePathname();
    console.log(pathname)
    return (
        <Link href={href} className={`${pathname === href ? "text-white" : ""}`}>{children} </Link>
    );
};

export default MyLink;