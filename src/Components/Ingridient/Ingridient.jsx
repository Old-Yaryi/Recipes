import { useEffect, useState } from "react"




const Ingridient = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))

  }, [])
  console.log(posts);
  return (
    posts.map(post => {
      <div>{post.id}</div>
    })
  )
}

export default Ingridient
