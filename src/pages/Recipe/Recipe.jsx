import { useGetAllIngridients } from "../../Servises/queryIngridients"
import RecipeItem from "../../Components/RecipeItem/RecipeItem"
import ingridentsProps from "./recipeMiddleware.js"
import { useEffect, useState } from "react"
// import { useState } from "react"
// import { filterSalut } from "../../Servises/queryIngridients.js";




const Recipe = () => {


  const [ingridient, setIngridient] = useState([])
  const { data, isLoading, isSuccess, error } = useGetAllIngridients()
  useEffect(() => {
    isSuccess ? setIngridient(data) : []
  }, [data])
  console.log(ingridient);

  if (error) return <div>{error.message}</div>
  if (isLoading) return <div> Loading...</div>

  return (
    <div className="main__grid">
      <aside className="main__aside"><h2>фильтры</h2></aside>
      <div className="main__container">
        <h1>здесь будут рецепты</h1>

        {ingridient?.map((item) => (
          <div key={item.id}>
            <RecipeItem props={ingridentsProps(item)} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Recipe
