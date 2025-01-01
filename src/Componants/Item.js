import './Item.css';
function Item(props) {
    const itemName = props.itemName;
    return <p className="item">{itemName}</p>;
}

export default Item;