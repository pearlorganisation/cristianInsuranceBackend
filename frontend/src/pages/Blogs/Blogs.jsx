import React, { useEffect, useState } from "react";
import axios from "axios";
const Blogs = () => {
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/blogs`).then((res) => {
      console.log(res);
      setBlogs(res?.data?.data);
    });
  }, []);

  return (
    <>
      <div className="page-header parallaxie">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-header-box">
                <h1 className="text-anime">Blogs</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={{padding: '80px'}}>
        {blogs &&
          blogs?.map((item) => (
            <div className="col-lg-4 col-md-12">
              <div className="post-item wow fadeInUp" data-wow-delay="0.50s">
                <div className="post-header">
                  <div className="feature-img">
                    <a href="blog-/">
                      <figure className="image-anime">
                        <img src={item?.banner} alt="" />
                      </figure>
                    </a>
                  </div>

                  {/* <div className="post-meta">
                  <ul>
                    <li>Business Insurance</li>
                  </ul>
                </div> */}
                </div>

                <div className="post-content">
                  <div className="post-header">
                    <h2>
                      <a href="blog-/">{item?.title}</a>
                    </h2>

                    <p>{item?.description}</p>

                    {/* <a href="blog-/" className="btn-read-more">
                      Read more
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Blogs;
