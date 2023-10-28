import Link from "next/link";

const PopularTags = () => {
  return (
    <>
      <h5 className="title">Popular Tags</h5>
      <ul className="popular__tag">
        <li>
          <Link href="#" className="social__item">
            New
          </Link>
        </li>
        <li>
          <Link href="#" className="social__item social__itemtwo">
            AI
          </Link>
        </li>
        <li>
          <Link href="#" className="social__item social__itemthree">
            2023
          </Link>
        </li>
        <li>
          <Link href="#" className="social__item social__itemfour">
            ML
          </Link>
        </li>
        <li>
          <Link href="#" className="social__item social__itemfour">
            Amazon
          </Link>
        </li>
        <li>
          <Link href="#" className="social__item social__itemfour">
            Shop
          </Link>
        </li>
      </ul>
    </>
  );
};

export default PopularTags;
