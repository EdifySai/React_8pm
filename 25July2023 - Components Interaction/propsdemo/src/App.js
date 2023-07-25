import logo from './logo.svg';
import './App.css';
import Employee from './Employee';

function App() {
  var employee = {
    name: "kiran",
    address: "hyderabad",
    age: 21
  }
  return (
    <div className="App">
      <h1>App Component</h1>
      <Employee employeeData={employee}></Employee>
    </div>
  );
}

export default App;
