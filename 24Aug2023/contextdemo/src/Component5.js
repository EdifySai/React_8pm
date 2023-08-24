import { useContext } from "react";
import { Context } from "./App";



function Component5() {

    var value = useContext(Context);

    return (
        <div>
            <h1>Component 5</h1>

            <h1>Name is {value}</h1>

        </div>
    )
}
export default Component5;