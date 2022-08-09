import logo from "../../assets/images/Rentable.png";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="w-24">
      <Image src={logo} alt="Rentable Logo" />
    </div>
  );
};

export default Logo;
