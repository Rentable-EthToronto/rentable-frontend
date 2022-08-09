import Navbar from "../navbar";

const Header = () => {
  return (
    <header className="bg-black  sticky top-0 z-20">
      <div className="max-w-5xl mx-auto">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
