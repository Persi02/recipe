import React from 'react'
import './style.scss'
import SearchIcon from '../../icons/SearchIcon'
import Input from '../input/Input'

function SearchBar() {
    return (
        <div className="search">
            <SearchIcon />
            <Input type="text" className="input_none" placeholder="email" />
        </div>
    )
}


export default SearchBar