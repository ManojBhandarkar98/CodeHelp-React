import logo from './logo.svg';
import './App.css';
import Item from './Componants/Item';
import ItemDate from './Componants/ItemDate';

function App() {
  return (
  <div>
    <Item itemName="Nirma"></Item>
    <ItemDate day='20' month='June' year='1992'></ItemDate>
    <div className="App">Hellow Jee React</div>
    </div>
  );
}

export default App;
