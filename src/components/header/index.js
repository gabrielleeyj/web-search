import React from 'react';
import logo from './../../assets/lion-head-symbol.svg';

const Header = () => {
  return (
    <div className="bg-gray-100 py-1 px-4">
      <div className="container mx-auto lg:mx-20 flex items-center space-x-2">
        <div className="ml-16"><img src={logo} alt="Masthead"/></div>
        <div className="font-masthead font-normal text-xs text-gray-600">
          An Official Website of the <strong>Singapore Government</strong>
        </div>
      </div>
    </div>
  );
};

export default Header;
