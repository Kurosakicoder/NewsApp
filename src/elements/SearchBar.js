import React, { useState, useRef } from 'react';
import SearchIcon from '../images/search.png'
import { StyledSearchBarContent } from '../styles/StyledSearchBar'

const SearchBar = ({ callback }) => {
    const [state, setState] = useState('');
    const timeOut = useRef(null);

    const doSearch = event => {
        //console.log(event.target.value)
        const { value } = event.target;
        clearTimeout(timeOut.current);
        setState(value)

        timeOut.current = setTimeout(() => {
            callback(value)
        }, 500)
    }

    return (
        <>
            {/* <h1>Search Search Search Search Search</h1> */}
            <StyledSearchBarContent>
                <img src={SearchIcon} alt="search" className="fa-search" />
                <input
                    type="text"
                    placeholder="Search News"
                    onChange={doSearch}
                    value={state}
                />
            </StyledSearchBarContent>
            <hr></hr>

        </>
    )
}

export default SearchBar