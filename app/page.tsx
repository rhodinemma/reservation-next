export default function Home() {
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
          <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
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
              <p>The classics you love prepared with a perfect twist, all served up in an atmosphere that feels just right. That's the Milestones promise. So whether you're celebrating a milestone, making the most of Happy Hour or enjoying brunch with friends, you can be sure that every Milestones experience is a simple and perfectly memorable one.</p>
            </div>
            {/* DESCRIPTION */}
          </div>
        </div>
        {/* DESCRIPTION PORTION */}
      </main>
    </main>
  );
}
