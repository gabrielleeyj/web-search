import React from 'react';

const Suggestion = ({ suggestion }) => {
  return (
    <>
        <ul className="absolute top-28 z-10 flex flex-col flex-grow float-left bg-white shadow-lg border-l border-r border-b border-t-0 border-gray-200">
          { suggestion ? suggestion.map((val, key)=> (
            <li key={key} className="pl-8 pr-2 py-1 border-gray-100 cursor-pointer hover:bg-blue-50 hover:text-gray-900">
              {val}
            </li>
          )) : [] }
        </ul>
    </>
  );
};

export default Suggestion;
