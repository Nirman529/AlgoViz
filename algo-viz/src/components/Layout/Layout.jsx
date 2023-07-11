import React from 'react'
import "./Layout.css"
import { Link, Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div>
            <div className='m-0 d-flex flex-row justify-content-center bg-light border'>
                <button className='Link btn btn-warning border m-3'>
                    <Link to="/">Home</Link>
                </button>
                <button className='Link btn btn-warning border m-3'>
                    <Link to="/aStarPathFinder">Path Finding Visualiser</Link>
                </button>
                <button className='Link btn btn-warning border m-3'>
                    <Link to="/">Data Structures</Link>
                </button>
                <button className='Link btn btn-warning border m-3'>
                    <Link to="/">Sorting Algo</Link>
                </button>
            </div>

            <Outlet />
        </div>
    )
}

export default Layout