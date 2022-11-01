import React from 'react';
import './SocialSignIn.css';
import google from '../../resource/google.png';
import github from '../../resource/github.png';
import { useContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../context/authProvider/AuthProvider';


const SocialSIgnIn = () => {
  let { providerLogin,setUser } = useContext(AuthContext)

  let googleProvider = new GoogleAuthProvider();
  let githubProvider = new GithubAuthProvider();

  let handleGoogleSingIn = () => {
    providerLogin(googleProvider)
      .then(result => {
        let user = result.user;
        console.log(user);
      
      })
      .catch(error => console.error(error))
  }

  let handleGithubSignIn = () => {
    providerLogin(githubProvider)
      .then(result => {
        let user = result.user
         setUser(user)
      })
      .catch(error => console.error(error))
  }

  return (
    <div className=' py-5 mt-4'>
      <p className='text-center '>Or Sign In with</p>

      <div className='row justify-content-center align-items-center'>
        <button onClick={handleGoogleSingIn} className='col-12 col-lg-5 d-flex align-items-center justify-content-center g-3 socialButton middleBorder' >
          <img src={google} className="w-10 me-2" alt="" />
          <h2 className='socialTag'>Sign in using Google</h2>
        </button>

        <button onClick={handleGithubSignIn} className='col-12 col-lg-5 d-flex align-items-center justify-content-center g-3 socialButton'>
          <img src={github} className="w-10 pe-2" alt="" />
          <h2 className='socialTag'>Sign in using Git Hub</h2>
        </button>
      </div>
    </div>
  );
};

export default SocialSIgnIn;