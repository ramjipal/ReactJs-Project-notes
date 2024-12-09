import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import  Layout  from "./Layout.jsx"
import { Header , Footer, Home, About, Github} from "./components/index";
import { GithubInfo } from './components/Github.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element = { <Layout/> }>
      <Route path = '' element = { <Home/> } />
      <Route path='about' element = { <About/>} />
      <Route 
      loader = { GithubInfo }
      path = 'github' element = { <Github/> }/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={ router} />
  </StrictMode>,
)
