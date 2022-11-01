import React, {useContext, useState} from 'react';
import "./SignUp.css";
import singInImg from '../../resource/sing-in.png'
import { Link } from 'react-router-dom';
import SocialSIgnIn from '../shared/SocialSIgnIn';
import { AuthContext } from '../../context/authProvider/AuthProvider';
import toast from 'react-hot-toast';

const SignUp = () => {

  let [error, setError] = useState('')
  // let [accepted, setAccepted] = useState(false);
  let { createUser, updateUserProfile, veryFyEmail } = useContext(AuthContext)

  let handleSubmit = (event) => {

    event.preventDefault();
    let form = event.target;
    let name = form.name.value;
    let photoURL = form.photoURL.value;
    let email = form.email.value;
    let password = form.password.value;

    // console.log(name, password, email, photoUrl);

    createUser(email, password)
      .then(result => {
        let user = result.user;
        console.log(user)
        setError('')
        form.reset();
        handleUpdateUserProfile(name, photoURL);
        toast.success('Please varify your email address..')
      })
      .catch(error => {
        console.error(error)
        setError(error.message)
      })

  }

  let handleUpdateUserProfile = (name, photoURL) => {
    let profile = {
      displayName: name,
      photoURL: photoURL 
    }
    updateUserProfile(profile)
    .then(() => {})
    .catch(e => console.error(e))
  }

  return (
    <div className='container-fluid pb-4'>

      <div className='row  align-items-center g-4'>

        < div className='col-12 col-lg-6 ps-0 ps-lg-5 d-none d-lg-block' >
          <img src={singInImg} className='img-fluid' alt="" />
          <div className='text-center pt-3'>
            <h1 className='fw-bold'>Welcome to <br /> DreamLMS Courses.</h1>
            <p className='px-0 px-lg-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione labore vitae iusto officiis repudiandae cumque aliquid eius laborum doloribus non?</p>
          </div>
        </div >

        <div className='col-12 col-lg-6 '>

          <div className='row align-items-center'>
            <div className='col-0 col-lg-1'>

            </div>
            <div className='col-8 col-lg-7 ps-5'>
              <img src="https://dreamslms.dreamguystech.com/html/assets/img/logo.svg" className='w-50 pb-2 pb-lg-5' alt="" />
              <h1>Sign into Your Account</h1>
            </div>
            <div className='col-4 d-flex align-items-center gap-2 backtoHome'>
              <i className="fa-solid fa-arrow-left"></i>
              <Link to="/home" className='backtoHome'>Back to Home</Link>
            </div>

          </div>

          <form className='w-75 pt-5 container' onSubmit={handleSubmit}>
            <div className="mb-3">
              <label for="formGroupExampleInput" className="form-label fw-bold ">Full Name</label>
              <input type="text" name='name' className="form-control  inputField"  placeholder="Full Name" required />
            </div>

            <div className="mb-3">
              <label for="formGroupExampleInput" className="form-label fw-bold ">Image</label>
              <input type="text" name='photoURL' className="form-control  inputField"  placeholder="Image" required />
            </div>

            <div className="mb-3">
              <label for="formGroupExampleInput" className="form-label fw-bold ">Email</label>
              <input type="email" name='email' className="form-control  inputField" placeholder="Email" required />
            </div>
            <div className="mb-3">
              <label for="formGroupExampleInput2" className="form-label fw-bold">Password</label>
              <input type="password" name='password' className="form-control  inputField"  placeholder="Password" required />
            </div>

               <div>
                 <p>{error}</p>
               </div>

            <div className='pt-4'>
              <button type="submit" className="btn submitButton btn-lg w-100">Sign Up</button>
            </div>

          </form>

          <SocialSIgnIn></SocialSIgnIn>

          <div className=''>
            <p className='text-center'>Already have an account?  <Link to="/sign-in" className='forgotPass'> Sign in</Link> </p>
          </div>

        </div>
      </div >
    </div >
  );
};

export default SignUp;