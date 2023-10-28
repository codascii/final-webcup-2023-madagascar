import { useState } from "react";
import ModalVideo from "react-modal-video";
import Code from "../code/Code";
import BlockMain from "../common/BlockMain";
import Banner1 from "../home/Banner";
import Banner from "../homeFive/Banner";
import Banner4 from "../homeFour/Banner";
import Banner3 from "../homeThree/Banner";
import Banner2 from "../homeTwo/Banner";
import { heroFive, heroFour, heroOne, heroThree, heroTwo } from "./code";

const BlocksHeroMain = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* TODO: Video Modal  */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="wXNv-x5zVgE"
        onClose={() => setOpen(false)}
      />

      <BlockMain>
        <div className="common__body">
          <h2 className="cmn__title">Hero</h2>
          {/* home one */}
          <div className="common__body__section pb__60">
            <div className="common__body__head pb__20">
              <h4>Hero One</h4>
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
                    JSX Code
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
                {/* Home Here  */}
                <div className="blocks__home">
                  <Banner1 setOpen={setOpen} />
                </div>
                {/* Home End  */}
              </div>
              <div
                className="tab-pane fade"
                id="pills-profileblcoks"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                {/* code  */}
                <Code code={heroOne} language="javascript" />
              </div>
            </div>
          </div>
          {/* home two */}
          <div className="common__body__section pb__60">
            <div className="common__body__head pb__20">
              <h4>Hero Two</h4>
              <ul
                className="nav nav-pills"
                id="pills-tabblocksh2"
                role="tablist"
              >
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
                {/* Home two Here  */}
                <div className="blocks__home">
                  <Banner2 setOpen={setOpen} />
                </div>
                {/* Home two End  */}
              </div>
              <div
                className="tab-pane fade"
                id="pills-profileblcoksh2"
                role="tabpanel"
                aria-labelledby="pills-profile-tabh2"
              >
                {/* code  */}
                <Code code={heroTwo} language="javascript" />
              </div>
            </div>
          </div>
          {/* home three */}
          <div className="common__body__section pb__60">
            <div className="common__body__head pb__20">
              <h4>Hero Three</h4>
              <ul
                className="nav nav-pills"
                id="pills-tabblocksh3"
                role="tablist"
              >
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
                    JSX Code
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
                {/* Home three Here  */}
                <div className="blocks__home">
                  {/* Banner */}
                  <Banner3 setOpen={setOpen} />
                </div>
                {/* Home three End  */}
              </div>
              <div
                className="tab-pane fade"
                id="pills-profileblcoksh3"
                role="tabpanel"
                aria-labelledby="pills-profile-tabh3"
              >
                {/* code  */}
                <Code code={heroThree} language="javascript" />
              </div>
            </div>
          </div>
          {/* home four */}
          <div className="common__body__section pb__60">
            <div className="common__body__head pb__20">
              <h4>Hero four</h4>
              <ul
                className="nav nav-pills"
                id="pills-tabblocksh4"
                role="tablist"
              >
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
                    JSX Code
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
                {/* Home four Here  */}
                <div className="blocks__home">
                  <Banner4 setOpen={setOpen} />
                </div>
                {/* Home four End  */}
              </div>
              <div
                className="tab-pane fade"
                id="pills-profileblcoksh4"
                role="tabpanel"
                aria-labelledby="pills-profile-tabh4"
              >
                {/* Code */}
                <Code code={heroFour} language="javascript" />
              </div>
            </div>
          </div>
          {/* home five */}
          <div className="common__body__section pb__20">
            <div className="common__body__head pb__20">
              <h4>Hero five</h4>
              <ul
                className="nav nav-pills"
                id="pills-tabblocksh5"
                role="tablist"
              >
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
                    JSX Code
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
                {/* Home five Here  */}
                <div className="blocks__home">
                  <Banner setOpen={setOpen} />
                </div>
                {/* Home five End  */}
              </div>
              <div
                className="tab-pane fade"
                id="pills-profileblcoksh5"
                role="tabpanel"
                aria-labelledby="pills-profile-tabh5"
              >
                {/* Code */}
                <Code code={heroFive} language="javascript" />
              </div>
            </div>
          </div>
        </div>
      </BlockMain>
    </>
  );
};

export default BlocksHeroMain;
