const Search = () => {
  return (
    <>
      <h5 className="title">Search</h5>
      <form action="#">
        <input type="text" placeholder="Search" required />
        <button>
          <i className="material-symbols-outlined">search</i>
        </button>
      </form>
    </>
  );
};

export default Search;
