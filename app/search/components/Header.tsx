export default function Header() {
    return (
        <div className="bg-gradient-to-r to-[#5F6984] from-[#0f1f47] p-2">
            {/* SEARCH */}
            <div className="text-left text-lg py-3 m-auto flex justify-center">
                <input className="rounded text-lg mr-3 p-2 w-[450px]" type="text" placeholder="State, City or Town" />
                <button className="bg-red-600 text-white px-9 py-2 rounded">
                    Let's go
                </button>
            </div>
            {/* SEARCH */}
        </div>
    );
}