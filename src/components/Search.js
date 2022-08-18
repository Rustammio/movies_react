import React from "react";

const Search = ({ search, searchInp, chan, findM }) => {
    return (
        <div className="search">
            <input
                placeholder="Search"
                value={searchInp}
                onChange={(e) => {
                    chan(e.target.value);
                }}
            />
            <img
                onClick={() => {
                    findM(searchInp);
                }}
                src={search}
                alt="SearchIcon"
            />
        </div>
    );
};

export default Search;
