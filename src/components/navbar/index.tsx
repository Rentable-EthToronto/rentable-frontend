import React from "react";
import Link from "next/link";
import Logo from "./logo";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useWeb3 } from "../../context/web3Context";

export const Navbar = () => {
  const { address } = useWeb3();

  return (
    <nav className="flex justify-around items-center">
      <Logo />
      <ul className="flex">
        <li>
          <Link href="/" id="listings">
            <div className="grow-on-hover   whitespace-nowrap p-3 font-normal text-slate-700 hover:font-semibold ">
              Listings
            </div>
          </Link>
        </li>

        {address && (
          <li>
            <Link href={`/collection/${address}`} id="my collection">
              <div className="grow-on-hover  whitespace-nowrap p-3 font-normal text-slate-700 hover:font-semibold ">
                My Collection
              </div>
            </Link>
          </li>
        )}
      </ul>
      <ConnectButton />
    </nav>
  );
};
export default Navbar;
