import "./styles.css";

const Saram = (props) => {
  return <h3>{props.name}</h3>;
};

const names = ["홍길동", "김길동", "이길동"];

export default function App() {
  return (
    <div className="App">
      <h1>사람 목록</h1>
      <h2>사람 정보 관리 프로그램</h2>
      {names.map((name) => {
        return <Saram name={name} />;
      })}
    </div>
  );
}
