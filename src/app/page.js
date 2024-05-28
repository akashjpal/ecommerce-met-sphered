import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="header-section flex flex-row ">
         <Image
          src="/images/Preview.png"
          alt="This is a Logo"
          width={50}
          height={30}
        />
        <div>
          <form>
            <input type="text" placeholder="Search" />
          </form>
        </div>
        <div>
          <button className="px-5 py-1 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-md">Login</button>
        </div>
        <div>
          <button>Cart</button>
        </div>
      </div>
      <div className="main-section">

      </div>
      <div className="feature-section">

      </div>
      <div className="testinomial-section">

      </div>
      <div className="footer-section">

      </div>
    </div>
  );
}
