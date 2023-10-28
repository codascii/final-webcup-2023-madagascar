import Link from "next/link";

const SigninForm = () => {
  return (
    <form>
      <div className="row g-4">
        <div className="col-lg-12">
          <div className="form__grp">
            <label for="emailid">Enter YOur Email ID</label>
            <input
              type="email"
              id="emailid"
              placeholder="Enter Your Email..."
              required
            />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form__grp">
            <label for="paswords">Enter Your Password</label>
            <input
              type="text"
              id="paswords"
              placeholder="Enter Your Password..."
              required
            />
          </div>
        </div>
      </div>
      <div className="forget__right">
        <Link href="3" className="forget">
          Forget password
        </Link>
      </div>
      <p className="accout">
        Do you have an account? <Link href="/signup">Signup</Link>
      </p>
      <button type={"submit"} className="cmn--btn border-0">
        <span>Signin</span>
      </button>
    </form>
  );
};

export default SigninForm;
