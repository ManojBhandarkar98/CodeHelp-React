
import './App.css';
import Item from './Componants/Item';
import ItemDate from './Componants/ItemDate';

function App() {
  
  const response = [
    {
      itemName: "Nirma",
      itemDate:"20",
      itemMonth:"June",
      itemYear:"1998"
    },
    {
      itemName: "SurfExcel",
      itemDate:"10",
      itemMonth:"August",
      itemYear:"1908"
    },{
      itemName: "555",
      itemDate:"29",
      itemMonth:"April",
      itemYear:"1989"
    }
  ]
  return (
  <div>
    <Item itemName={response[0].itemName}>
      Hello jee mai hu apki first child item
    </Item>
    <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>
    <Item itemName={response[1].itemName}></Item>
    <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>
    <Item itemName={response[2].itemName}></Item>
    <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>
   
    <div className="App">Hellow Jee React</div>
    </div>
  );
}

export default App;
