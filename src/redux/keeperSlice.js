import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

const initialState = {
  keepers:localStorage.getItem("keepers")
  ?JSON.parse(localStorage.getItem("keepers"))
  :[]
}

export const keeperSlice = createSlice({
  name: 'keeper',
  initialState,
  reducers: {
    addToKeeper: (state,action) => {
      const keeper=action.payload
      const storedItem=JSON.parse(localStorage.getItem("keepers")) || []
      const isDuplicate=storedItem.some(k=>k.title===keeper.title)
      const isEmpty=keeper.title==='' && keeper.content===''
      const isTitleEmpty=keeper.title===''
      const isContentEmpty=keeper.content===''

      if(isDuplicate)(
        toast("Give a different title")
      )
      else if(isEmpty){
        toast("Keep Something First")
      }
      else if(isTitleEmpty){
        toast("Provide A Title")
      }
      else if(isContentEmpty){
        toast("Provide A Content")
      }

      else{
        state.keepers.push(keeper)
        localStorage.setItem("keepers",JSON.stringify(state.keepers))
        toast.success("Kept Successfully")
      }


     
    },
    updateToKeeper: (state,action) => {
      const keeper=action.payload
      const index=state.keepers.findIndex((item)=>
      item._id.toString()===keeper._id.toString())
      if(index>=0){
        state.keepers[index]=keeper
        localStorage.setItem("keepers",JSON.stringify(state.keepers))
        toast.success("Updated Successfuly")
      }
      
    },
    resetAllKeeper: (state, action) => {
      state.keepers=[]
      localStorage.removeItem("keepers")
      
    },
    removeAllKeeper: (state,action)=>{
      const keeperId=action.payload
      const index=state.keepers.findIndex((item)=>
      item._id===keeperId)
      if(index>=0){
        state.keepers.splice(index,1)
        localStorage.setItem("keepers",JSON.stringify(state.keepers))
        toast.success("Deleted Successfuly")
      }

    }
  },
})


export const { addToKeeper, updateToKeeper, resetAllKeeper,removeAllKeeper } = keeperSlice.actions

export default keeperSlice.reducer