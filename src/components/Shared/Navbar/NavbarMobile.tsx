import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "../Logo/Logo";
import { BellRing, Menu, Search } from "lucide-react";
import { itemsNavbar } from "../../../../data/itemsNavbar";
import Link from "next/link";

const NavbarMobile = () => {
  return (
    <div className="p-4 flex justify-between">
      <Logo />

      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent side="left" className="bg-black p-4">
          <div className="flex flex-col gap-4">
            {itemsNavbar.map((items) => (
              <Link
                key={items.name}
                href={items.link}
                className="hover:text-gray-300 transition-all duration-300"
              >
                {items.name}
              </Link>
            ))}
          </div>
          <div className="border-[1px] border-white/70 my-5" />
          <div className="flex justify-between gap-6 mt-4">
            <Search className="cursor-pointer" />
            <BellRing className="cursor-pointer" />
            {/* TODO: ADD USER PROFILE */}
            <p>user</p>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavbarMobile;
