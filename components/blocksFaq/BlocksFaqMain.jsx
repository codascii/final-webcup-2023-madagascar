import Code from "../code/Code";
import BlockMain from "../common/BlockMain";
import Faqs from "../homeFour/Faqs";
import Faq from "../homeTwo/Faq";
import { faqOne, faqTwo } from "./code";

const BlocksFaqMain = () => {
  return (
    <BlockMain>
      <div className="common__body">
        <h2 className="cmn__title">Faq</h2>
        {/* faq one */}
        <div className="common__body__section pb__60">
          <div className="common__body__head pb__40">
            <h4>Faq One</h4>
            <ul className="nav nav-pills" id="pills-tabblocks" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-homeblocks"
                  type="button"
                  role="tab"
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
                  aria-selected="false"
                >
                  JSX Code
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="pills-tabContentcre">
            <div
              className="tab-pane fade show active"
              id="pills-homeblocks"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              {/* faq Here  */}
              <div className="blocks__home">
                {/* Faq */}
                <Faq />
              </div>
              {/* faq End  */}
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoks"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              {/* code  */}
              <Code code={faqOne} language="javascript" />
            </div>
          </div>
        </div>

        {/* faq two */}
        <div className="common__body__section pb__20">
          <div className="common__body__head pb__40">
            <h4>Faq Two</h4>
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
                  JSX Code
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
              {/* faq two Here  */}
              <div className="blocks__home">
                {/* Faqs */}
                <Faqs />
              </div>
              {/* faq two End  */}
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoksh2"
              role="tabpanel"
              aria-labelledby="pills-profile-tabh2"
            >
              <Code code={faqTwo} language="javascript" />
            </div>
          </div>
        </div>
        {/* faq */}
      </div>
    </BlockMain>
  );
};

export default BlocksFaqMain;
