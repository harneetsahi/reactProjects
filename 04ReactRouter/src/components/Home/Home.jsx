import { Link, NavLink } from "react-router";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16 ">
        <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Download Now
              <span className="hidden sm:block text-3xl">Lorem Ipsum</span>
            </h2>

            <Link
              className="inline-flex text-white items-center px-6 py-3 font-medium bg-green-700 rounded-lg hover:opacity-75"
              to="/"
            >
              &nbsp; Download now
            </Link>
          </div>
        </div>

        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
          <img
            className="w-48 sm:w-96 object-cover"
            src="https://images.pexels.com/photos/9350685/pexels-photo-9350685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="image1"
          />
        </div>
      </aside>

      <div className="grid  place-items-center sm:mt-20">
        <img
          className="sm:w-96 w-48"
          src="https://images.pexels.com/photos/13859707/pexels-photo-13859707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="image2"
        />
      </div>

      <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
        React Router Test Page
      </h1>
    </div>
  );
}
