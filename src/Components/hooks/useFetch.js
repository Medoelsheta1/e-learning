import { useEffect, useState } from "react"
import axios from "axios"

const useFetch = (url) => {
    const [data , setData] = useState('')
    const [isLoading , setIsLoading] = useState(false)
    
    useEffect(() => {
        setIsLoading(true)
        const fetchData = async () => {
            const res =  await axios.get(`https://e-learning-86f9b-default-rtdb.europe-west1.firebasedatabase.app/courses${url ? '' : '.json'}/${url}`)
            setData(res.data)
            setIsLoading(false)
        }
        fetchData()
        } , [url])
 

  return {
    data,
    isLoading
  }
}

export default useFetch