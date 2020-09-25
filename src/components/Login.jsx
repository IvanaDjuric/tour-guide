import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'

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
  export default Login