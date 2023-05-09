import React from "react";
import axios from "axios";
import football_api from "./key";

export default function App() {
  const baseURL = 'https://v3.football.api-sports.io'
  const headers = {
    'x-apisports-key': `${football_api}`
  }


  React.useEffect(() => {
    const [post, setPost] = React.useState(null)

    axios.get(baseURL, headers).then((response) => {
      setPost(response.data)
    }, [])
  })

  if (!post) return null

  return (
    <>
      <h1>
        {console.log(post)}
      </h1>
    </>
  )
}
