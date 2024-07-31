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

export const useSolubilityIngridients = () => {
  const data = useQuery({
    queryKey: ['solubility'],
    queryFn: getAllIngridients,

  })
  return data
}

// export const filterSalut = (fil) => {
//   const { data, isLoading, isSuccess, error } = useSolubilityIngridients()
//   if (error) return console.log(error.message)
//   if (isLoading) return console.log('Loading')
//   if (isSuccess) data.filter(item => {
//     return item.inci.includes(fil)
//   })

// }