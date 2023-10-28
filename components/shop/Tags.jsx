import Link from "next/link";

const Tags = () => {
  return (
    <ul className="popular__tag">
      {[
        ["New", "#"],
        ["AI", "#"],
        ["2023", "#"],
        ["Bag", "#"],
        ["ML", "#"],
        ["Watch", "#"],
        ["Shoes", "#"],
        ["Ball", "#"],
      ].map(([itm, url]) => (
        <li key={itm}>
          <Link href={url} className="social__item">
            {itm}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Tags;
