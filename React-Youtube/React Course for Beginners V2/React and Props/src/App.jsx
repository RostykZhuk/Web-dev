function Greeting(props) {
  const { name, num, arr, obj, ...rest } = props;
  console.log(rest);
  return (
    <div>
      <h1 style={obj}>Hello : {name}</h1>
      <h1>{num}</h1>
      <h1>{arr}</h1>
    </div>
  );
}
const say = 'hello';
const num = 42;
const arr = [1, 2, 3, 4, 5];
function App() {
  return (
    <Greeting
      name={`Everyone ${say}`}
      num={num}
      arr={arr}
      obj={{ border: 'solid red' }}
      aria-hidden={true}
      id='some-id'
    />
  );
}

export default App;
