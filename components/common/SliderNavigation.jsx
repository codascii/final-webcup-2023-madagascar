const SliderNavigation = ({ sliderRef }) => {
  return (
    <div className="owl-nav d-flex align-items-center gap-2">
      <button
        type="button"
        className="owl-prev d-flex align-items-center justify-content-center"
        onClick={() => sliderRef.current.slickPrev()}
      >
        <i className="material-symbols-outlined">chevron_left</i>
      </button>
      <button
        type="button"
        className="owl-next d-flex align-items-center justify-content-center"
        onClick={() => sliderRef.current.slickNext()}
      >
        <i className="material-symbols-outlined">chevron_right</i>
      </button>
    </div>
  );
};

export default SliderNavigation;
