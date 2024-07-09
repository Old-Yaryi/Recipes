import { useState } from "react"
import IngidietsAside from "../../Components/IngidietsAside/IngidietsAside"
import IngridientsTableHeader from "../../Components/IngridientsTableHeader/IngridientsTableHeader"
import SearchIngridents from "../../Components/SearchIngidients/SearchIngridents"
import { useQuery } from "@tanstack/react-query"
import './Ingridients.scss'


const getData = async () => {
  const responce = await fetch('./Ingridients.json')
  return responce.json()
}


const Ingridients = () => {

  const [search, setSearch] = useState('')
  const [typeSearch, setTypeSearch] = useState('title')

  const { data, error, isLoading } = useQuery({
    queryKey: ['ingridient'],
    queryFn: getData
  })


  function setSearchOfType(searchType) {
    setTypeSearch(searchType)
    console.log(typeSearch);
  }

  const filteredOfName =
    isLoading ? 'loading...' :
      data.filter(ingridient => {
        return ingridient.title.toLowerCase().includes(search.toLocaleLowerCase())
      })
  // const filteredOfInci = 
  //   isLoading ? 'Loding...' :
  //     data.filter(ingridient => {
  //     return ingridient.INCI.toLowerCase().includes(search.toLocaleLowerCase())
  //   })

  return (
    <div className="main__grid">
      <aside className="main__aside"><IngidietsAside /></aside>
      <div className="main__container">
        <h1 className="ingridients_h1">Ингридиенты</h1>
        {typeSearch === 'title' ? <div>Наименование блянах</div> : <div>inci blya</div>}
        <div className="main__searchpanel">
          <SearchIngridents
            search={search} searchData={(e) => setSearch(e.target.value)}
            setSearchOfType={setSearchOfType}
          />
        </div>
        <IngridientsTableHeader />
        {search === '' ?
          <div>{isLoading ?
            '...Loading'
            : data?.length ?
              data.map((post) => (
                <div className="table__contaner" key={post.id}>
                  <div className="table__item name">{post.title}</div>
                  <div className="table__item inci">{post.INCI.join(' / ')}</div>
                  <div className="table__item ph">{post.ph}</div>
                  <div className="table__item solubility">{post.solubility.join(' / ')
                  }</div>
                  <div className="table__item function"  >{post.functions.join(', ')}</div>
                  <div className="table__item description">{post.descripton}</div>
                </div>)
              )
              : <div>{error.message}</div>}</div>
          : <div>{isLoading ?
            '...Loading'
            : data?.length ?
              filteredOfName.map((post) => (
                <div className="table__contaner" key={post.id}>
                  <div className="table__item name">{post.title}</div>
                  <div className="table__item inci">{post.INCI.join(' / ')}</div>
                  <div className="table__item ph">{post.ph}</div>
                  <div className="table__item solubility">{post.solubility.join(' / ')
                  }</div>
                  <div className="table__item function"  >{post.functions.join(', ')}</div>
                  <div className="table__item description">{post.descripton}</div>
                </div>)
              )
              : <div>{error.message}</div>}</div>
        }
      </div>
    </div>
  )
}

export default Ingridients
