import Link from "next/link";
import { DrawerDemo } from "./Basket";

const Navbar = () => {
  return (
    <nav className="text-white bg-main h-12 w-full flex justify-center items-center py-10">
      <ul className="flex w-full h-full items-center justify-between px-8">
        <ul className="flex gap-8">
          <li>
            <Link href="/" className="font-bold">
              Home
            </Link>
          </li>
          <li>
            <Link href="/saved" className="font-bold">
              Saved Cocktails
            </Link>
          </li>
        </ul>
        <li>
          <DrawerDemo />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
