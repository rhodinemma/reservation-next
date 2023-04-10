export default function RestaurantDetails() {
    return (
        <main className="bg-gray-100 min-h-screen w-90">
            <main className="max-w-screen-2xl m-auto bg-white">
                {/* NAVBAR */}
                <nav className="bg-white p-2 flex justify-between">
                    <a href="" className="font-bold text-gray-700 text-2xl font-comf">
                        Reservation Next
                    </a>
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
                {/* DESCRIPTION PORTION */}
                <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
                    <div className="bg-white w-[70%] rounded p-3 shadow">
                        {/* RESTAURANT NAV */}
                        <nav className="flex text-reg border-b pb-2 font-bold">
                            <a href="" className="mr-7">Overview</a>
                            <a href="" className="mr-7">Menu</a>
                        </nav>
                        {/* RESTAURANT NAV */}
                        {/* TITLE */}
                        <div className="mt-4 border-b pb-6">
                            <h1 className="font-bold text-6xl">Milestone Grill</h1>
                        </div>
                        {/* TITLE */}
                        {/* RATING */}
                        <div className="flex items-end">
                            <div className="ratings mt-2 flex items-center">
                                <p>*****</p>
                                <p className="text-reg ml-3">4.8</p>
                            </div>
                            <div>
                                <p className="text-reg ml-4">600 Reviews</p>
                            </div>
                        </div>
                        {/* RATING */}
                        {/* DESCRIPTION */}
                        <div className="mt-4">
                            <p>The classics you love prepared with a perfect twist, all served up in an atmosphere that feels
                                just right. That's the Milestones promise. So whether you're celebrating a milestone, making the
                                most of Happy Hour or enjoying brunch with friends, you can be sure that every Milestones
                                experience is a simple and perfectly memorable one.</p>
                        </div>
                        {/* DESCRIPTION */}
                        {/* IMAGES */}
                        <div>
                            <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
                                7 photos
                            </h1>
                            <div className="flex flex-wrap">
                                <img className="w-56 h-44 mr-1 mb-1" src="" alt="" />
                                <img className="w-56 h-44 mr-1 mb-1" src="" alt="" />
                                <img className="w-56 h-44 mr-1 mb-1" src="" alt="" />
                                <img className="w-56 h-44 mr-1 mb-1" src="" alt="" />
                                <img className="w-56 h-44 mr-1 mb-1" src="" alt="" />
                            </div>
                        </div>
                        {/* IMAGES */}
                        {/* REVIEWS */}
                        <div>
                            <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">What 100 people are saying</h1>
                            <div>
                                {/* REVIEW CARD */}
                                <div className="border-b pb-7 mb-7">
                                    <div className="flex">
                                        <div className="w-1/6 flex flex-col items-center">
                                            <div
                                                className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center">
                                                <h2 className="text-white text-2xl">NR</h2>
                                            </div>
                                            <p className="text-center font-bold">Nagwere Rhodin</p>
                                        </div>
                                        <div className="ml-10 w-5/6">
                                            <div className="flex items-center">
                                                <div className="flex mr-5">
                                                    *****
                                                </div>
                                            </div>
                                            <div className="mt-5">
                                                <p className="text-lg font-light">The Greek restaurant's service was top-notch
                                                    and made our experience even better. I was impressed by the quality of the
                                                    ingredients used in the Greek restaurant's dishes.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* REVIEW CARD */}
                            </div>
                        </div>
                        {/* REVIEWS */}
                    </div>
                    {/* RESERVATION CARD PORTION */}
                    <div className="w-[28%] relative text-reg">
                        <div className="fixed w-[17%] bg-white rounded p-3 shadow">
                            <div className="text-center border-b pb-2 font-bold">
                                <h4 className="mr-7 text-lg">Make a Reservation</h4>
                            </div>
                            <div className="my-3 flex flex-col">
                                <label htmlFor="">Party size</label>
                                <select name="" className="py-3 border-b font-light" id="">
                                    <option value="">1 person</option>
                                    <option value="">2 people</option>
                                </select>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex flex-col w-[48%]">
                                    <label htmlFor="">Date</label>
                                    <input type="text" className="py-3 border-b font-light w-28" />
                                </div>
                                <div className="flex flex-col w-[48%]">
                                    <label htmlFor="">Time</label>
                                    <select name="" className="py-3 border-b font-light" id="">
                                        <option value="">1:00 PM</option>
                                        <option value="">2:00 PM</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mt-5">
                                <button className="bg-red-600 rounded text-white px-4 font-bold w-full h-10">Find a
                                    Time</button>
                            </div>
                        </div>
                    </div>
                    {/* RESERVATION CARD PORTION */}
                </div>
                {/* DESCRIPTION PORTION */}
            </main>
        </main>
    );
}