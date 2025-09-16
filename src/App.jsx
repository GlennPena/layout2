import "./App.css";

function App() {
  return (
    <div className="main-container">
      <div className="top-row">
        <div className="top-left"></div>
        <div className="top-center">
          <div className="top-center-box"></div>
          <div className="top-center-box"></div>
        </div>
        <div className="top-right"></div>
      </div>
      <div className="middle-row">
        <div className="middle-left"></div>
        <div className="middle-right">
          <div className="middle-right-box-up"></div>
          <div className="middle-right-box-down"></div>
        </div>
      </div>
      <div className="bottom-row">
        <div className="bottom-left"></div>
        <div className="bottom-center">
          <div className="bottom-center-box"></div>
          <div className="bottom-center-box"></div>
        </div>
        <div className="bottom-right"></div>
      </div>
    </div>
  );
}

export default App;
