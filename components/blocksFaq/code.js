export const faqOne = `
<section className="faq__section bgsection pt-120 pb-120">
{/* container */}
<div className="container">
  {/* accordion head */}
  <div
    className="section__header section__center pb__60 wow fadeInUp"
    data-wow-duration="2s"
  >
    <h2>Simplifying Your Information Search with FAQs</h2>
    <p>
      Artificial intelligence, or AI, is the simulation of human
      intelligence in machines that are programmed to think and learn...
    </p>
  </div>
  {/* accordion head */}
  <div className="row justify-content-between align-items-center">
    {/* col grid */}
    <div className="col-xxl-6 col-xl-6 col-lg-6">
      <div className="accordion__wrap">
        <div className="accordion" id="accordionExample1">
          {/* Accordion items */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                What is the difference between AI and ML?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample1"
            >
              <div className="accordion-body">
                <p>
                  Learn the basics: Acquire a basic understanding of AI
                  and ML concepts and technologies by reading books,
                  taking online courses, or attending workshops.
                </p>
              </div>
            </div>
          </div>
          {/* Accordion items */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                What are some common applications of AI and ML?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  Learn the basics: Acquire a basic understanding of AI
                  and ML concepts and technologies by reading books,
                  taking online courses, or attending workshops.
                </p>
              </div>
            </div>
          </div>
          {/* Accordion items */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                How can I get started with AI and ML?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  Learn the basics: Acquire a basic understanding of AI
                  and ML concepts and technologies by reading books,
                  taking online courses, or attending workshops.
                </p>
              </div>
            </div>
          </div>
          {/* Accordion items */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree4">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree4"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                What skills do I need to work in AI and ML?
              </button>
            </h2>
            <div
              id="collapseThree4"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree4"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  Learn the basics: Acquire a basic understanding of AI
                  and ML concepts and technologies by reading books,
                  taking online courses, or attending workshops.
                </p>
              </div>
            </div>
          </div>
          {/* Accordion items */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree5">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree5"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                What are the benefits of using AI and ML in business?
              </button>
            </h2>
            <div
              id="collapseThree5"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree5"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  Learn the basics: Acquire a basic understanding of AI
                  and ML concepts and technologies by reading books,
                  taking online courses, or attending workshops.
                </p>
              </div>
            </div>
          </div>
          {/* Accordion items */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree6">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree6"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Are there any limitations to AI and ML?
              </button>
            </h2>
            <div
              id="collapseThree6"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree6"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  Learn the basics: Acquire a basic understanding of AI
                  and ML concepts and technologies by reading books,
                  taking online courses, or attending workshops.
                </p>
              </div>
            </div>
          </div>
          {/* Accordion items */}
        </div>
      </div>
    </div>
    {/* col grid */}
    <div className="col-xxl-5 col-xl-6 col-lg-6">
      <div className="accordion__thumb">
        <Image src={faq2} alt="img" />
        <div className="qustion">
          <Image src={faqqustion2} alt="qustion" />
        </div>
      </div>
    </div>
    {/* col grid */}
  </div>
</div>
{/* container */}
</section>
`;

export const faqTwo = `
    <section className="faq__section__four bgsection pt-120 pb-120">
      {/* container */}
      <div className="container">
        <div className="row justify-content-between align-items-center">
          {/* col grid */}
          <div className="col-xxl-5 col-xl-6 col-lg-6">
            <div className="accordion__thumb__four">
              <Image src={fa14} alt="img" className="img-fluid" />
            </div>
          </div>
          {/* col grid */}
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="accordion__four__contnt">
              <div className="section__header pb__32">
                <h2 className="wow fadeInUp" data-wow-duration="2.2s">
                  The Quick Reference Guide for All Your Questions
                </h2>
                <p className="wow fadeInUp" data-wow-duration="2.4s">
                  Artificial intelligence, or AI, is the simulation of human
                  intelligence in machines that are programmed to think and
                  learn. The field of AI research began in the 1950s and has
                  since evolved to encompass a wide range of technologies and
                  applications.
                </p>
              </div>
              <div
                className="accordion__wrap wow fadeInUp"
                data-wow-duration="2.8s"
              >
                <div className="accordion" id="accordionExample">
                  {/* Accordion items */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        What is the difference between AI and ML?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Learn the basics: Acquire a basic understanding of AI
                          and ML concepts and technologies by reading books,
                          taking online courses, or attending workshops.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Accordion items */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        What are some common applications of AI and ML?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Learn the basics: Acquire a basic understanding of AI
                          and ML concepts and technologies by reading books,
                          taking online courses, or attending workshops.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Accordion items */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        How can I get started with AI and ML?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Learn the basics: Acquire a basic understanding of AI
                          and ML concepts and technologies by reading books,
                          taking online courses, or attending workshops.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Accordion items */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree4">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree4"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        What skills do I need to work in AI and ML?
                      </button>
                    </h2>
                    <div
                      id="collapseThree4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree4"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Learn the basics: Acquire a basic understanding of AI
                          and ML concepts and technologies by reading books,
                          taking online courses, or attending workshops.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Accordion items */}
                </div>
              </div>
            </div>
          </div>
          {/* col grid */}
        </div>
      </div>
      {/* container */}
    </section>

`;
