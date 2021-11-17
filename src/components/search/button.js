import React from 'react';
import { SearchIcon } from "@heroicons/react/solid";

const Button = ({ setSearch }) => {
  return (
    <>
        <button className="rounded-lg bg-blue-500 text-white py-3 px-10 flex items-center" onClick={setSearch}>
          <SearchIcon className="h-5 w-5"/>&nbsp;&nbsp;Search
        </button>
    </>
  );
};

export default Button;
