import React from "react";

const Header = () => {
  return (
    <nav className="w-full py-4">
      <div className="flex justify-between items-center">
        <div className="start w-fit">
          Meet
          <p className="text-sm">makwana</p>
        </div>
        <div className="end w-fit"> World</div>
      </div>
    </nav>
  );
};

export default Header;
