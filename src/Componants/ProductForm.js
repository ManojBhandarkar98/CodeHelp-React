import { useState } from "react";
import "./ProductForm.css"
function ProductForm(props) {

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    function titleChangeHandler(event) {
        setTitle(event.target.value)
    }
    function dateChangeHandler(event) {
        setDate(event.target.value);
    }

    function submitHandler(event){
        event.preventDefault();
        
        const productData = {
            title:title,
            date:date
        }

        props.onSaveProduct(productData);
        setTitle('');
        setDate('');
    }
    return (<form onSubmit={submitHandler}>
        <div className="new-product_controls">
            <div className="new-product_control">
                <label>Title</label>
                <input type="text" value={title} onChange={titleChangeHandler}></input>
            </div>
            <div className="new-product_control">
                <label>Date</label>
                <input type="date" value={date} onChange={dateChangeHandler} min='2025-01-01' max='2025-12-12'></input>
            </div>
            <div className="new-product_button">
                <button type="submit">Add Product</button>
            </div>
        </div>
    </form>
    );
}
export default ProductForm;