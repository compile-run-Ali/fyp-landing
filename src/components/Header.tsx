import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <div>
    <a className="hover:text-[#088cfc] transition ease-in-out" href={href}>
      {children}
    </a>
  </div>
);

const NavLinkMobile: React.FC<NavLinkProps> = ({ href, children }) => (
  <div className="py-2 px-4">
    <a className="hover:text-[#088cfc] transition ease-in-out" href={href}>
      {children}
    </a>
  </div>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-row border-b border-[#380c7c] pl-5 pr-7 py-3.5 text-[#380c7c]">
      <div className="w-1/5 font-extrabold text-3xl">
        <a className="hover:text-[#088cfc] transition ease-in-out" href="/">
          Wander
        </a>
      </div>
      <div className="w-4/5 font-semibold text-sm flex justify-end items-center">
        <div className="hidden md:flex flex-row space-x-7">
          <NavLink href="#intro">Introduction</NavLink>
          <NavLink href="#method">Methodology</NavLink>
          <NavLink href="#scope">Scope</NavLink>
          <NavLink href="#nav">Navigation</NavLink>
          <NavLink href="#tech">Technology</NavLink>
        </div>
        <div className="md:hidden relative flex justify-center">
          <button className="text-3xl" onClick={toggleMenu}>
            <FiMenu />
          </button>
          {isMenuOpen && (
            <div className="absolute top-12 right-0 bg-white border rounded shadow-md text-[#380c7c]">
              <div className="py-2 px-4">
                <NavLinkMobile href="#intro">Introduction</NavLinkMobile>
              </div>
              <div className="py-2 px-4">
                <NavLinkMobile href="#method">Methodology</NavLinkMobile>
              </div>
              <div className="py-2 px-4">
                <NavLinkMobile href="#scope">Scope</NavLinkMobile>
              </div>
              <div className="py-2 px-4">
                <NavLinkMobile href="#nav">Navigation</NavLinkMobile>
              </div>
              <div className="py-2 px-4">
                <NavLinkMobile href="#tech">Technology</NavLinkMobile>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
