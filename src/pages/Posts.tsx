import React, { useState } from 'react'
import posts from '../api/posts'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'

type postsType = any

const getPosts = async (numberOfPage: any) => {
  const res = await posts.get('', {
    params: { _limit: 5, _page: numberOfPage },
  })
  return res
}

const Posts = () => {
  const [numberOfPage, setNumberOfPage] = useState(1)

  const { data: posts, isLoading: postsLoading }: postsType = useQuery(
    ['posts', numberOfPage],
    () => getPosts(numberOfPage)
  )

  if (postsLoading) {
    return <h1>loading</h1>
  }

  return (
    <div>
      <h1>Posts</h1>
      <h2>{numberOfPage}</h2>
      <button
        onClick={() => setNumberOfPage((prev) => prev - 1)}
        disabled={numberOfPage === 1}
      >
        prev
      </button>
      <button onClick={() => setNumberOfPage((prev) => prev + 1)}>next</button>
      {posts?.data.map((post: any) => {
        return (
          <Link to={`/posts/${post.id}`} key={post.id}>
            <div className="post">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Posts
