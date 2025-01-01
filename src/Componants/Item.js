import './Item.css';
function Item(props) {
    const itemName = props.itemName;
    return <p className="nirma">{itemName}</p>;
}

export default Item;