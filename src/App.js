import {BrowserRouter as Router} from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css'
import Navbar from './components/Navbar/Navbar.css'
 import AllRoutes from './AllRoutes'
 import { fetchAllQuestions } from './action/question'
import { fetchAllUsers } from './action/users'

function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  },[dispatch])

  return (
    <div className="App">
      <Router >
        <Navbar />
        <AllRoutes /> 
      </Router>
    </div>
  );
}

export default App;
