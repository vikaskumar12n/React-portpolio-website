import { useState } from "react";

function Navbar() {
  const [menuState, setMenuState] = useState("menu");

  const toggleMenu = () => {
    if (menuState === "menu") {
      setMenuState("close");
    } else {
      setMenuState("menu");
    }
  };
  const closeMenu = () => {
    setMenuState("menu");
  };

  return (
    <nav className="bg-white md:flex items-center justify-around sticky top-0 px-4 py-6">
      <div className="flex justify-between items-center">
        <span className="text-4xl">
          <a href="#home">VB</a>
        </span>
        <svg
          className="md:hidden cursor-pointer"
          name={menuState}
          onClick={toggleMenu}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{
            fill: "rgba(0, 0, 0, 1)",
            transform: "",
            msFilter: "",
          }}
        >
          <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
        </svg>
      </div>
      <div className="text-2xl md:flex items-center">
        <ul
          className={`bg-white w-full flex flex-col md:flex-row items-center gap-4 p-4 z-[1] md:z-auto md:static absolute left-0 md:opacity-100 ${
            menuState === "menu"
              ? "top-[-400px] opacity-0"
              : "top-[80px] opacity-100"
          } transition-all ease-in duration-500`}
        >
          <li>
            <a onClick={closeMenu} href="#about">
              About
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#experience">
              Experience
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
