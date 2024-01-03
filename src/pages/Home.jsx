import React from 'react'
import Feed from '../Components/Feed/Feed'
import Menu from '../Components/Feed/Menu'

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Feed />
      <Menu/>
    </div>
  )
}

export default Home