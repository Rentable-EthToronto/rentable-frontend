import Header from "./header";
import Main from "./main";

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <div className="leading-normal tracking-normal min-h-screen h-full space-t-5 bg-cover bg-fixed bg-[url('/background.png')]">
      <Header />
      <Main>{children}</Main>
    </div>
  );
};

export default Layout;
