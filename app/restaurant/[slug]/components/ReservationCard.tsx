"use client";

export default function ReservationCard() {
    return (
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
            <div>
                <button className="bg-red-600 rounded text-white px-4 font-bold w-full h-10">Find a
                    Time</button>
            </div>
        </div>
    );
}