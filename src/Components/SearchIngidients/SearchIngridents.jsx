

import './SearchIngridients.scss'

// eslint-disable-next-line react/prop-types
const SearchIngridents = ({ search, searchData }) => {


  return (
    <>
      <div className="search__input-container">
        <input className="search__ingridients"
          value={search}
          onChange={searchData}
          type="search"
          name="srch-ingr" id="srch-ingr"
          placeholder='поиск по наименованию..' />
        {/* <span className="material-symbols-outlined">
          manage_search
        </span> */}


      </div>
      <div className='search__add'>
        <button className='search__add-btn'>Добавить новый ингридиент</button>
      </div>
    </>
  )
}

export default SearchIngridents
