import React from 'react';
import SearchInput from "./searchInput";
import Button from "./button";

const SearchBar = ({ setSearch }) => {
  return (
    <>
    <div className="container mx-auto my-4 px-4 lg:px-20 flex items-center">
      <SearchInput />
      <Button setSearch={setSearch} />
    </div>

  </>
);
};

export default SearchBar;
