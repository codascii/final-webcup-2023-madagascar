import Link from "next/link";

const Breadcrumb = ({ breadcrumbs = [] }) => {
  return (
    <ul className="breadcumnd__list">
      {breadcrumbs?.map(([itm, link], i, arr) => (
        <li
          key={itm}
          className={`d-flex align-items-center gap-1 ${
            i === arr.length - 1 && "sucess"
          }`}
        >
          {i !== arr.length - 1 ? <Link href={link}>{itm}</Link> : itm}
          {i !== arr.length - 1 ? (
            <span className="icon">
              <i className="material-symbols-outlined">chevron_right</i>
            </span>
          ) : (
            ""
          )}
        </li>
      ))}
    </ul>
  );
};

export default Breadcrumb;
