import React from 'react';


function sayHello() {
  alert('Hello!');
}

const SearchBar = () => (
  <form action="/" method="get">
    <label htmlFor="header-search">
      <span className="visually-hidden">Search Specific Cards</span>
    </label>
    <input
      type="text"
      id="header-search"
      placeholder="Search Cards...."
      name="s"
    />
    <button type="submit" onClick={sayHello}>Search</button>
  </form>
);

export default SearchBar;
