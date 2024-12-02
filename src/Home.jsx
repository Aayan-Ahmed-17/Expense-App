// import { Sidebar } from 'lucide-react'
import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

const Home = () => {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm()

//  const method = useForm()
//  console.log(method.watch)
  return (
    <div className='min-h-screen bg-green-100 relative'>
      <Navbar />
      <Sidebar />
    </div>
  )
}

export default Home
