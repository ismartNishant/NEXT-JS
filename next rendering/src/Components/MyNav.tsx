"use client";

import { useState } from "react";
import { Button, Navbar } from "flowbite-react";
import { HiMenuAlt2, HiX } from "react-icons/hi";

export function MyNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <button
          onClick={toggleMenu}
          className="text-gray-700 dark:text-gray-200 md:hidden"
        >
          {isOpen ? <HiX size={30} /> : <HiMenuAlt2 size={30} />}
        </button>
      </div>
      <div className={`w-full md:flex md:w-auto ${isOpen ? '' : 'hidden'}`}>
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
