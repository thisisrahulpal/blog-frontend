import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
        <div className="flex flex-col  fixed bottom-0 w-full opacity-90">
          <div className="px-7">
            <div className="flex justify-end mb-8">
              {/* New Tweet button */}
              <Link to="/tweet">
                <button className="bg-blue-500 text-white w-14 h-14 rounded-full">
                  <i className="fa-solid fa-plus fa-xl"></i>
                </button>
              </Link>
            </div>
          </div>
          <div className="p-4 bg-black text-white w-full border-t border-gray-700/75">
            <div className="flex justify-around">
              <button>
                <i className="fa-solid fa-house fa-xl opacity-90"></i>
              </button>
              <button>
                <i className="fa-solid fa-magnifying-glass fa-xl opacity-90"></i>
              </button>
              <button>
                <i className="fa-solid fa-bell fa-xl opacity-90"></i>
              </button>
              <button>
                <i className="fa-regular fa-envelope fa-xl opacity-90"></i>
              </button>
            </div>
          </div>
        </div>
        {/* Your bottom bar content goes here */}
        
    </div>
  )
}

export default Menu