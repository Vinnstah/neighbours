import React from 'react';
import SearchBar from '../components/SearchBar';
import CategoryList from '../components/CategoryList';

const SearchPage = () => {
  return (
    <article className='wrapper'>
        <h4>Vad söker du efter?</h4>
        <SearchBar />
        <h3>Hur långt borta lorem ipsum</h3>
        <CategoryList />
    </article>
  );
};

export default SearchPage;