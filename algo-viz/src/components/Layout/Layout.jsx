import React from 'react'
import "./Layout.css"
import { Link, Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div>
            <div className='m-0 d-flex flex-row justify-content-center bg-light border'>
                <button className='btn btn-warning border m-3'>
                    <Link to="/" className='text-decoration-none'>Home</Link>
                </button>
                <button className='btn btn-warning border m-3'>
                    <Link to="/aStarPathFinder" className='text-decoration-none'>Path Finding Visualiser</Link>
                </button>
                <button className='btn btn-warning border m-3'>
                    <Link to="/dataStructures" className='text-decoration-none'>Data Structures</Link>
                </button>
                <button className='btn btn-warning border m-3'>
                    <Link to="/sortingAlgo" className='text-decoration-none'>Sorting Algo</Link>
                </button>
            </div>

            <Outlet />
        </div>
    )
}

export default Layout