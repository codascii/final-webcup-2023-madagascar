import Image from "next/image";
import details1 from "/public/img/detaisl/details1.jpg";

const Details = () => {
  return (
    <>
      <div className="details__thumb">
        <Image src={details1} alt="details" className="img-fluid" />
      </div>
      <div className="content">
        <h2 className="title1">Machine Learning</h2>
        <p className="text1">
          Machine learning is a subfield of artificial intelligence (AI)
          concerned with the design and development of algorithms that can learn
          patterns and insights from data. In other words, machine learning
          algorithms automatically improve their performance as they are exposed
          to more data, making them highly adaptable and effective for complex
          tasks. There are three main types of machine learning:
        </p>
        <ul className="machine__listing">
          <li>
            <span>1.</span>
            <span>
              Supervised learning: algorithms learn from labeled training data
              to make predictions or classNameify new data.
            </span>
          </li>
          <li>
            <span>2.</span>
            <span>
              Unsupervised learning: algorithms learn from unlabeled data to
              find hidden patterns or structure in the data.
            </span>
          </li>
          <li>
            <span>3.</span>
            <span>
              Reinforcement learning: algorithms learn by taking actions in an
              environment and receiving rewards or penalties.
            </span>
          </li>
        </ul>
        <p>
          Machine learning has numerous applications, including image and speech
          recognition, natural language processing, predictive modeling, and
          recommendation systems.
        </p>
      </div>
    </>
  );
};

export default Details;
