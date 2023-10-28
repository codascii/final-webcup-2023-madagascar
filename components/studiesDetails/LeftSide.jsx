import Image from "next/image";
import Socila from "../socila/Socila";
import ReviewCarousel from "./ReviewCarousel";
import WriteReview from "./WriteReview";
import detailsbook from "/public/img/bog-capabilities/detailsbook.jpg";
import edutouch1 from "/public/img/bog-capabilities/edutouch1.jpg";
import edutouch2 from "/public/img/bog-capabilities/edutouch2.jpg";

const LeftSide = () => {
  return (
    <div className="col-xxl-8 col-xl-8 col-lg-8">
      <div className="service__details__left blog__details__left border__nones">
        <div className="machine__learning__box studies__details__items mb__40">
          <div className="details__thumb">
            <Image src={detailsbook} alt="details" className="img-fluid" />
          </div>
          <div className="content">
            <h2 className="headtext">Education AI Studies</h2>
            <p>
              Education AI Studies refers to the field of study that combines
              education and artificial intelligence (AI). This area of study
              focuses on using AI technologies and methods to enhance and
              support the education process, such as personalized learning,
              adaptive testing, and educational data analysis. This field draws
              on a range of disciplines, including computer science, psychology,
              education, and others, to develop and apply AI solutions to
              improve educational outcomes for students.
            </p>
          </div>
          <div className="education__studies__categories">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="education__studies__wrap">
                  <ul className="education__list">
                    <li>Category</li>
                    <li>Date</li>
                    <li>Project Manager</li>
                    <li>Website</li>
                  </ul>
                  <ul className="education__list education__list__right">
                    <li>Education AI Studies</li>
                    <li>November 11, 2023</li>
                    <li>Kristin Watson</li>
                    <li>Intellicon.com</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="education__studies__wrap">
                  <ul className="education__list">
                    <li>Client Name</li>
                    <li>Budget</li>
                    <li>Location</li>
                    <li>Rating</li>
                  </ul>
                  <ul className="education__list education__list__right">
                    <li>Bessie Cooper</li>
                    <li>$3370.00</li>
                    <li>New York, USA</li>
                    <li className="ratting">
                      <span>
                        <i className="material-symbols-outlined">star</i>
                      </span>
                      <span>
                        <i className="material-symbols-outlined">star</i>
                      </span>
                      <span>
                        <i className="material-symbols-outlined">star</i>
                      </span>
                      <span>
                        <i className="material-symbols-outlined">star</i>
                      </span>
                      <span>
                        <i className="material-symbols-outlined">star</i>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="machine__learning__box studies__details__items2 mb-5">
          <div className="content">
            <h3 className="headtext mt-3">More Details</h3>
            <p>
              Education AI Studies refers to the field of study that combines
              education and artificial intelligence (AI). This area of study
              focuses on using AI technologies and methods to enhance and
              support the education process, such as personalized learning,
              adaptive testing, and educational data analysis. This field draws
              on a range of disciplines, including computer science, psychology,
              education, and others, to develop and apply AI solutions to
              improve educational outcomes for students.
            </p>
            <div className="more__details__thumb">
              <div className="more__details__item">
                <Image src={edutouch1} alt="img" className="img-fluid" />
              </div>
              <div className="more__details__item">
                <Image src={edutouch2} alt="img" className="img-fluid" />
              </div>
            </div>
            <p className="pb__20">
              Education AI Studies is a rapidly growing field that holds the
              promise of transforming the way education is delivered and
              experienced. Some of the specific areas of application for AI in
              education include:
            </p>
            <ul className="machine__listing__edu">
              <li>
                <span>1.</span>
                <span>
                  Contextual Understanding: Google&#39;s AI algorithms can now
                  understand the context behind a user&#39;s search query and
                  provide results that are relevant to their specific needs. For
                  example, if a user searches for best pizza in New York, the
                  search engine will take into account the user&#39;s location
                  and provide results for the best pizza places in the vicinity.
                </span>
              </li>
              <li>
                <span>2.</span>
                <span>
                  Personalized Results: Google&#39;s AI algorithms can now
                  personalize search results based on a user&#39;s search
                  history, location, and other factors. This means that users
                  will receive results that are tailored to their specific
                  interests and preferences.
                </span>
              </li>
              <li>
                <span>3.</span>
                <span>
                  Natural Language Processing: Google has integrated natural
                  language processing into its search engine, allowing users to
                  search for information using conversational language rather
                  than traditional search queries. This has made search more
                  intuitive and easier to use.
                </span>
              </li>
            </ul>
            <p className="pt__15">
              Despite its potential benefits, Education AI Studies also raises
              important ethical and privacy concerns. These include issues
              related to algorithmic bias, data privacy, and accountability for
              the impacts of AI on students, teachers, and the wider education
              system. As such, it is important for researchers and practitioners
              in this field to consider and address these issues as they develop
              and apply AI solutions in education.
            </p>
            {/* Review Carousel */}
            <ReviewCarousel />
            <p>
              Some of the key goals of Education AI Studies include improving
              educational efficiency, accessibility, and equity, as well as
              promoting the development of critical thinking and problem-solving
              skills in students. Another important aspect of Education AI
              Studies is the development of AI literacy among educators and
              students. As AI becomes increasingly prevalent in society, it is
              important for individuals to understand the underlying principles,
              limitations, and ethical implications of AI technologies. This
              will enable them to make informed decisions about the use of AI in
              education and to participate in shaping its development and
              deployment.
            </p>
            <div className="standard__footer">
              {/* Socila  */}
              <Socila />
            </div>
          </div>
        </div>

        <div className="write__review__wrap">
          <h4 className="title">Write a Review</h4>
          {/* Write Review */}
          <WriteReview />
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
