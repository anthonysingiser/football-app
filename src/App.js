import React, { useEffect, useState } from "react";
import football_api from "./key";

export default function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://api.football-data.org/v4/competitions/PL/', 
    { headers: {
      'method': 'get',
      'X-Auth-Token': `${football_api}`
    }})
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data: ', error)
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, []);

  if (loading) return "Loading..."
  if (error) return "Error!!"
  return (
    <>
    {data[0]}
    </>
  )
}