import Heroes from './components/Heroes/Heroes';
import Villanos from './components/Villanos/Villanos';
import Detail from './components/Details/Detail';
import { NavBar } from './components/Nav/NavBar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { AddForm } from './components/AddForm/AddForm';
import { ContextProvider } from './context/Super/SuperContext';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <ContextProvider>
          <Routes>
            <Route path="/" element={<Heroes />}></Route>
            <Route exact path="/heroes" element={<Heroes />}></Route>
            <Route path="/villanos" element={<Villanos />}></Route>
            <Route path="/info" element={<Detail />}></Route>
            <Route path="/addform" element={<AddForm />}></Route>
          </Routes>
        </ContextProvider>
      </Router>
    </>
  );
}

export default App;
