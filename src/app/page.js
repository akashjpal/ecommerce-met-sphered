import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";

export default function Home() {
  return (
    <div className="">
      <div className="header-section flex flex-row w-full px-5 py-1 items-center">
        <div className="mx-2 my-1">
          <Image
            src="/images/Preview.png"
            className="rounded-lg"
            alt="This is a Logo"
            width={50}
            height={30}
          />
        </div>
        <div className="max-w-3xl flex-grow">
          
          <form>
            <input className="w-full px-3 py-3 font-semibold rounded-lg bg-blue-100" type="text" placeholder="Search" />
          </form>
        </div>
        <div className="ml-auto flex flex-row items-center space-x-4">
          <button className="px-4 py-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-md">Login</button>
          <button>
            <FaShoppingCart className="text-[1.5rem]" />
          </button>
        </div>
      </div>
      <div className="main-section">
        <div>
          
        </div>
      </div>
      <div className="brand-section">

      </div>
      <div className="testimonial-section">
      </div>
      <div className="footer-section">
      </div>
    </div>
  );
}
