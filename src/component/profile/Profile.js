import React from "react";
import "./Profile.css";
import { useContext } from "react";
import { AuthContext } from "../../context/authProvider/AuthProvider";
import Loading from "../shared/loading/Loading";
import { ToastContainer, toast } from 'react-toastify';

const Profile = () => {

  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading></Loading>;
  }

  const handelUpdate=()=>{

    toast.success('Profile Updated Successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  return (
    <div className="container d-flex justify-content-center py-5">
      <div class=" profileCard p-5 w-50">
        <div className="d-flex flex-column align-items-center gap-2 ">
          <div>
            <img src={user.photoURL} class="profilePhoto" alt="..." />
          </div>
          <h5 className="text-center">Update your profile</h5>
        </div>

        <div class="card-body">
        <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label fw-bold ">Full Name</label>
              <input value={user.displayName} type="text" name='name' className="form-control  inputField" id="formGroupExampleInput" placeholder="Full Name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput2" className="form-label fw-bold">Photo URL</label>
              <input value={user.photoURL}  type="text" name='photo' className="form-control  inputField" id="formGroupExampleInput2" placeholder="Photo Url" required />
            </div>

            <div className="mb-3">
              <label htmlFor="formGroupExampleInput2" className="form-label fw-bold">Email</label>
              <input value={user?.email}  type="email" name='Email' className="form-control  inputField" id="formGroupExampleInput2" placeholder="Email" required />
            </div>

            <div className='pt-4'>
              <button onClick={handelUpdate} type="submit" className="btn submitButton btn-lg w-100">Update</button>
            </div>
         
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Profile;
