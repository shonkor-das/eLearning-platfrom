import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import Loading from "../shared/loading/Loading";
import "./CourseDetail.css";

const CourseDetail = ({ course, loading }) => {
  const { courseImage, courseName, pdf, rating } = course;

  const showRating = (rating) => {
    const showRating = [];
    let i = 0;
    for (i = 0; i < parseInt(rating); i++) {
      showRating.push("star");
    }
    return showRating;
  };

  if (loading) {
    return <Loading></Loading>;
  }

  const handleCheckout=()=>{
    toast.success('Thank you for your feedback!', {
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
    <div className="row gx-0 px-0">
      <div className="col-12 col-lg-10 p-5 order-2 order-lg-1">
        <div className="">
          <img src={courseImage} className="detailImage" alt="..." />
        </div>
        <div className="py-5">
          <h1>{courseName}</h1>{" "}
          <div className="d-flex align-item-center gap-3">
            <div>
              {showRating(rating).map((item, index) => (
                <i key={index} className="fa-solid fa-star golden"></i>
              ))}
            </div>
            <p className="cardText cardText2">{rating}</p>
          </div>
          <p className="courseDetail ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            quisquam earum vitae alias tenetur ut neque voluptatum, recusandae
            similique quod consequuntur cupiditate maiores assumenda nobis
            accusantium aspernatur dignissimos incidunt. Suscipit vero dolorum
            odio iusto rerum iure esse, unde laborum, ullam illum assumenda
            consequuntur, officiis similique ipsum nisi facilis sed aut.
          </p>
        </div>

        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="buyButton rounded-pill btn-lg"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Buy Now
          </button>
        </div>

        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="false"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <h3 className="text-center">Checkout </h3>
                <p>Selected Course: {course.courseName} </p>
                <p>Price: {course?.price} </p>

                <div className="mb-3">
                  <label
                    htmlFor="formGroupExampleInput"
                    className="form-label fw-bold "
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control  inputField"
                    id="formGroupExampleInput"
                    placeholder="Email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="formGroupExampleInput2"
                    className="form-label fw-bold"
                  >
                    Feed Back
                  </label>
                  <input
                    type="text"
                    name="feedback"
                    className="form-control  inputField"
                    id="formGroupExampleInput2"
                    placeholder="Password"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="formGroupExampleInput"
                    className="form-label fw-bold "
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control  inputField"
                    id="formGroupExampleInput"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button onClick={handleCheckout} data-bs-dismiss="modal" type="button" className="btn btn-primary">
                  Checkout!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-1 py-5 px-0 order-1 order-lg-2">
        <a
          download=""
          href={pdf}
          type="button"
          className="btn download btn-lg rounded-pill"
        >
          Download
        </a>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default CourseDetail;
