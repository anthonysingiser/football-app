import React, { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
    const [data , setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
      axios(`https://v3.football.api-sports.io/leagues`)
        .then((response) => {
          setData(response.data)
        })
        .catch((error) => {
          console.error("Error fetching data: ", error)
          setError(error)
        })
        .finally(() => {
          setLoading(false)
        })
    }, [])

    if (loading) return "Loading..."
    if (error) return "Error!!"
  
  return(
    <>
      {console.log(data)}
    </>
  )
}