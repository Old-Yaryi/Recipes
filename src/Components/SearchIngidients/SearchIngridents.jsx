
import './SearchIngridients.scss'




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
          placeholder='поиск по '
          id="searchIngridients"
        />
        <select className='search__select' id="searchType" onChange={typeOfSearch} >
          <option className='search__option' value="title">наименованию</option>
          <option className='search__option' value="INCI">INCI</option>
        </select>


      </div>
      <div className='search__add'>
        <button className='search__add-btn'>Добавить новый ингридиент</button>
      </div>
    </>
  )
}

export default SearchIngridents
