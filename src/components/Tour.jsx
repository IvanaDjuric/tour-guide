import React,{useEffect, useState} from 'react'
import { getAllCities } from '../services'
import {v1 as uuidv1} from 'uuid'

const Tour = () => {
    const[cities,setCities]=useState([])
    const [text,setText] = useState('')

    const deleteById = (id) => {
        let index = cities.findIndex(el => el.id === id)
        let tmp = [...cities]
        tmp.splice(index,1)
        setCities(tmp)
    }

    const showInfo = (id) => {
        let index = cities.findIndex(el => el.id === id)
        let tmp = [...cities]
        tmp[index].done = !tmp[index].done
        setCities(tmp)
        
    }

    useEffect(() => {
        getAllCities().then(res => {
            setCities(res.data)
        })
        },[])

    return(
        cities.map(city => {
            return(
                <article key={city.id} className="tour">
                <div className="img-cont">
                    <img src={city.img} alt="" />
                    <span className="close-btn" onClick={() => deleteById(city.id)} >
                    <i className="fa fa-window-close"></i>
                    </span>
                </div>
                <div className="tour-info">
                    <h3>{city.city}</h3>
                    <h4>{city.name}</h4>
                    <h5>info{""}
                      <span onClick={() => {
          setCities([...cities,{id: uuidv1(),task: text,done: false}])
        }}>
                          <i className="fa fa-chevron-down" ></i>
                        </span>
                    </h5>
                    <p >{city.info}</p>
                </div>
            </article>
            )
        })
       
    )
}

export default Tour