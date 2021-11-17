import React, { useState } from 'react';
import SearchBar from './searchBar';
import Results from './results';
import instance from "../../apis/axios";

const Search = () => {
  const [lists, setListing] = useState([]);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(0);
  const [totalResult, setTotalResult] = useState(0);
  const [search, setSearch] = useState(false);

  const handleSearch = () => {
    return setSearch(true);
  }
  if (search) {
    const fetchData = async () => {
      const request = await instance.get('/b5544baebde4bfe9fe2d12e8e5502cbf/raw/44deafab00fc808ed7fa0e59a8bc959d255b9785/queryResult.json');
      setListing(request.data.ResultItems);
      setPage(request.data.Page);
      setPageSize(request.data.PageSize);
      setTotalResult(request.data.TotalNumberOfResults);
    }
    fetchData();
    setSearch(false);
  }

  return (
    <>
      <div className="shadow-md p-4">
        <SearchBar setSearch={handleSearch}/>
      </div>
      <div>
        <Results page={page} pageSize={pageSize} lists={lists} totalResult={totalResult}/>
      </div>
    </>
  );
};

export default Search;
