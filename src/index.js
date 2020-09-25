import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import TourList from './components/TourList'
import Footer from './components/Footer'
import Contact from './components/Contact'
import './index.css'
import {BrowserRouter as Router, useHistory} from 'react-router-dom'

const Login = ({setUser,users}) => {
   
  const[username,setUsername]=useState('')
  const[password,setPassword]=useState('')
  const history =useHistory()

  return(
      <div className="form">
      <form onSubmit={(e) => {
        e.preventDefault()
        if(users.some(user => user.username === username && user.password === password)){
        setUser(username)
        history.push('/login')
        } else{
          console.log('Neispravan log')
        }
      } }>
        <input type="text" onChange={(e)=> setUsername(e.target.value)} /><br></br>
        <input type="text" onChange={(e)=> setPassword(e.target.value)}/>
        <input type="submit" value="login" />
      </form>
 
  </div>
  )
}


const App = () => {
  const[user,setUser]=useState(null)
  
  return(
    <Router>
      <main>
        <Header />
        <TourList />
        <Contact />
        <Login setUser={setUser} user={user} />
        <Footer />
    </main>
   </Router>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);