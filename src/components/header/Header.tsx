import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="rq-super-heroes">rq super heroes</Link>
          </li>
          <li>
            <Link to="posts">posts</Link>
          </li>
          <li>
            <Link to="dependent">dependent</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
