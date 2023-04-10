import Link from "next/link";

export default function RestaurantMenu() {
    return (
        <main className="bg-gray-100 min-h-screen w-90">
            <main className="max-w-screen-2xl m-auto bg-white">
                {/* NAVBAR */}
                <nav className="bg-white p-2 flex justify-between">
                    <Link href="/" className="font-bold text-gray-700 text-2xl font-comf">
                        Reservation Next
                    </Link>
                    <div>
                        <div className="flex">
                            <button className="bg-blue-400 text-white border p-1 px-4 rounded mr-3">
                                Signin
                            </button>
                            <button className="border p-1 px-4 rounded">Signup</button>
                        </div>
                    </div>
                </nav>
                {/* NAVBAR */}
                {/* HEADER */}
                <div className="h-96 overflow-hidden">
                    <div
                        className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
                        <h1 className="text-7xl text-white capitalize text-shadow text-center">Milestones Grill (Toronto)</h1>
                    </div>
                </div>
                {/* HEADER */}
                <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
                    <div className="bg-white w-[100%] rounded p-3 shadow">
                        {/* RESTAURANT NAV */}
                        <nav className="flex text-reg border-b pb-2 font-bold">
                            <Link href="/restaurant/dummy" className="mr-7">Overview</Link>
                            <Link href="/restaurant/dummy/menu" className="mr-7">Menu</Link>
                        </nav>
                        {/* RESTAURANT NAV */}
                        {/* MENU */}
                        <main className="bg-white mt-5">
                            <div>
                                <div className="mt-4 pb-1 mb-1">
                                    <h1 className="text-4xl font-bold">Menu</h1>
                                </div>
                                <div className="flex flex-wrap justify-between">
                                    {/* MENU CARD */}
                                    <div className="border rounded p-3 w-[49%] mb-3">
                                        <h3 className="font-bold text-lg">Surf and Turf</h3>
                                        <p className="font-light mt-1 text-sm">Grilled 8oz New York Striploin and 6oz Lobster
                                            Tail</p>
                                        <p className="mt-7">$79.00</p>
                                    </div>
                                    {/* MENU CARD */}
                                </div>
                            </div>
                        </main>
                        {/* MENU */}
                    </div>
                </div>
            </main>
        </main>
    );
}