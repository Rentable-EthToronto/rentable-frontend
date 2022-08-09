import logo from "../../assets/images/Rentable.png";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" id="home">
      <div className="w-24">
        <Image src={logo} alt="Rentable Logo" />
      </div>
    </Link>
  );
};

export default Logo;
