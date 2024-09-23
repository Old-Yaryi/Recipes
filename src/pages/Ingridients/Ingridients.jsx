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

  const setSearchOfType = (searchType) => setTypeSearch(searchType);

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
        error && console.log(error.message)

  const IngridientProps = (item) => {
    return {
      title: item.name,
      INCI: item.inci.join(' / '),
      ph: item.ph,
      solubility: item.solubility.join(' / '),
      functions: item.functions.join(' / '),
      descripton: item.prev_description
    }
  }
  const renderData = (data) => {
    return data.map((post) => (
      <Link key={post.id} to={`/ingridient/${post.id}`}>
        <InridientItem {...IngridientProps(post)} />
      </Link>
    ))
  }

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
            isLoading ? <div>...Loading...</div>
              : isSuccess ?
                renderData(data)
                :
                error ? <div>{error.message}</div> : null
            :
            isLoading ? <div>...Loading...</div>
              : isSuccess ? filteredOfName.map((post) => (
                <Link key={post.id} to={`/ingridient/${post.id}`}>
                  <InridientItem {...IngridientProps(post)} />
                </Link>))
                :
                error ? <div>{error.message}</div> : null
          :

          // рендеринг с поиском по INCI
          search === '' ?
            isLoading ? <div>...Loading...</div>
              : isSuccess ?
                renderData(data)
                :
                error ? <div>{error.message}</div> : null
            :
            isLoading ? <div>...Loading...</div>
              : isSuccess ? filteredOfInci.map((post) => (
                <Link key={post.id} to={`/ingridient/${post.id}`}>
                  <InridientItem {...IngridientProps(post)} />
                </Link>))
                :
                error ? <div>{error.message}</div> : null
        }
      </div>
    </div>
  )
}

export default Ingridients
