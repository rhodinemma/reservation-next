import { PrismaClient } from "@prisma/client";
import Description from "./components/Description";
import Rating from "./components/Rating";
import ReservationCard from "./components/ReservationCard";
import RestaurantNavBar from "./components/RestaurantNavBar";
import Reviews from "./components/Reviews";
import Title from "./components/Title";
import Images from "./components/images";

const prisma = new PrismaClient();

interface Restaurant {
    id: number;
    name: string;
    images: string[];
    description: string;
    slug: string;
}

const fetchRestaurantBySlug = async (slug: string): Promise<Restaurant> => {
    const restaurant = await prisma.restaurant.findUnique({
        where: {
            slug,
        },
        select: {
            id: true,
            name: true,
            slug: true,
            description: true,
            images: true,
        }
    });

    if (!restaurant) { throw new Error(); }
    return restaurant;
};

export default async function RestaurantDetails({ params }: { params: { slug: string } }) {
    const restaurant = await fetchRestaurantBySlug(params.slug);
    return (
        <>
            {/* DESCRIPTION PORTION */}
            <div className="bg-white w-[70%] rounded p-3 shadow">
                <RestaurantNavBar />
                <Title />
                <Rating />
                <Description />
                <Images />
                <Reviews />
            </div>
            {/* RESERVATION CARD PORTION */}
            <div className="w-[28%] relative text-reg">
                <ReservationCard />
            </div>
            {/* RESERVATION CARD PORTION */}
            {/* DESCRIPTION PORTION */}
        </>
    );
}