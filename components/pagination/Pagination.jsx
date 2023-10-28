import Link from "next/link";

const Pagination = () => {
  return (
    <ul className="pagination pt__40 justify-content-center">
      <li>
        <Link href="#" className="icon">
          <i className="material-symbols-outlined">chevron_left</i>
        </Link>
      </li>
      <li>
        <Link href="#">1</Link>
      </li>
      <li>
        <Link href="#">2</Link>
      </li>
      <li>
        <Link href="#">3</Link>
      </li>
      <li>
        <Link href="#">...</Link>
      </li>
      <li>
        <Link href="#" className="icon">
          <i className="material-symbols-outlined">keyboard_arrow_right</i>
        </Link>
      </li>
    </ul>
  );
};

export default Pagination;
