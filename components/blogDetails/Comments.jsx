import Image from "next/image";
import Link from "next/link";
import co1 from "/public//img/bog-capabilities/co1.jpg";
import co2 from "/public//img/bog-capabilities/co2.jpg";
import co3 from "/public//img/bog-capabilities/co3.jpg";
import co4 from "/public//img/bog-capabilities/co4.jpg";

const Comments = () => {
  return (
    <div className="comments__wrap">
      <h3>Comments (03)</h3>
      <div className="reviews__boxes">
        <div className="thumb">
          <Image src={co1} alt="img" className="img-fluid" />
        </div>
        <div className="review-content">
          <div className="name__ratting">
            <span className="name">Esther Howard</span>
            <span className="time">2 days ago</span>
          </div>
          <p>
            As a business owner, I have seen the transformative power of AI
            first-hand. By incorporating AI into our operations, we have been
            able to automate many routine tasks, freeing up our employees to
            focus on more strategic initiatives...
          </p>
          <ul className="liked__wrap">
            <li>
              <span className="icon">
                <i className="material-symbols-outlined">thumb_up</i>
              </span>
              <span>18</span>
            </li>
            <li>
              <span className="icon">
                <i className="material-symbols-outlined">forum</i>
              </span>
              <span>Reply</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="reviews__boxes">
        <div className="thumb">
          <Image src={co2} alt="img" className="img-fluid" />
        </div>
        <div className="review-content">
          <div className="name__ratting">
            <span className="name">Leslie Alexander</span>
            <span className="time">2 days ago</span>
          </div>
          <p>
            I have been using AI-powered tools in my work for several years now,
            and the impact has been tremendous. From virtual assistants that
            save me time by handling routine tasks to advanced analytics that
            help me make more informed decisions...
          </p>
          <ul className="liked__wrap">
            <li>
              <span className="icon">
                <i className="material-symbols-outlined">thumb_up</i>
              </span>
              <span>18</span>
            </li>
            <li>
              <span className="icon">
                <i className="material-symbols-outlined">forum</i>
              </span>
              <span>Reply</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="reviews__boxes">
        <div className="thumb">
          <Image src={co3} alt="img" className="img-fluid" />
        </div>
        <div className="review-content">
          <div className="name__ratting">
            <span className="name">Theresa Webb</span>
            <span className="time">2 days ago</span>
          </div>
          <p>
            I have been using AI-powered tools in my work for several years now,
            and the impact has been tremendous. From virtual assistants that
            save me time by handling routine tasks to advanced analytics that
            help me make more informed decisions...
          </p>
          <ul className="liked__wrap">
            <li>
              <span className="icon">
                <i className="material-symbols-outlined">thumb_up</i>
              </span>
              <span>18</span>
            </li>
            <li>
              <span className="icon">
                <i className="material-symbols-outlined">forum</i>
              </span>
              <span>Reply</span>
            </li>
          </ul>
          <div className="reply__boxes">
            <div className="icon">
              <Image src={co4} alt="img" className="img-fluid" />
            </div>
            <div className="input__box">
              <input type="text" placeholder="Join the discussion..." />
            </div>
          </div>
          <div className="view__all text-center">
            <Link href="/" className="cmn--btn">
              <span>View All Comment</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
