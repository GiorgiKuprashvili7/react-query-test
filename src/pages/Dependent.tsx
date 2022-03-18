import React from 'react'

type props = { email: string }

const Dependent = ({ email }: props) => {
  return <div>{email}</div>
}

export default Dependent
