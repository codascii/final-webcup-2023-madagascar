import SideBar from "./SideBar";

const BlockMain = ({ children }) => {
  return (
    <div className="common__section">
      <div className="container-fluid">
        <div className="divided__common__body">
          {/* Side Bar */}
          <SideBar />

          {/* main */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default BlockMain;
