import { combineSlices } from '@reduxjs/toolkit';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeAllKeeper } from '../redux/keeperSlice';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';

const Keeper = () => {
 const keepers = useSelector((state) => state.keeper.keepers);
 const [searchItem,setSearchItem]=useState("")
 const dispatch=useDispatch()
 const filteredData=keepers.filter((item)=>item.title.toLowerCase().includes(searchItem.toLowerCase()))
 function handleDelete(keeperId){
  dispatch(removeAllKeeper(keeperId))

 }
  return (
    <div>
      <input type="search" placeholder='Search..' value={searchItem} onChange={(e)=>setSearchItem(e.target.value)} className='rounded-md min-w-[600px] pl-2 h-10 mt-3 border-1 border-blue-400' />
      <div>
        {
          filteredData.length>0 &&
          filteredData.map((item)=>{
            return(
                <div className='border-2 flex flex-col gap-4 mt-4 p-2' key={item._id}>
                  <div>
                    {item.title}
                  </div>
                  <div>
                    {item.content}
                  </div>
                  <div className='flex flex-row place-content-evenly'>
                    <button>
                      <NavLink to={`/?keeperId=${item._id}`}>
                        Edit
                      </NavLink>
                    </button>
                    <button onClick={()=>handleDelete(item._id)}>Delete</button>
                    <button>
                      <NavLink to={`/keeper/${item._id}`}>
                        View
                      </NavLink>
                    </button>
                    <button onClick={()=>{ 
                      navigator.clipboard.writeText(item.content)
                      toast.success("Copied")
                    }}>Copy</button>
                    <button>Share</button>
                  </div>
                  <div>
                    {item.createdAt}
                  </div>

                </div>
            )
          })
        }
      </div>
    </div>
  
  )
}

export default Keeper
