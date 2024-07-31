import { useNavigate } from "react-router-dom"


export default function ButtonGoBack() {
  const navigate = useNavigate()
  const goBack = () => navigate(-1)


  return (
    <button onClick={goBack}>
      назад
    </button>
  )
}
