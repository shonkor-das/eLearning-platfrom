import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../context/authProvider/AuthProvider';
import Loading from '../loading/Loading';
import "./NavBar.css";

const NavBar = () => {
  const [navbar, setnavBar] = useState(false);
  const [mood,setMood] =useState(false)
  let { user, loading, logOut } = useContext(AuthContext);
  const [photo, setPhoto] = useState('https://thumbs.dreamstime.com/b/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg')
  if (loading) {
    return <Loading></Loading>
  }

  const handelSignOut = () => {
    logOut();
  }

  const changeBgScroll = () => {
      if (window.scrollY <= 50) {
          setnavBar(false)
      } else {
          setnavBar(true);
      }
  }
  window.addEventListener('scroll', changeBgScroll);

  const changeMood=()=>{
    setMood(!mood)
  }

  return (
    <nav className={
      navbar ?
          "navbar navbar-expand-lg  bg bg-white sticky-top py-4"
          :
          "navbar navbar-expand-lg py-4  sticky-top homeBg"}>
      <div className="container">

        <img src="https://dreamslms.dreamguystech.com/html/assets/img/logo.svg" alt="" className="navLogo " />

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-0 gap-lg-3">
            <li className="nav-item">
              <NavLink to='/home' className="nav-link " aria-current="page" >Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/course' className="nav-link " aria-current="page" >Course</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/faq' className="nav-link " aria-current="page" >Faq</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/instructor' className="nav-link " aria-current="page" >Instructor</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/blogs' className="nav-link " aria-current="page" >Blogs</NavLink>
            </li>

          </ul>
          {!user ? <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
          <button onClick={changeMood} className='bg-none  border-0' ><i class={mood?'fa-solid fa-moon':'fa-solid fa-sun'}></i></button>
            <Link to="/sign-in" className='signInButton rounded-pill decorationNone'>Sign In</Link>
            <Link to="/sign-Up" className='signUpButton rounded-pill decorationNone'>Sign Up</Link>
          </ul>
            :
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
              <button onClick={changeMood} className='bg-none border-0' ><i class={mood?'fa-solid fa-moon':'fa-solid fa-sun'}></i></button>
              <button className='signOutButton rounded-pill decorationNone' onClick={handelSignOut}>SignOut</button>
              <Link to="/profile" className='border-0 instructorPhoto d-flex '>
                <img src={user.photoURL || photo} alt="" className='instructorPhoto' />
                <div className='shadow rounded-pill pl-1 hoverName'>
                  <h5 className=''>{user.displayName}</h5>
                </div>
              </Link>
            </ul>
          }
        </div>
      </div>
    </nav>


  );
};

export default NavBar;