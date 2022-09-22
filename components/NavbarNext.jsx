import React from "react";
import { Navbar, Button } from "flowbite-react";

const NavbarNext = () => {
  return (
    <div>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="https://girlpowertalk.com/">
          <img
            src="https://girlpowertalk.in/wp-content/uploads/2021/10/GPT-logo.png"
            className="mr-3 h-6 sm:h-9"
            alt="GPT Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-white"></span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button color="failure" size="lg">
            <p className="text-white">
              <a href="https://girlpowertalk.com/apply-now/">Apply Now</a>
            </p>
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/" active={true}>
            <p className="text-red-500 text-xl border-b-2 pb-1 border-red-500 hover:scale-125 transition ease-in-out duration-300">
              Landing Page
            </p>
          </Navbar.Link>
          <Navbar.Link href="https://girlpowertalk.in/products/">
            <p className="text-red-500 text-xl hover:border-b-2 border-red-500 hover:scale-125 transition ease-in-out duration-300">
              Products
            </p>
          </Navbar.Link>
          <Navbar.Link href="https://girlpowertalk.com/contact-us">
            <p className="text-red-500 text-xl hover:border-b-2 border-red-500 hover:scale-125 transition ease-in-out duration-300">
              Contact
            </p>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarNext;
