import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useUserData } from '../hooks/useUserData'

type useQueryType = {
  data: any
  isLoading: boolean
  isError: boolean
  error: any
}

const UserDetails = () => {
  const { userId } = useParams()
  const { data, isLoading, isError, error }: useQueryType = useUserData(userId)

  if (isLoading) {
    return <h1>loading...</h1>
  }
  if (isError) {
    return (
      <div>
        <h1>{error.message}</h1>
        <Link to="/rq-super-heroes">back to homepage</Link>
      </div>
    )
  }
  return (
    <div>
      <p>user id: {data.data.id}</p>
      <h1>{data?.data.name}</h1>
      {data?.data?.company && data.data.company.name}
    </div>
  )
}

export default UserDetails
