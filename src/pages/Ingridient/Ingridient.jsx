
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"

import './Ingridient.scss'

const getData = async () => {
  const responce = await fetch('../../full_ingridient.json')
  return responce.json()
}


const Ingridient = () => {


  const { id } = useParams()


  const { data, isPending, isSuccess, error } = useQuery({
    queryKey: ['ingridient'],
    queryFn: getData
  })




  const dataIngridient =
    isPending ? 'loading' :
      isSuccess ? data.filter(item => {
        return item.id == id
      }) : console.log(error.message);


  return (
    <section className="ingridient">
      {isPending ? <div>Loading...</div> :
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
            <div className="ingridient__inner desc"><span>Полное описание: </span>{post.description}</div>
            <div className="ingridient__inner note"><span>Заметки: </span>{post.note}</div>
          </div>
        )) : <div>{error.message}</div>}
    </section>


  )
}

export default Ingridient
