import logo from "../../assets/images/Rentable.png";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" id="home">
      <div className="w-24">
        {/* <Image src={logo} alt="Rentable Logo" /> */}
        <a
          className="flex items-center text-green-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
          href="#"
        >
          Rent
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
            able
          </span>
        </a>
      </div>
    </Link>
  );
};

export default Logo;
