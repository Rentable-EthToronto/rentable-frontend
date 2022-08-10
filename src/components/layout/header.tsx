import Navbar from "../navbar";

const Header = () => {
  return (
    <header className="sticky top-0 z-20 bg-[#18181F] opacity-90 pt-1 pb-2">
      <div className="max-w-5xl mx-auto">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
