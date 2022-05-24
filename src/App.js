import "./styles.css";

const Saram = (props) => {
  return <h3>{props.name}</h3>;
};

const names = ["홍길동", "김길동", "이길동"];

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {names.map((name) => {
        return <Saram name={name} />;
      })}
    </div>
  );
}
