import "./style.css";

const Loader = () => {
  return (
    <div className="load">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
