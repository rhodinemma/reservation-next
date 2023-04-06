export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
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
        <main>
          {/* HEADER */}
          <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
            <div className="text-center mt-10">
              <h1 className="text-white text-5xl font-bold mb-2">
                Find your table for any occasion
              </h1>
              {/* SEARCH */}
              <div className="text-left text-lg py-3 m-auto flex justify-center">
                <input
                  className="rounded text-lg mr-3 p-2 w-[450px]"
                  type="text"
                  placeholder="State, City or Town"
                />
                <button className="bg-red-600 text-white px-9 py-2 rounded">Let's go</button>
              </div>
              {/* SEARCH */}
            </div>
          </div>
          {/* HEADER */}
        </main>
      </main>
    </main>
  );
}
