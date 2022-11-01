import React from 'react';
import Footer from '../component/footer/Footer';
import SignIn from '../component/signIn/SignIn';

const SignInPage = () => {
  return (
    <div className='logingBg'>
      <SignIn></SignIn>
      <Footer></Footer>
    </div>
  );
};

export default SignInPage;