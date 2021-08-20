import logo from './logo.svg';
import './App.css';
import UserList from './userList.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4> React Api</h4>
      </header>

      <UserList />
    </div>
  );
}

export default App;
