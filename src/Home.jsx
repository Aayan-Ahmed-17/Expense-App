// import { Sidebar } from 'lucide-react'
import React from 'react'
import Navbar from './components/Navbar'
import ExpenseForm from './components/ExpenseForm'
// import Sidebar from './components/Sidebar'

const Home = () => {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm()

//  const method = useForm()
//  console.log(method.watch)
console.log("sldkjflsjd")
  return (
    <div className='min-h-screen bg-green-100 relative'>
      <Navbar />
      {/* <Sidebar /> */}
      <p>hello</p>
      <ExpenseForm />
    </div>
  )
}

export default Home
