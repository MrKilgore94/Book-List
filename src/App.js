import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';
import Books from "./pages/Books"

function App() {
  return (
    <div id="app">
      <h1>Book List</h1>
      <nav
        style={{
          border:'3px solid crimson'
        }}
        >
          <Link to='/Books'>Books</Link> - {' '}
          <Link to='/about'>About</Link> - {' '}
          <Link to='/NewBook'>New Book</Link>
        </nav>
        <Outlet />
    </div>
  );
}


export default App;