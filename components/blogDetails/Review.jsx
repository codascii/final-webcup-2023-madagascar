const Review = () => {
  return (
    <div className="write__review__wrap">
      <h4 className="title">Write a Review</h4>
      <form action="/">
        <div className="row g-4">
          <div className="col-lg-6">
            <input type="text" placeholder="Enter Your Name..." required />
          </div>
          <div className="col-lg-6">
            <input type="email" placeholder="Enter Your Email..." required />
          </div>
          <div className="col-lg-12">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="4"
              placeholder="Write a reviews..."
            >
              {" "}
            </textarea>
          </div>
          <button type="submit" className="cmn--btn">
            <span>Submit</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Review;
