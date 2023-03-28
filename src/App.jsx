import './App.css';

const elements = [
  { id: 1, product: 'laptop' },
  { id: 2, product: 'mobile' },
  { id: 3, product: 'tab' },
  { id: 4, product: 'monitor' },
  { id: 5, product: 'mouse' },
  { id: 6, product: 'keyboard' },
];

function App() {
  // jsx code
  return (
    <div className="App">
      {elements.map((element) => (
        <MyComponent element={element}></MyComponent>
        // <MyComponent product={element.product} id={element.id}></MyComponent>
      ))}
    </div>
  );
}

const MyComponent = (props) => {
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

export default App;
