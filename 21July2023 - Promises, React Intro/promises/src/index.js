import axios from 'axios';

axios.get("https://fakestoreapi.com/products").then(
    function (response) {
        console.log("response", response.data);
    },
    function (error) {
        console.log("Error", error);
    }
)

/*
 1. npx create-react-app promises 

 2. cd promises

 3. npm i axios 

 4. go to src and remove everything in src. 

 5. create index.js.

 6. follow the code shared to you.

*/