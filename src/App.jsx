import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Keeper from './components/Keeper'
import ViewKeeper from './components/ViewKeeper'
const router=createBrowserRouter([
  {
    path:"/",
    element:
    <div>
      <NavBar />
      <Home />

    </div>
  },
  {
    path:"/keeper",
    element:
    <div>
      <NavBar />
      <Keeper />

    </div>
  },
  {
    path:"/keeper/:id",
    element:
    <div>
      <NavBar />
      <ViewKeeper />

    </div>
  },
])
function App() {
  

  return (
    <>
    <div>
      <RouterProvider  router={router}/>
    </div>
      
    </>
  )
}

export default App
