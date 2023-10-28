import Code from "../code/Code";
import BlockMain from "../common/BlockMain";
import Capabilities1 from "../home/Capabilities";
import Qualified from "../homeFive/Qualified";
import CaseDifferent from "../homeFour/CaseDifferent";
import Capabilities2 from "../homeThree/Capabilities";
import RealWorld from "../homeTwo/RealWorld";
import {
  studieFive,
  studieFour,
  studieOne,
  studieThree,
  studieTwo,
} from "./code";

const BlocksStudiesMain = () => {
  return (
    <BlockMain>
      <div className="common__body">
        <h2 className="cmn__title">Case Studies</h2>
        {/* studies one */}
        <div className="common__body__section pb__60">
          <div className="common__body__head pb__40">
            <h4>Case Studies One</h4>
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
          <div className="tab-content" id="pills-tabContentre1">
            <div
              className="tab-pane fade show active"
              id="pills-homeblocks"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              {/* studies Here  */}
              <div className="blocks__home">
                {/* Capabilities */}
                <Capabilities1 />
              </div>
              {/* studies End  */}
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoks"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              {/* Code */}
              <Code code={studieOne} language="javascript" />
            </div>
          </div>
        </div>
        {/* Studies two */}
        <div className="common__body__section pb__60">
          <div className="common__body__head pb__40">
            <h4>Case Studies Two</h4>
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
          <div className="tab-content" id="pills-tabContentre2">
            <div
              className="tab-pane fade show active"
              id="pills-homeblocksh2"
              role="tabpanel"
              aria-labelledby="pills-home-tabh2"
            >
              {/* studies two Here  */}
              <div className="blocks__home">
                {/* Real World */}
                <RealWorld />
              </div>
              {/* Fact two End  */}
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoksh2"
              role="tabpanel"
              aria-labelledby="pills-profile-tabh2"
            >
              {/* Code */}
              <Code code={studieTwo} language="javascript" />
            </div>
          </div>
        </div>
        {/* studies three */}
        <div className="common__body__section pb__60">
          <div className="common__body__head pb__40">
            <h4>Case Studies Three</h4>
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
              {/* studies three Here  */}
              <div className="blocks__home">
                {/* Qualified */}
                <Qualified clss="d-none" />
              </div>
              {/* fact three End  */}
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoksh3"
              role="tabpanel"
              aria-labelledby="pills-profile-tabh3"
            >
              {/* Code */}
              <Code code={studieThree} language="javascript" />
            </div>
          </div>
        </div>
        {/* studies four */}
        <div className="common__body__section pb__60">
          <div className="common__body__head pb__40">
            <h4>Case Studies four</h4>
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
              {/* studies four Here  */}
              <div className="blocks__home">
                <Capabilities2 />
              </div>
              {/* fact four End  */}
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoksh4"
              role="tabpanel"
              aria-labelledby="pills-profile-tabh4"
            >
              {/* Code */}
              <Code code={studieFour} language="javascript" />
            </div>
          </div>
        </div>
        {/* studies five */}
        <div className="common__body__section pb__20">
          <div className="common__body__head pb__40">
            <h4>Case Studies five</h4>
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
              {/* studies five Here  */}
              <div className="blocks__home">
                {/* Case Different */}
                <CaseDifferent />
              </div>
              {/* Fact five End  */}
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoksh5"
              role="tabpanel"
              aria-labelledby="pills-profile-tabh5"
            >
              {/* Code */}
              <Code code={studieFive} language="javascript" />
            </div>
          </div>
        </div>
      </div>
    </BlockMain>
  );
};

export default BlocksStudiesMain;
