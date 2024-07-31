import { useParams } from "react-router-dom"
import { useGetAllIngridients } from "../../Servises/queryIngridients"
import './Ingridient.scss'
import ButtonGoBack from "../../Components/ButtonGoBack/ButtonGoBack"


const Ingridient = () => {

  const { id } = useParams()
  const { data, isLoading, isSuccess, error } = useGetAllIngridients()

  const dataIngridient =
    isLoading ? '' :
      isSuccess ? data.filter(item => {
        return item.id == id
      })
        : console.log(error.message);


  return (

    <section className="ingridient">
      <ButtonGoBack />
      {isLoading ? <div>Loading...</div> :
        isSuccess ? dataIngridient.map((post) => (
          <div className="ingridient__item" key={post.id} >
            <div className="ingridient__inner name"><span>Наименование: </span>{post.name}</div>
            <div className="ingridient__inner inci"><span>INCI:  </span>{post.inci.join(' / ')}</div>
            <div className="ingridient__inner ph"><span>PH: </span>{post.ph}</div>
            <div className="ingridient__inner ph_work"><span>Рабочий PH: </span>{post.ph_work}</div>
            <div className="ingridient__inner solubility"><span>Растворимость: </span>{post.solubility.join(', ')}</div>
            <div className="ingridient__inner functions"><span>Функционал: </span>{post.functions.join(' / ')}</div>
            <div className="ingridient__inner precent"><span>% Ввода: </span>{post.precent}</div>
            <div className="ingridient__inner prev-desc"><span>Короткое описание: </span>{post.prev_description}</div>
            <div className="ingridient__inner desc"><span>Полное описание: </span><div>{post.description}</div></div>
            <div className="ingridient__inner note"><span>Заметки: </span>{post.note}</div>
          </div>
        )) : <div>{error.message}</div>}
    </section>


  )
}

export default Ingridient
