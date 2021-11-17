import React, { useEffect, useState } from 'react';
import instance from "../../apis/axios";
import Suggestion from "./suggestion";

const searchStyle = "appearance-none rounded-l-lg relative block w-full " +
  "px-4 py-3 border-l border-b border-t border-r-0 border-gray-300 " +
  "placeholder-gray-500 text-gray-900 rounded-l-md focus:outline-none " +
  "focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm";

const SearchInput = () => {
  const [keyword, setKeyword] = useState('');
  const [suggestion, setSuggestion] = useState('');

  useEffect(() => {
    if (keyword.length > 1) {
      const fetchData = async () => {
        // gets base url from axios.js and parse the extension from request
        const request = await instance.get('/b5544baebde4bfe9fe2d12e8e5502cbf/raw/e026dab444155edf2f52122aefbb80347c68de86/suggestion.json');
        setSuggestion(request.data.suggestions);
      }
      fetchData();
    } else {
      setSuggestion([]);
    }
  },[keyword]);

  return (
    <>
        <input className={searchStyle}
               type="search"
               value={keyword}
               onChange={(e) => setKeyword(e.target.value)}
        />
        <Suggestion suggestion={suggestion} />
    </>
  );
};

export default SearchInput;
