import React, { useEffect, useState } from 'react';
import { SearchIcon } from "@heroicons/react/solid";
import instance from "../../apis/axios";

const searchStyle = "appearance-none rounded-l-lg relative block w-full " +
  "px-4 py-3 border-l border-b border-t border-r-0 border-gray-300 " +
  "placeholder-gray-500 text-gray-900 rounded-l-md focus:outline-none " +
  "focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm";

const SearchBar = ({ setSearch }) => {
  const [suggestion, setSuggestion] = useState([]);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    async function fetchData() {
      // gets base url from axios.js and parse the extension from request
      const request = await instance.get('/b5544baebde4bfe9fe2d12e8e5502cbf/raw/e026dab444155edf2f52122aefbb80347c68de86/suggestion.json');
      setSuggestion(request.data.suggestions);
      console.log(request.data);
    }
    fetchData();
  },[]);
  return (
    <>
    <div className="container mx-auto my-4 px-4 lg:px-20 flex items-center">
      <input className={searchStyle}
             type="search"
             value={keyword}
             onChange={(e) => setKeyword(e.target.value)}
      />
      <button className="rounded-lg bg-blue-500 text-white py-3 px-10 flex items-center" onClick={setSearch}>
        <SearchIcon className="h-5 w-5"/>&nbsp;&nbsp;Search
      </button>
    </div>
      <ul className="container mx-auto bg-white border-l border-r border-b border-t-0 border-gray-200 lg:px-20 -mt-4">
        {suggestion ? suggestion.map((val, key)=> (
        <li key={key} className="pl-8 pr-2 py-1 border-gray-100 relative cursor-pointer hover:bg-blue-50 hover:text-gray-900">{val}</li>
      )) : ''}</ul>

  </>
);
};

export default SearchBar;
