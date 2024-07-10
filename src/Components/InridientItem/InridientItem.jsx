


// eslint-disable-next-line react/prop-types
const InridientItem = ({ title, INCI, ph, solubility, functions, descripton }) => {
  return (
    <div className="table__contaner" >
      <div className="table__item name">{title}</div>
      <div className="table__item inci">{INCI}</div>
      <div className="table__item ph">{ph}</div>
      <div className="table__item solubility">{solubility}</div>
      <div className="table__item function"  >{functions}</div>
      <div className="table__item description">{descripton}</div>
    </div>


  )
}

export default InridientItem
