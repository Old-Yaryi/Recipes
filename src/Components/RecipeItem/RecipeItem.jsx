

const RecipeItem = ({ props }) => {
  return (
    <div className="table__contaner" >
      <div className="table__item name">{props.title}</div>
      <div className="table__item inci">{props.INCI}</div>
      <div className="table__item ph">{props.ph}</div>
      <div className="table__item solubility">{props.solubility}</div>
      <div className="table__item function"  >{props.functions}</div>
      <div className="table__item description">{props.descripton}</div>
    </div>
  )
}

export default RecipeItem
