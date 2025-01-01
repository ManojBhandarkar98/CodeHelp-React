import logo from './logo.svg';
import './App.css';
import Item from './Componants/Item';
import ItemDate from './Componants/ItemDate';

function App() {
  const itemTwoName = "SurfExcel"
  return (
  <div>
    <Item itemName="Nirma"></Item>
    <ItemDate day='20' month='June' year='1992'></ItemDate>
    <Item itemName={itemTwoName}></Item>    
    <ItemDate day='22' month='August' year='1989'></ItemDate>
    <Item itemName="555"></Item>
    <ItemDate day='20' month='July' year='1984'></ItemDate>
    <div className="App">Hellow Jee React</div>
    </div>
  );
}

export default App;
