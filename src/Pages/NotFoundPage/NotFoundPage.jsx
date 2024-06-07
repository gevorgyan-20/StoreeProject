import React from 'react'
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div style={{width: "40%", display: 'flex', justifyContent: 'center' , margin: "0 auto", fontSize: "35px", fontWeight: "800"}}>Error!!  PAGE NOT FOUND.  <Link to='/Store-project' style={{textDecoration: "none", color: "blue"}}> Go To HomePage</Link></div>
  )
}

export default NotFoundPage