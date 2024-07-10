
import { useParams } from "react-router-dom"



const Ingridient = () => {
  const { id } = useParams()

  return (
    <div>
      {id}
    </div>
  )
}

export default Ingridient
