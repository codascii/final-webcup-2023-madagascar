import Code from "../code/Code";
import BlockMain from "../common/BlockMain";
import Support from "../common/Support";
import Testimonial1 from "../common/Testimonial";
import TestimonialFour from "../common/TestimonialFour";
import TestimonialThree from "../common/TestimonialThree";
import TestimonialTwo from "../common/TestimonialTwo";
import {
  testimonialFive,
  testimonialFour,
  testimonialOne,
  testimonialThree,
  testimonialTwo,
} from "./code";

const BlocksTestimonialMain = () => {
  return (
    <BlockMain>
      <div className="common__body">
        <h2 className="cmn__title">Testimonial Process</h2>
        {/* testimonail one */}
        <div className="common__body__section pb__60">
          <div className="common__body__head pb__40">
            <h4>Testimonial One</h4>
            <ul className="nav nav-pills" id="pills-tabblocks" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-homeblocks"
                  type="button"
                  role="tab"
                  aria-controls="pills-homeblocks"
                  aria-selected="true"
                >
                  Preview
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profileblcoks"
                  type="button"
                  role="tab"
                  aria-controls="pills-profileblcoks"
                  aria-selected="false"
                >
                  JSX code
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="pills-tabContentre">
            <div
              className="tab-pane fade show active"
              id="pills-homeblocks"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              {/* testimonial Here  */}
              <div className="blocks__home">
                {/* Testimonial */}
                <Testimonial1 />
              </div>
              {/* testimonial End  */}
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoks"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              {/* code */}
              <Code code={testimonialOne} language="javascript" />
            </div>
          </div>
        </div>
        {/* testimonial two */}
        <div className="common__body__section pb__60">
          <div className="common__body__head pb__40">
            <h4>Testimonial Two</h4>
            <ul className="nav nav-pills" id="pills-tabblocksh2" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tabh2"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-homeblocksh2"
                  type="button"
                  role="tab"
                  aria-controls="pills-homeblocksh2"
                  aria-selected="true"
                >
                  Preview
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tabh2"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profileblcoksh2"
                  type="button"
                  role="tab"
                  aria-controls="pills-profileblcoksh2"
                  aria-selected="false"
                >
                  JSX code
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-homeblocksh2"
              role="tabpanel"
              aria-labelledby="pills-home-tabh2"
            >
              {/* testimonial two Here  */}
              <div className="blocks__home">
                {/* Support */}
                <Support />
              </div>
              {/* Testimonial two End  */}
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoksh2"
              role="tabpanel"
              aria-labelledby="pills-profile-tabh2"
            >
              {/* code */}
              <Code code={testimonialTwo} language="javascript" />
            </div>
          </div>
        </div>
        {/* Testimonial three */}
        <div className="common__body__section pb__60">
          <div className="common__body__head pb__40">
            <h4>Testimonial Three</h4>
            <ul className="nav nav-pills" id="pills-tabblocksh3" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tabh3"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-homeblocksh3"
                  type="button"
                  role="tab"
                  aria-controls="pills-homeblocksh3"
                  aria-selected="true"
                >
                  Preview
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tabh3"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profileblcoksh3"
                  type="button"
                  role="tab"
                  aria-controls="pills-profileblcoksh3"
                  aria-selected="false"
                >
                  JSX code
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="pills-tabContent3">
            <div
              className="tab-pane fade show active"
              id="pills-homeblocksh3"
              role="tabpanel"
              aria-labelledby="pills-home-tabh3"
            >
              {/* testimonial three Here  */}
              <div className="blocks__home">
                {/* Testimonial Three */}
                <TestimonialThree />
              </div>
              {/* testimonial three End  */}
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoksh3"
              role="tabpanel"
              aria-labelledby="pills-profile-tabh3"
            >
              {/* code */}
              <Code code={testimonialThree} language="javascript" />
            </div>
          </div>
        </div>
        {/* testimonial four */}
        <div className="common__body__section pb__60">
          <div className="common__body__head pb__40">
            <h4>Testimonial four</h4>
            <ul className="nav nav-pills" id="pills-tabblocksh4" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tabh4"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-homeblocksh4"
                  type="button"
                  role="tab"
                  aria-controls="pills-homeblocksh4"
                  aria-selected="true"
                >
                  Preview
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tabh4"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profileblcoksh4"
                  type="button"
                  role="tab"
                  aria-controls="pills-profileblcoksh4"
                  aria-selected="false"
                >
                  JSX code
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="pills-tabContent4">
            <div
              className="tab-pane fade show active"
              id="pills-homeblocksh4"
              role="tabpanel"
              aria-labelledby="pills-home-tabh4"
            >
              {/* testimonial four Here  */}
              <div className="blocks__home">
                {/* Testimonial Two */}
                <TestimonialTwo />
              </div>
              {/* testimonial four End  */}
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoksh4"
              role="tabpanel"
              aria-labelledby="pills-profile-tabh4"
            >
              {/* code */}
              <Code code={testimonialFour} language="javascript" />
            </div>
          </div>
        </div>
        {/* testimonial five */}
        <div className="common__body__section pb__20">
          <div className="common__body__head pb__40">
            <h4>Testimonial five</h4>
            <ul className="nav nav-pills" id="pills-tabblocksh5" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tabh5"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-homeblocksh5"
                  type="button"
                  role="tab"
                  aria-controls="pills-homeblocksh5"
                  aria-selected="true"
                >
                  Preview
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tabh5"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profileblcoksh5"
                  type="button"
                  role="tab"
                  aria-controls="pills-profileblcoksh5"
                  aria-selected="false"
                >
                  JSX code
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="pills-tabContent5">
            <div
              className="tab-pane fade show active"
              id="pills-homeblocksh5"
              role="tabpanel"
              aria-labelledby="pills-home-tabh5"
            >
              {/* testimonial five Here  */}
              <div className="blocks__home">
                {/* Testimonial Four */}
                <TestimonialFour />
              </div>
              {/* testimonial five End  */}
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoksh5"
              role="tabpanel"
              aria-labelledby="pills-profile-tabh5"
            >
              {/* code */}
              <Code code={testimonialFive} language="javascript" />
            </div>
          </div>
        </div>
      </div>
    </BlockMain>
  );
};

export default BlocksTestimonialMain;
