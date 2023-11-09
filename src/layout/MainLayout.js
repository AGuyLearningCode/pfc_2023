import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
        <header>
            <h1>AVMaster</h1>
        </header>
        <Outlet />
        
    </div>
  )
}

export default MainLayout
