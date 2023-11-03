import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
//import {useNavigate} from 'react-router-dom'
import './App.css';

import Navbar     from './Components/Navbar';
import Login      from './Pages/Login';
import HomePage   from './Pages/HomePage';
import CreatePost from './Pages/CreatePost';
import Group      from './Pages/Group';
import Event      from './Pages/Event';
import Save       from './Pages/Save';
import Setting    from './Pages/Setting';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact    element={< Login />}/>
          <Route path='/homepage'  element={< HomePage />}/>
          <Route path='/create'    element={< CreatePost />}/>
          <Route path='/group'     element={< Group />}/>
          <Route path='/event'     element={< Event />}/>
          <Route path='/save'      element={< Save />}/>
          <Route path='/setting'   element={< Setting />}/>
          <Route path='*'   element={< Navigate to="/" />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;