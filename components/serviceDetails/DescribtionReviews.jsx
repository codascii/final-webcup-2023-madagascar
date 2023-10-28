import Image from "next/image";
import Link from "next/link";
import review from "/public/img/detaisl/review.png";

const DescribtionReviews = () => {
  return (
    <div className="describtion__reviews">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Describtion
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Reviews
          </button>
        </li>
      </ul>
      <div className="tab-content" id="describtion">
        <div
          className="tab-pane fade"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <p className="describtion__text">
            An AI review refers to the evaluation and analysis of an artificial
            intelligence system or application. This could involve assessing its
            performance, accuracy, reliability, and security...
          </p>
        </div>
        <div
          className="tab-pane fade show active"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <div className="reviews__boxes">
            <div className="thumb">
              <Image src={review} alt="img" />
            </div>
            <div className="review-content">
              <div className="name__ratting">
                <span className="name">Jerome Bell</span>
                <span className="time">2 days ago</span>
                <div className="ratting">
                  <span>
                    <i className="material-symbols-outlined">grade</i>
                  </span>
                  <span>
                    <i className="material-symbols-outlined">grade</i>
                  </span>
                  <span>
                    <i className="material-symbols-outlined">grade</i>
                  </span>
                  <span>
                    <i className="material-symbols-outlined">grade</i>
                  </span>
                  <span>
                    <i className="material-symbols-outlined">star_half</i>
                  </span>
                </div>
              </div>
              <p>
                An AI review refers to the evaluation and analysis of an
                artificial intelligence system or application. This could
                involve assessing its performance, accuracy, reliability, and
                security...
              </p>
              <Link href="/service-details" className="view__btn">
                <span>View More</span>
                <span className="icon">
                  <i className="material-symbols-outlined">arrow_right_alt</i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescribtionReviews;
