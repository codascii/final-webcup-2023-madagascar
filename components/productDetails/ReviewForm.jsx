import Link from "next/link";

const ReviewForm = () => {
  const linkClick = (e) => {
    e.preventDefault();
    return false;
  };
  return (
    <form>
      <div className="row g-4">
        <div className="col-lg-6">
          <input type="text" placeholder="Enter Your Name..." required />
        </div>
        <div className="col-lg-6">
          <input type="email" placeholder="Enter Your Email..." required />
        </div>
        <div className="col-lg-12">
          <div className="form__star">
            <Link href="/shop/1" onClick={linkClick}>
              <i className="material-symbols-outlined">star</i>
            </Link>
            <Link href="/shop/1" onClick={linkClick}>
              <i className="material-symbols-outlined">star</i>
            </Link>
            <Link href="/shop/1" onClick={linkClick}>
              <i className="material-symbols-outlined">star</i>
            </Link>
            <Link href="/shop/1" onClick={linkClick}>
              <i className="material-symbols-outlined">star</i>
            </Link>
            <Link href="/shop/1" onClick={linkClick}>
              <i className="material-symbols-outlined">star_half</i>
            </Link>
          </div>
        </div>
        <div className="col-lg-12">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="4"
            placeholder="Write a reviews..."
          ></textarea>
        </div>
        <button type="submit" className="cmn--btn">
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;
