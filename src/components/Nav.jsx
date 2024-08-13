import NavButton from "./NavButton";
import { useState } from "react";

function Nav() {
  const [pageNumber, setPageNumber] = useState(0);

  document.addEventListener("scroll", () => {
    setPageNumber(Math.floor(window.scrollY / 150));
  });

  return (
    <>
      <div className="flex flex-col items-center px-12 sticky top-0 bg-lightOne ">
        <div className="mt-12 w-full ">
          <div className="flex justify-between flex-nowrap truncate ">
            <p>Pg. {pageNumber}</p>
            <NavButton />
          </div>
        </div>
        <hr className="w-screen border-black mb-0 " />
      </div>
    </>
  );
}

export default Nav;
