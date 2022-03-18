import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useQuery, useQueryClient } from 'react-query'
import posts from '../api/posts'

const fetchPost = async (id: any) => {
  const res = await posts.get(`/${id}`)
  return res
}

type params = any

const Post = () => {
  const queryClient: any = useQueryClient()
  const navigate = useNavigate()
  const { postId }: params = useParams()

  const { data, isLoading } = useQuery(
    ['post', postId],
    () => fetchPost(postId),
    {
      // initialData: () => {
      //   const post = queryClient
      //     .getQueryData('posts')
      //     ?.data?.find((post: any) => post.id === parseInt(postId))
      //   if (post) {
      //     return { data: post }
      //   } else {
      //     return undefined
      //   }
      // },
    }
  )

  if (isLoading) {
    return <h1>loading...</h1>
  }

  return (
    <div>
      <button onClick={() => navigate(-1)}>back</button>
      <h1>{data?.data.title}</h1>
      <p>{data?.data.body}</p>
    </div>
  )
}

export default Post
