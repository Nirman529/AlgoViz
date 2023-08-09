import React, { useState } from 'react'

const SortingAlgo = () => {
  const [numStack, setNumStack] = useState(0)
  return (
    <>
      <h1 className='text-center'>Sorting-Algorithm</h1>
      <div className='row m-0'>
        <div className='col text-center bg-light border p-1 m-1'>
          Sorting Algorithms
        </div>
        <div className='col text-center bg-light border p-1 ms-0 m-1'>
          <div className='text-center'>
            <header>
              Select Algorithm
            </header>
            {/* create a dropdown here */}
            <div className='text-center'>
              <button className='btn btn-primary'>Sort</button>
            </div>
          </div>
          <div className='col mt-2'>
            <div className='row m-0'>
              <input type="number" placeholder='Add a number' />
              <button className='text-wrap btn btn-primary btn-wrap'>Add</button>
            </div>
            <div className='row m-0 mt-2'>
              <input type="number" placeholder='Remove which number' />
              <button className='text-wrap btn btn-primary btn-wrap'>Remove</button>
            </div>
            <div className='row d-flex m-0 mt-2'>
              <div className='col m-0'>
                <input type="number" placeholder='Number to replace' />
              </div>
              <div className='col m-0'>
                <input type="number" placeholder='Replace with' />
              </div>
              <button className='text-wrap btn btn-primary btn-wrap'>Replace</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SortingAlgo