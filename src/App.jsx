import "./App.css";

function TopLeftRight() {
  return <div className="top-left-right"></div>;
}

function TopCenter() {
  return <div className="top-center">
    <TopCenterContents name="Glenn"/>
    <TopCenterContents name="Peña"/>
  </div>;
}

function TopCenterContents(props) {
  return <div className="top-center-contents">{props.name}</div>;
}

function TopRow() {
  return <div className="top-row">
    <TopLeftRight />
    <TopCenter />
    <TopLeftRight />
  </div>;
}

function BottomRow() {
  return <div className="bottom-row">
    <BottomLeftRight />
    <BottomCenter text="C-PCIT9"/>
    <BottomCenter text="IT3A"/>
    <BottomLeftRight />
  </div>;
}

function BottomLeftRight() {
  return <div className="bottom-left-right"></div>;
}

function BottomCenter(props) {
  return <div className="bottom-center">{props.text}</div>;
}

function App() {
  return (
    <div className="main-container">
      <TopRow />
      <div className="middle-row">
        <div className="middle-left"></div>
        <div className="middle-right">
          <div className="middle-right-box-up"></div>
          <div className="middle-right-box-down"></div>
        </div>
      </div>
      <BottomRow />
      </div>
  );
}

export default App;
