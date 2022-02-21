import {useState} from "react"
import axios from 'axios'

import { useDispatch, useSelector} from 'react-redux';
import {useEffect}from "react"
import {getDataLoading, getDataSuccess} from '../redux/action'

export const Navbar= ()=>{
  const {loading,result,error}= useSelector((store)=> store.data)


  const [text,setText]= useState("")
  const [res,setRes]= useState([])
  const dispatch= useDispatch()
  useEffect(()=>{
    getData()

  }, [])
  const getData =()=>{
    dispatch(getDataLoading())
    axios.get("https://fast-reef-22226.herokuapp.com/data").then(({data})=>{
      dispatch(getDataSuccess(data))
    });}
    const getRes= ()=>{
      axios.get(`https://fast-reef-22226.herokuapp.com/data?q=${text}`).then(({data})=>{
        setRes(data)
      })
     
    }
  
    return loading?("Loading..."):
    <><div id= "navbar">
  <nav className= "navbar navbar-light bg-light">
  <div className="container-fluid">
  <img id="logo2" src="https://res.cloudinary.com/demo/image/fetch/fl_png8/https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"alt="google"/>
  <input className= "form-control inp2" onChange={(e)=>setText(e.target.value)}type="search" placeholder="Search"
  aria-label="Search"/>
  <button className= "btn btn-outline-success search" type= "button" onClick={()=>{
getRes()
  }}>Search</button>
  </div>
  </nav>
  </div>
  <div id="search-result" style={{visibility: res.length > 0? "visible": "hidden"}}>Showing Results.. <br/>
  {res.map((e,i)=>{
    return (
      <div key={i} className= "result shadow ms-3">
      <p>{e.url}</p>
      <h4>{e.title} {e.author}</h4>
      <p>{e.description}</p>
      <h6>Creation Date: {e.creation_date}</h6>
      <h6>Explicit: {e.explicit?"Yes":"No"}</h6>
      </div>
    )
  })}
  </div>
  </>
}
