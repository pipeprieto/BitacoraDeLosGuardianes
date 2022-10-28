import Heroes from './components/Heroes/Heroes';
import Villanos from './components/Villanos/Villanos';
import { NavBar } from './components/Nav/NavBar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Heroes />}></Route>
          <Route exact path="/heroes" element={<Heroes />}></Route>
          <Route path='/villanos' element={<Villanos/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
