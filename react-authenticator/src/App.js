import logo from './logo.svg';
import './App.css';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <nav className="navbar bg-dark">
          <div className="container-fluid">
            <span className="appName">React User Authentication</span>
          </div>
        </nav>
        <LoginButton />
        <LogoutButton />
      </header>
    </div>
  );
}

export default App;
