import './IngridientsTableHeader.scss'

const IngridientsTableHeader = () => {
  return (
    <div className="tableheader">
      <div className="tableheader__item name">Наименование</div>
      <div className="tableheader__item inci">INCI</div>
      <div className="tableheader__item ph">PH</div>
      <div className="tableheader__item solubility">Растворимость</div>
      <div className="tableheader__item function">Функционал</div>
      <div className="tableheader__item description">Краткое описание</div>
    </div>
  )
}

export default IngridientsTableHeader
