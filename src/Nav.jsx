import NavButton from "./components/NavButton";
import { useState } from "react";

function Nav() {
  const [pageNumber, setPageNumber] = useState(0);

  document.addEventListener("scroll", () => {
    setPageNumber(Math.floor(window.scrollY / 60));
  });

  return (
    <>
      <div className="flex flex-col items-center p-12 sticky top-0 bg-lightOne  drop-shadow-lg">
        <div className="my-12 w-full ">
          <div className="flex justify-between items-center flex-nowrap truncate">
            <p>{pageNumber}</p>
            <NavButton />
          </div>
          <hr className="w-full border-black " />
        </div>
      </div>
    </>
  );
}

export default Nav;
