import { PrismaClient } from "@prisma/client";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import SearchSideBar from "./components/SearchSideBar";

const prisma = new PrismaClient();

const fetchRestaurantsByCity = async (city: string | undefined) => {
    const select = {
        id: true,
        name: true,
        main_image: true,
        price: true,
        cuisine: true,
        location: true,
        slug: true,
    }

    if (!city) return await prisma.restaurant.findMany({ select });

    return await prisma.restaurant.findMany({
        where: {
            location: {
                name: {
                    equals: city.toLowerCase()
                }
            }
        }, select
    })
}

const fetchLocations = async () => {
    return await prisma.location.findMany()
}

const fetchCuisines = async () => {
    return await prisma.cuisine.findMany()
}


export default async function Search({ searchParams }: { searchParams: { city: string } }) {
    const restaurants = await fetchRestaurantsByCity(searchParams.city);
    const locations = await fetchLocations();
    const cuisines = await fetchCuisines();
    // console.log({ restaurants })
    return (
        <main>
            <Header />
            <div className="flex py-4 m-auto w-2/3 justify-between items-start">
                <SearchSideBar locations={locations} cuisines={cuisines} />
                <div className="w-5/6">
                    {restaurants.length ? (<>{restaurants.map((restaurant) => <RestaurantCard restaurant={restaurant} key={restaurant.id} />)} </>) : <h1 className="text-2xl text-center">No restaurants found</h1>}
                </div>
            </div>
        </main>
    );
}