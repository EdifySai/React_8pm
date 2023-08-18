
import { useState } from 'react';
function SearchBar(props) {
    const [searchItem, setSearchItem] = useState('');

    const updateState = (event) => {
        setSearchItem(event.target.value);
    }
    const search = (event) => {
        event.preventDefault();
        console.log("searchItem", searchItem);
        props.onSearch(searchItem);

    }
    return (
        <div>
            <form>
                <input style={{ height: '40px', width: "400px", fontSize:"40px" }} onChange={updateState} type="text" placeholder="enter search term"></input>
                <button style={{ height: '47px', width: '100px', backgroundColor: "red", color: 'white', fontSize: "20px" }} onClick={search}>Search</button>

            </form>
        </div >
    )

}
export default SearchBar;