import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const ViewKeeper = () => {
  const {id}=useParams()
  const allKeeper=useSelector((state)=>state.keeper.keepers)
  const keeper=allKeeper.filter((item)=>item._id===id)[0]
  
  return (
    <div>
      <div className='flex flex-row gap-2 place-content-between'>
        <input type="text" placeholder='Title...' value={keeper.title}  disabled onChange={(e)=>{setTitle(e.target.value)}} className='p-3 rounded-2xl border-1 border-blue mt-2 w-[67%] pl-3'/>
        {/* <button className='roundend-3xl  border-1 mt-3 p-2 w-[30%]' onClick={createKeeper}>
            {keeperId? "Update My Keeper":"KEEP"}
        </button> */}
      </div>
      <div className='mt-5'>
        <textarea className='rounded-2xl min-w-[500px] p-3 border-1 bg-zinc-800' rows={30} placeholder='Keep Your Things here...' disabled value={keeper.content} onChange={(e)=>setValue(e.target.value)} ></textarea>
      </div>
    </div>
  )
}

export default ViewKeeper
