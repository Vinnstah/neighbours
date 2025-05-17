import React from 'react';


const SearchBar = () => {
  return (
    <article className='wrapper'>
        <div className='InputField'>
        <input type="text" className='SearchBar' placeholder='Vad letar du efter?'>
        </input>  
        <button className='SearchBtn'>Sök</button>
        </div>
    </article>
  );
};

export default SearchBar;