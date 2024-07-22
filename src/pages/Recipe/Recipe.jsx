import { useGetAllIngridients } from "../../Servises/queryIngridients"

const Recipe = () => {

  const { data, isLoading, isSuccess, error } = useGetAllIngridients()
  if (error) return <div>{error.message}</div>
  if (isLoading) return <div> Loading...</div>
  if (isSuccess)
    return (
      <div className="main__grid">
        <aside className="main__aside"><h2>фильтры</h2></aside>
        <div className="main__container">
          <h1>здесь будут рецепты</h1>
          <div>{data.map((item) => (
            <div key={item.id}>{item.name}</div>
          ))}</div>
        </div>
      </div>
    )
}

export default Recipe
