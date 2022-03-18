import React, { Fragment, useState } from 'react'
import { useInfiniteQuery } from 'react-query'
import { Link } from 'react-router-dom'
import users from '../api/users'

const getUsers = ({ pageParam = 1 }) => {
  return users.get(`?_limit=2&_page=${pageParam}`)
}

const RQsuperheroes = () => {
  const [search, setSearch] = useState('')
  const {
    data,
    isLoading,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  }: any = useInfiniteQuery(['users'], getUsers, {
    getNextPageParam: (_lastpage, pages) => {
      if (pages.length < 4) {
        return pages.length + 1
      } else {
        return undefined
      }
    },
  })

  if (isLoading) {
    return <h1>loading</h1>
  }

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {data?.pages.map((group: any, index: any) => {
        return (
          <Fragment key={index}>
            {group.data.map((user: any) => {
              return (
                <div key={user.id}>
                  <h3>{user.name}</h3>
                  <Link to={`/rq-super-heroes/${user.id}`}>
                    see user details{' '}
                  </Link>
                </div>
              )
            })}
          </Fragment>
        )
      })}
      <button disabled={!hasNextPage} onClick={fetchNextPage}>
        load more
      </button>
      {isFetching && !isFetchingNextPage ? <h1>loading..</h1> : null}
    </div>
  )
}

export default RQsuperheroes
