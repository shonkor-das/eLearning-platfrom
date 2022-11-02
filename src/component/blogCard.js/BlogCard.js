import React from "react";
import useBlogs from "../../hooks/useBlogs";
import Loading from "../shared/loading/Loading";

const BlogCard = ({ len }) => {

  const [blogList, loading] = useBlogs();

  if (loading) {
    return <Loading></Loading>;
  }
  let length = 0;
  len ? (length = len) : (length = blogList.length);
  return (
    <div className="container mb-3 py-5">
      <div
        className={
          len
            ? "row row-cols-1 row-cols-md-3 g-4"
            : "row row-cols-1 row-cols-md-2 g-4"
        }
      >
        {blogList.slice(0,length).map((item, index) => 
          <div key={index} className="col">
            <div className={len?"card blogsHome":"card blog"}>
              <div className="card-body">
                <h5 className="card-title blogQue">{item.question} </h5>
                <p className="card-text textColor">
                  {" "}
                  <span className="fw-bold">
                  {item.strong}
                  </span>{" "}
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogCard;
