
import './App.css'
import AddTodo from './components/AddTodo'
import ListTodo from './components/ListTodo'
import { Provider } from 'react-redux'
import {store} from './app/store.js'

function App() {
  

  return (
    < >
    <h1>This is Todo app using Redux</h1>
    <AddTodo />
    <ListTodo />
    </>
  )
}

export default App
