import axios from 'axios';
import { useState } from 'react';
function Product() {
    const [products, setProducts] = useState([]);
    const fetchProducts = () => {
        axios.get("https://fakestoreapi.com/products").then(
            response => {
                console.log("response", response.data);
                setProducts(response.data);
            },
            error => {
                console.log("error", error);
            }
        )
    }

    const renderProducts = () => {

        var list = products.map(product => {
            return <li key={product.title}>{product.title} <img style={{
                width: '64px', height: '64px'
            }} src={product.image}></img></li>
        });

        return list;
    }
    if (products.length == 0) {
        return (
            <div>
                <button onClick={fetchProducts}>Fetch Products</button>
            </div>
        )
    }
    else {
        return (
            <div>
                <h1>Products List</h1>

                <ul style={{ listStyleType: 'none' }}>
                    {renderProducts()}
                </ul>
            </div>
        )
    }
}
export default Product;