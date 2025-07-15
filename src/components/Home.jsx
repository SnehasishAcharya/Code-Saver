import React, { useEffect, useState } from 'react'
import {useSearchParams}from 'react-router'
import "../App.css"
import { useDispatch, useSelector } from 'react-redux'
import { addToKeeper, updateToKeeper } from '../redux/keeperSlice'

const Home = () => {
    const [title,setTitle]=useState("")
    const [value,setValue]=useState("")
    const [searchParams,setSearchParams]=useSearchParams()
    const keeperId=searchParams.get("keeperId")
    const dispatch=useDispatch()
    const allKeeper=useSelector((state)=>state.keeper.keepers)
    const isoDate=new Date().toISOString()
    const date=new Date(isoDate)
    const formatDate=date.toLocaleDateString("en-us",{
      month:"long",
      day:"numeric",
      year:"numeric"

    })
    useEffect(()=>{
      if(keeperId){
        const keeper=allKeeper.find((item)=>
          item._id===keeperId)
        setTitle(keeper.title)
        setValue(keeper.content)
        
      }

    },[keeperId])
    function createKeeper(){
      const keeper={
        title:title,
        content:value,
        _id:keeperId||Date.now().toString(36),
        createdAt:formatDate

      }
      if(keeperId){
        dispatch(updateToKeeper(keeper))
      }
      else(
        dispatch(addToKeeper(keeper))
      )
      setTitle("")
      setValue("")
      setSearchParams({})
    }
  return (
    <div>
      <div className='flex flex-row gap-2 place-content-between'>
        <input type="text" placeholder='Title...' value={title} onChange={(e)=>{setTitle(e.target.value)}} className='p-3 rounded-2xl border-1 border-blue mt-2 w-[67%] pl-3'/>
        <button className='roundend-3xl  border-1 mt-3 p-2 w-[30%]' onClick={createKeeper}>
            {keeperId? "Update My Keeper":"KEEP"}
        </button>
      </div>
      <div className='mt-5'>
        <textarea className='rounded-2xl min-w-[500px] p-3 border-1 bg-zinc-800' rows={30} placeholder='Keep Your Things here...' value={value} onChange={(e)=>setValue(e.target.value)} ></textarea>
      </div>
    </div>
  )
}

export default Home
