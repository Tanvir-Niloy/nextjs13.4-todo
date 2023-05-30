import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai';

function AddTask() {
  return (
    <div>
      <button className="btn btn-primary w-full">
        Add new task <AiOutlinePlus className='ml-2' fontSize={20}/>
      </button>
    </div>
  )
}

export default AddTask