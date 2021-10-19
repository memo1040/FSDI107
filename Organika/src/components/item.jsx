import "./item.css";
import QuantityPicker from "./quantityPicker";

const Item = (props) => {

    const handleAdd = () => {
        console.log("Adding item to cart");
    };

    return(
        <div className="item">
            <img src={"/images/" + props.data.image} alt="product" />

            <h5>{props.data.title || "no title"}</h5>

            <label className="total">$ {props.data.price.toFixed(2)}</label>
            <label className="price">$ {props.data.price.toFixed(2)}</label>

            <div className="controls">
                <QuantityPicker minimum={props.data.minimum || 1} />
                <button onClick={handleAdd} className="btn btn-sm btn-dark">Add</button>               
            </div>
        </div>
    );
};

export default Item;