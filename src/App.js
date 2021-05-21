import './App.css';
import Employee from './Employee';
import TodoList from './TodoList';

const employeeInfo = [
  {
    firstName: "Jack",
    lastName: "Smith",
    age: "20",
    employeeId: "1"
  },
  {
    firstName: "Ann",
    lastName: "Mary",
    age: "19",
    employeeId: "2"
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* { employeeInfo.map((employee)=> {
          return (
            <Employee key={employee.employeeId} {...employee} />
          );
        })} */}
        <TodoList />
      </header>
    </div>
  );
}

export default App;
