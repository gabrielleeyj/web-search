import React from 'react';
import logo from './assets/lion-head-symbol.svg';

const Header = () => {
  return (
    <div className="bg-gray-100 p-1 flex items-center space-x-2">
      <div className="ml-4"><img src={logo} alt="Masthead"/></div>
      <div className="font-sans font-normal text-xs text-gray-600">A Singapore Government Agency Website</div>
    </div>
  );
};

export default Header;
