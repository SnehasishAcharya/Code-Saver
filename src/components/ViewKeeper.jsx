import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const ViewKeeper = () => {
  const {id}=useParams()
  const allKeeper=useSelector((state)=>state.keeper.keepers)
  const keeper=allKeeper.filter((item)=>item._id===id)[0]
  
  return (
    <div>
      <div className='flex flex-row gap-2 place-content-between'>
        <input type="text" placeholder='Title...' value={keeper.title}  disabled onChange={(e)=>{setTitle(e.target.value)}} className='p-3 rounded-2xl border-1 border-blue mt-2 w-[85%] pl-3'/>
        {/* <button className='roundend-3xl  border-1 mt-3 p-2 w-[30%]' onClick={createKeeper}>
            {keeperId? "Update My Keeper":"KEEP"}
        </button> */}
      </div>
      <div className='mt-5 border-1 bg-zinc-800 rounded-2xl min-w-[500px] '>
        <div className='p-2'>
          <header className='flex justify-end'>
        <NavLink to={"../keeper"}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
          <path fill-rule="evenodd" d="M3.22 3.22a.75.75 0 0 1 1.06 0l3.97 3.97V4.5a.75.75 0 0 1 1.5 0V9a.75.75 0 0 1-.75.75H4.5a.75.75 0 0 1 0-1.5h2.69L3.22 4.28a.75.75 0 0 1 0-1.06Zm17.56 0a.75.75 0 0 1 0 1.06l-3.97 3.97h2.69a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75V4.5a.75.75 0 0 1 1.5 0v2.69l3.97-3.97a.75.75 0 0 1 1.06 0ZM3.75 15a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-2.69l-3.97 3.97a.75.75 0 0 1-1.06-1.06l3.97-3.97H4.5a.75.75 0 0 1-.75-.75Zm10.5 0a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-2.69l3.97 3.97a.75.75 0 1 1-1.06 1.06l-3.97-3.97v2.69a.75.75 0 0 1-1.5 0V15Z" clip-rule="evenodd" />
          </svg>


        </NavLink>
      </header>
        </div>
        <textarea className='p-3  min-w-[500px] min-h-[200px]' rows={30} placeholder='Keep Your Things here...' disabled value={keeper.content} onChange={(e)=>setValue(e.target.value)} ></textarea>
      </div>
    </div>
  )
}

export default ViewKeeper
