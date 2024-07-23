import { useState } from "react"
import { Link } from "react-router-dom"
import IngidietsAside from "../../Components/IngidietsAside/IngidietsAside"
import IngridientsTableHeader from "../../Components/IngridientsTableHeader/IngridientsTableHeader"
import SearchIngridents from "../../Components/SearchIngidients/SearchIngridents"
import InridientItem from "../../Components/InridientItem/InridientItem"
import { useGetAllIngridients } from "../../Servises/queryIngridients"

import './Ingridients.scss'



const Ingridients = () => {

  const [search, setSearch] = useState('')
  const [typeSearch, setTypeSearch] = useState('title')
  const { data, isLoading, isSuccess, error } = useGetAllIngridients()

  function setSearchOfType(searchType) {
    setTypeSearch(searchType)
  }

  const filteredOfName =
    isLoading ? '' :
      isSuccess ? data.filter(ingridient => {
        return ingridient.name.toLowerCase().includes(search)
      }) :
        error ? console.log(error.message) : null


  const filteredOfInci =
    isLoading ? '' :
      isSuccess ? data.filter(ingridient => {
        return ingridient.inci.join(' / ').toLowerCase().includes(search.toLowerCase())
      }) :
        error ? console.log(error.message) : null



  return (
    <div className="main__grid">
      <aside className="main__aside"><IngidietsAside /></aside>
      <div className="main__container">
        <h1 className="ingridients_h1">Ингридиенты</h1>
        <div className="main__searchpanel">
          <SearchIngridents
            search={search}
            searchData={(e) => setSearch(e.target.value)}
            setSearchOfType={setSearchOfType}
          />
        </div>
        <IngridientsTableHeader />
        {typeSearch === 'title' ?
          // Рендеринг с поиском по наименованию
          search === '' ?
            <div>{isLoading ? '...Loading'
              : isSuccess ?
                data.map((post) => (
                  <Link key={post.id} to={`/ingridient/${post.id}`}>
                    <InridientItem
                      title={post.name}
                      INCI={post.inci.join(' / ')}
                      ph={post.ph}
                      solubility={post.solubility.join(' / ')}
                      functions={post.functions.join(', ')}
                      descripton={post.prev_description}
                    />
                  </Link>))
                :
                <div>{error.message}</div>}
            </div>
            :
            <div>{isLoading ? '...Loading'
              : isSuccess ? filteredOfName.map((post) => (
                <Link key={post.id} to={`/ingridient/${post.id}`}>
                  <InridientItem
                    title={post.name}
                    INCI={post.inci.join(' / ')}
                    ph={post.ph}
                    solubility={post.solubility.join(' / ')}
                    functions={post.functions.join(', ')}
                    descripton={post.prev_description}
                  />
                </Link>))
                :
                <div>{error.message}</div>}
            </div>

          :

          // рендеринг с поиском по INCI
          search === '' ?
            <div>{isLoading ? '...Loading'
              : isSuccess ?
                data.map((post) => (
                  <Link key={post.id} to={`/ingridient/${post.id}`}>
                    <InridientItem
                      title={post.name}
                      INCI={post.inci.join(' / ')}
                      ph={post.ph}
                      solubility={post.solubility.join(' / ')}
                      functions={post.functions.join(', ')}
                      descripton={post.prev_description}
                    />
                  </Link>))
                :
                <div>{error.message}</div>}
            </div>
            :
            <div>{isLoading ? '...Loading' : isSuccess ? filteredOfInci.map((post) => (
              <Link key={post.id} to={`/ingridient/${post.id}`}>
                <InridientItem
                  title={post.name}
                  INCI={post.inci.join(' / ')}
                  ph={post.ph}
                  solubility={post.solubility.join(' / ')}
                  functions={post.functions.join(', ')}
                  descripton={post.prev_description}
                />
              </Link>))
              :
              <div>{error.message}</div>}
            </div>
        }
      </div>
    </div>
  )
}

export default Ingridients
