import React from 'react'
import Navbar from './components/Navbar'
import ExpenseForm from './components/ExpenseForm'
// import Sidebar from './components/Sidebar'

const Home = () => {
  return (
    <div className='min-h-screen bg-green-100 relative'>
      <Navbar />
      {/* <Sidebar /> */}
      {/* <p>hello</p> */}
      <ExpenseForm />
    </div>
  )
}

export default Home
