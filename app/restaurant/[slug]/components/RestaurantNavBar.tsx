import Link from "next/link";

export default function RestaurantNavBar() {
    return (
        <nav className="flex text-reg border-b pb-2 font-bold" >
            <Link href="/restaurant/dummy" className="mr-7">Overview</Link>
            <Link href="/restaurant/dummy/menu" className="mr-7">Menu</Link>
        </nav >
    );
}