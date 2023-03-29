import { useEffect, useState } from 'react';
import './App.css';

const elements = [
  { id: 1, product: 'laptop' },
  { id: 2, product: 'mobile' },
  { id: 3, product: 'tab' },
  { id: 4, product: 'monitor' },
  { id: 5, product: 'mouse' },
  { id: 6, product: 'keyboard' },
];

const testArr = [1, 4, 5, 6, 5, 8];

function App() {
  // jsx code
  return (
    <div className="App">
      {/* {elements.map((element) => (
        <MyComponent element={element}></MyComponent>
        // <MyComponent product={element.product} id={element.id}></MyComponent>
      ))}
      {testArr.map(() => (
        <Test></Test>
      ))} */}

      {/* state in practice */}
      <PracticeState></PracticeState>
      <PracticeEffect></PracticeEffect>
    </div>
  );
}

/* const MyComponent = (props) => {
  const { id, product } = props.element;
  // const MyComponent = ({ id, product }) => {
  return (
    <div>
      <div style={{ display: 'flex', columnGap: '15px' }}>
        <p>Product ID : {id}</p>
        <p>Product Name: {product}</p>
      </div>
    </div>
  );
};

const Test = () => {
  return (
    <>
      <p>Test</p>
    </>
  );
}; */

// Usage of State

const PracticeState = () => {
  const [count, setCount] = useState(0);
  const change = () => setCount(count + 1);
  return (
    <>
      <p>{count}</p>
      <button onClick={() => change()}>+ + +</button>
      <button onClick={() => setCount(count - 1)}>- - -</button>
    </>
  );
};

// Usage of useEffect

const PracticeEffect = () => {
  // const [users, setUsers] = useState(' '); // this will cause problem because of empty string
  const [users, setUsers] = useState([]);
  console.log(users);
  useEffect(() => {
    const startFetching = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const data = await res.json();
      setUsers(data);
    };
    startFetching();
  }, []);
  return (
    <div>
      <p>{users.length}</p>
      {users.map((user) => (
        <User user={user}></User>
      ))}
    </div>
  );
};

const User = ({ user }) => {
  return (
    <div>
      <h5>Name: {user.name}</h5>
    </div>
  );
};

export default App;
