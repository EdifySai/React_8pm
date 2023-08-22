import logo from './logo.svg';
import './App.css';
import React, { Suspense } from 'react';

// import Comp1 from './Comp1';
const Comp1 = React.lazy(() => import('./Comp1'));
const Comp2 = React.lazy(() => import('./Comp2'));
const Comp3 = React.lazy(() => import('./Comp3'));

// import Comp2 from './Comp2';
// import Comp3 from './Comp3';

var isLogin = true;

function App() {
  if (isLogin) {
    return (
      <div>

        <Suspense fallback={<div>Loading.....</div>}>
          <Comp1></Comp1>
          <Comp2></Comp2>
          <Comp3></Comp3>
        </Suspense>

      </div>
    )
  }
  else {
    return (
      <div>
        <h1>App Component loaded!</h1>
      </div>

    )
  }
}
export default App;
