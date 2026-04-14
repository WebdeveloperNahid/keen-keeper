
"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const MyLink = ({href, children, icon}) => {
    const pathname = usePathname();
    console.log(pathname)
    return (
        <Link href={href} className={`flex justify-center items-center gap-2 ${pathname === href ? "text-white bg-green-800 px-3 py-1" : ""}`}>{icon} <span>{children}</span> </Link>
    );
};

export default MyLink;