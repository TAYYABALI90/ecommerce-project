import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import BlogDetails from './Components/BlogDetails';
import CreateBlog from './Components/CreateBlog';

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route exact path='/' element={<Home></Home>}></Route>
          <Route path='/blogs/:id' element={<BlogDetails></BlogDetails>}></Route>
          <Route path='/create' element={<CreateBlog></CreateBlog>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

// import logo from './logo.svg';
// <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <p>
// Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
// className="App-link"
// href="https://reactjs.org"
// target="_blank"
// rel="noopener noreferrer"
// >
// Learn React
// </a>
// </header>