import React,{useState} from 'react'
import {BrowserRouter as Router,Redirect,Route, Switch} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Tour from './Tour'
import Contact from './Contact'

const Header = () => {
    const[user]=useState(null)
    return(
        <Router>
        <nav className="navbar">
            <Switch>
               
                    <Route basename="home" component={Home} path="/" exact />
                    
                    <Route component={About} path="/about"/>

                    <Route component={Contact} path="/contact">
                        {user ? <Contact /> : <Redirect to='/login' />}
                    </Route>
                    
                    <Route component={Tour} path="/tour" />
                
                </Switch>
        </nav>
        </Router>
    )
}

export default Header
