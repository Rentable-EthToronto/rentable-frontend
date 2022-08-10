interface IProps {
  children: React.ReactNode;
}

const Main = ({ children }: IProps) => {
  return (
    <main>
      <div className="max-w-[70rem] mx-auto lg:flex ">{children}</div>
    </main>
  );
};

export default Main;
