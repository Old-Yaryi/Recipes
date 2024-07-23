import { useQuery } from "@tanstack/react-query"


const getAllIngridients = async () => {
  const responce = await fetch('../../full_ingridient.json')
  return responce.json()
}

export const useGetAllIngridients = () => {
  const data = useQuery({
    queryKey: ['ingridient'],
    queryFn: getAllIngridients,
    staleTime: 5 * 1000
  })
  return data
} 