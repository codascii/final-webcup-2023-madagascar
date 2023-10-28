const Categories = () => {
  return (
    <div className="categoris__lis">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="ck1" />
        <label className="form-check-label" htmlFor="ck1">
          Male Products (1252)
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="ck2" />
        <label className="form-check-label" htmlFor="ck2">
          Female Products (1541)
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="ck3" />
        <label className="form-check-label" htmlFor="ck3">
          Kids Products (1850)
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="ck4" />
        <label className="form-check-label" htmlFor="ck4">
          Foods (2564)
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="ck5" />
        <label className="form-check-label" htmlFor="ck5">
          Books (2550)
        </label>
      </div>
    </div>
  );
};

export default Categories;
