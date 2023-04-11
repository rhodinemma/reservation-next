import Description from "./components/Description";
import Header from "./components/Header";
import Rating from "./components/Rating";
import ReservationCard from "./components/ReservationCard";
import RestaurantNavBar from "./components/RestaurantNavBar";
import Reviews from "./components/Reviews";
import Title from "./components/Title";
import Images from "./components/images";

export default function RestaurantDetails() {
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