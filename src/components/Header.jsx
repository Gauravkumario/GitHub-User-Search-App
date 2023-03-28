import React from "react";

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between font-bold text-white">
        <h2 className="text-2xl">DevFinder</h2>
        <div>
          <span className="flex justify-center items-center text-xl">
            <small className="mr-2">Light</small>
            <ion-icon name="sunny" />
          </span>
          <span className="hidden justify-center items-center text-xl">
            <small className="mr-2">Dark</small>
            <ion-icon name="moon" />
          </span>
        </div>
      </header>
    </>
  );
};

export default Header;
