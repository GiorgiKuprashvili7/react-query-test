import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import RQsuperheroes from './pages/RQsuperheroes'
// import SuperHeroes from './pages/SuperHeroes'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import UserDetails from './pages/UserDetails'
import Header from './components/header/Header'
import Posts from './pages/Posts'
import Post from './components/Post'
import Dependent from './pages/Dependent'

const quieryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={quieryClient}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="rq-super-heroes" element={<RQsuperheroes />} />
        <Route path="rq-super-heroes/:userId" element={<UserDetails />} />
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:postId" element={<Post />} />
        <Route
          path="dependent"
          element={<Dependent email="giorga@mail.com" />}
        />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  )
}

export default App
