import logo from './logo.svg';
import './App.css';
import loginScreen from './screen/loginScreen';
import './asset/css/login.css'

function App() {
  return (

      <div className="wrapper">
        <div className="container">
          {/* <h1>Welcome</h1> */}
          
          <form className="form">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit" id="login-button">Login</button>
          </form>
        </div>
        
        <ul className="bg-bubbles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
  );
}

export default App;


{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}