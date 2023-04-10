import MenuCard from "./MenuCard";

export default function Menu() {
    return (
        <main className="bg-white mt-5">
            <div>
                <div className="mt-4 pb-1 mb-1">
                    <h1 className="text-4xl font-bold">Menu</h1>
                </div>
                <div className="flex flex-wrap justify-between">
                    <MenuCard />
                </div>
            </div>
        </main>
    );
}