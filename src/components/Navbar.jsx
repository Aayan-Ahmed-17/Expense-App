import { HandCoins } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div className='min-h-9 px-3 py-2 bg-blue-500'>
        <div className='flex items-center gap-1 text-slate-100 '> 
            {/* Icon */}
            <HandCoins size={40}/> 
            <span className='text-2xl font-medium'>Expense App</span>
        </div>
    </div>
  )
}

export default Navbar
