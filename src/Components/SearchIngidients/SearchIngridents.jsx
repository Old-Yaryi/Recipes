

// import { useState } from 'react'
import './SearchIngridients.scss'




// eslint-disable-next-line react/prop-types
const SearchIngridents = ({ search, searchData, setSearchOfType }) => {

  function typeOfSearch(e) {
    setSearchOfType(e.target.value)
  }

  return (
    <>
      <div className="search__input-container">
        <input className="search__ingridients"
          value={search}
          onChange={searchData}
          type="search"
          name="srch-ingr" id="srch-ingr"
          placeholder='поиск по '
        />
        <select className='search__type' name="searchType" id="searchType" onChange={typeOfSearch} >
          <option value="title">Наименованию</option>
          <option value="INCI">INCI</option>
        </select>


      </div>
      <div className='search__add'>
        <button className='search__add-btn'>Добавить новый ингридиент</button>
      </div>
    </>
  )
}

export default SearchIngridents
