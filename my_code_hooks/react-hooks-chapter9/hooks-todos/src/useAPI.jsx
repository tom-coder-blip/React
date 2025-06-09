import {useState, useEffect} from 'react'
import axios from 'axios'

const useAPI = endpoint => {
  const [data, setData] = useState([]) // initial state empty array and setData: a function to update data after fetching from the API.

  //To call data when component is mounted, 
  useEffect(()=> {
    getData() //It calls getData(), which is the function that performs the actual API request.
  },[])

  //getData is an async function that performs a GET request to the given endpoint.
  const getData = async () => {
    const response = await axios.get(endpoint) //fetches the data from the API.
    setData (response.data) //The response.data (which contains the actual list of todos or other content) is saved into the data state using setData.


  }

  return data
}

export default useAPI
