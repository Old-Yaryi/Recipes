import { useState } from "react"
import IngidietsAside from "../../Components/IngidietsAside/IngidietsAside"
import IngridientsTableHeader from "../../Components/IngridientsTableHeader/IngridientsTableHeader"
import SearchIngridents from "../../Components/SearchIngidients/SearchIngridents"
import InridientItem from "../../Components/InridientItem/InridientItem"
import { useQuery } from "@tanstack/react-query"
import './Ingridients.scss'
import { Link } from "react-router-dom"


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
  }

  const filteredOfName =
    isLoading ? 'loading...' :
      data.filter(ingridient => {
        return ingridient.title.toLowerCase().includes(search)
      })
  const filteredOfInci =
    isLoading ? 'Loding...' :
      data.filter(ingridient => {
        return ingridient.INCI.join(' / ').toLowerCase().includes(search.toLowerCase())
      })

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
              : data?.length ?
                data.map((post) => (
                  <Link key={post.id} to={`/ingridient/${post.id}`}>
                    <InridientItem
                      title={post.title}
                      INCI={post.INCI.join(' / ')}
                      ph={post.ph}
                      solubility={post.solubility.join(' / ')}
                      functions={post.functions.join(', ')}
                      descripton={post.descripton}
                    />
                  </Link>))
                :
                <div>{error.message}</div>}
            </div>
            :
            <div>{isLoading ? '...Loading' : data?.length ? filteredOfName.map((post) => (
              <Link key={post.id} to={`/ingridient/${post.id}`}>
                <InridientItem
                  title={post.title}
                  INCI={post.INCI.join(' / ')}
                  ph={post.ph}
                  solubility={post.solubility.join(' / ')}
                  functions={post.functions.join(', ')}
                  descripton={post.descripton}
                />
              </Link>))
              :
              <div>{error.message}</div>}
            </div>

          :

          // рендеринг с поиском по INCI
          search === '' ?
            <div>{isLoading ? '...Loading'
              : data?.length ?
                data.map((post) => (
                  <Link key={post.id} to={`/ingridient/${post.id}`}>
                    <InridientItem
                      title={post.title}
                      INCI={post.INCI.join(' / ')}
                      ph={post.ph}
                      solubility={post.solubility.join(' / ')}
                      functions={post.functions.join(', ')}
                      descripton={post.descripton}
                    />
                  </Link>))
                :
                <div>{error.message}</div>}
            </div>
            :
            <div>{isLoading ? '...Loading' : data?.length ? filteredOfInci.map((post) => (
              <Link key={post.id} to={`/ingridient/${post.id}`}>
                <InridientItem
                  title={post.title}
                  INCI={post.INCI.join(' / ')}
                  ph={post.ph}
                  solubility={post.solubility.join(' / ')}
                  functions={post.functions.join(', ')}
                  descripton={post.descripton}
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
