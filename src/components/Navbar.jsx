import { HandCoins } from 'lucide-react'
import React from 'react'

const Navbar = ({tailwindClasses}) => {
  return (
    <div className={`min-h-10 px-3 py-3 bg-blue-500 grid fixed top-0 left-0 w-full`}>
        <div className='flex items-center gap-1 text-slate-100 '> 
            {/* Icon */}
            <HandCoins size={40}/> 
            <span className='text-2xl font-medium'>Expense App</span>
        </div>
    </div>
  )
}

export default Navbar
