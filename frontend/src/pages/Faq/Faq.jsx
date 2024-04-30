import React, { useEffect, useState } from "react";
import axios from "axios";

const Faq = () => {
  const [faq, setFaq] = useState();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/faq`).then((res) => {
      console.log(res);
      setFaq(res.data.data);
    });
  }, []);

  return (
    <div>
      <div className="page-header parallaxie">
        <div className="container">
          <div className="row">
            <div className="co-md-12">
              <div className="page-header-box">
                <h1 className="text-anime">Frequently Asked Questions</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row accordion-container">
        <div className="accordion" id="accordionExample">
          {faq &&
            faq?.map((item, idx) => (
              <div className="accordion-item">
                <h2 className="accordion-header" id={`heading${idx}`}>
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${idx}`}
                    aria-expanded="true"
                    aria-controls={`collapse${idx}`}
                  >
                    {item?.question}
                  </button>
                </h2>
                <div
                  id={`collapse${idx}`}
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">{item?.answer}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
