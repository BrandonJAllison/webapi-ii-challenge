import React from 'react'
import {NavLink} from 'react-router-dom'


const header = {
    background: 'black',
    height: '50px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    color: '#E1490F',
    zIndex: '2',
    boxShadow: '0px 6px 10px gray'
    
}
const link ={
    color: '#E1490F',
    textDecoration: 'none'
    
}


const Header = () => {

return (

    <div style={header}>
        <NavLink style={link}
            to = {'/'}
            activeClassName="active-link">
            <span style={link}>Home</span>
        </NavLink>
        <NavLink style={link}
            to ='/PostForm'
            activeClassName="active-link">
            <span style={link}>Add Post</span>
        </NavLink>
        <NavLink style={link}
            to ='/UpdateForm'
            activeClassName="active-link">
            <span style={link}>Update Post</span>
        </NavLink>

        
    </div>
)


}




export default Header