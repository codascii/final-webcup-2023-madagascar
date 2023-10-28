import Link from "next/link";

const SignupForm = () => {
  return (
    <form>
      <div className="row g-4">
        <div className="col-lg-6">
          <div className="form__grp">
            <label for="firstname">First Name</label>
            <input
              type="text"
              id="firstname"
              placeholder="Enter First Name..."
              required
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form__grp">
            <label for="lastname">Last Name</label>
            <input
              type="text"
              id="lastname"
              placeholder="Enter Last Name..."
              required
            />
          </div>
        </div>
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
      <p className="accout">
        Do you have an account? <Link href="/signin">Signin</Link>
      </p>
      <button type={"submit"} className="cmn--btn border-0">
        <span>Signup</span>
      </button>
    </form>
  );
};

export default SignupForm;
