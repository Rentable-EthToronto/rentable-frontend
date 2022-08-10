import React from "react";
import Link from "next/link";
import Logo from "./logo";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useWeb3 } from "../../context/web3Context";

const Navbar = () => {
  const { address } = useWeb3();

  return (
    <nav className="flex justify-around items-center pt-4">
      <Logo />
      <ul className="flex">
        <li>
          <Link href="/listings" id="listings">
            <button className="grow-on-hover   whitespace-nowrap p-3 text-base text-white hover:font-semibold ">
              Listings
            </button>
          </Link>
        </li>

        {address && (
          <li>
            <Link href={`/collection/${address}`} id="my collection">
              <button className="grow-on-hover  whitespace-nowrap p-3 text-base text-white hover:font-semibold">
                My Collection
              </button>
            </Link>
          </li>
        )}
      </ul>
      <ConnectButton />
    </nav>
  );
};
export default Navbar;
