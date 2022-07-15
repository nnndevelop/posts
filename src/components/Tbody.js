import React from 'react'

const Tbody = (props ) => {
  return (
    <div className='flex items-center justify-between h-[200px] border-2 p-2'>
      <div >
      <span>{props.post.id}</span>
      <p className='font-bold text-[20px]'>{props.post.title}</p>
      <p className='lead'>{props.post.body}</p>
      </div>

      <div>
      <p>
        <button onClick={()=>{
          props.remove(props.post)
        }} className='btn btn-outline-danger' >
        delete
        </button>
        </p>

        </div>
    </div>

  )
}

export default Tbody