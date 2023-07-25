import logo from './logo.svg';
import './App.css';
import User from './User';

function App() {

  const userDataCapture = (data) => {
    console.log("final date", data);
  }

  return (
    <div className="App">

      <User userData={
        function (input) {
          console.log("input", input);
        }
      }></User>

    </div>
  );
}

export default App;
