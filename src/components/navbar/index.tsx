import React from "react";
import Logo from "./logo";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export const Navbar = () => {
  return (
    <nav className="flex justify-center items-center">
      <Logo />
      <ConnectButton />
    </nav>
  );
};
export default Navbar;
