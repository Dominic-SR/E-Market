import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-64 bg-grey-100 p-4 h-screen sticky top-16 overflow-y-auto shadow'>
      <h2 className='text-xl font-semibold text-red-500 mb-6'>Sidebar</h2>
      {/* Brand FIlter */}
      <div className="mb-6">
        <h3 className='text-red-500 font-medium'>Brads</h3>
        <label className='flex items-center mb-2 cursor-pointer'>
          <input type='checkbox' className='mr-2 accent-red-500' />
          Redmi
        </label>
      </div>
      {/* Price Range */}
      {/* Ram  */}
      {/* Storage */}
      </div>
  )
}

export default Sidebar