"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
    const router = useRouter();
    const [location, setLocation] = useState("");
    return (
        <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
            <div className="text-center mt-10">
                <h1 className="text-white text-5xl font-bold mb-2">
                    Find your table for any occasion
                </h1>
                {/* SEARCH */}
                <div className="text-left text-lg py-3 m-auto flex justify-center">
                    <input className="rounded text-lg mr-3 p-2 w-[450px]" type="text"
                        placeholder="State, City or Town" value={location} onChange={(e) => setLocation(e.target.value)} />
                    <button className="bg-red-600 text-white px-9 py-2 rounded" onClick={() => { if (location === "banana") return; router.push("/search") }}>
                        Let's go
                    </button>
                </div>
                {/* SEARCH */}
            </div>
        </div>
    );
}