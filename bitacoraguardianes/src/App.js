import Heroes from './components/Heroes/Heroes';
import Villanos from './components/Villanos/Villanos';
import {Detail} from './components/Details/Detail';
import { NavBar } from './components/Nav/NavBar';
import {BrowserRouter as Router,Routes,Route,redirect} from 'react-router-dom';
import { AddForm } from './components/AddForm/AddForm';
import { ContextProvider } from './context/Super/SuperContext';
import { useContext } from "react";
import { SuperContext } from "./context/Super/SuperContext";

function App() {
  const { deleteHero, deleteVillain } =
    useContext(SuperContext);
  return (
    <>
      <Router>
        <NavBar />
        <ContextProvider>
          <Routes>
            <Route path="/" element={<Heroes />}></Route>
            <Route exact path="/heroes" element={<Heroes />}></Route>
            <Route exact path="/villanos" element={<Villanos />}></Route>
            <Route exact path="/info" element={<Detail />}></Route>
            <Route exact path="/addform" element={<AddForm />}></Route>
            <Route exact path="/update/hero/:id" element={<AddForm />}></Route>
            <Route
              exact
              path="/update/villain/:id"
              element={<AddForm />}
            ></Route>
            <Route
              exact
              path="/delete/hero/:id"
              action={redirect("http://localhost:3000/heroes")}
            ></Route>
            <Route
              exact
              path="/delete/villain/:id"
              action={redirect("http://localhost:3000/villanos")}
            ></Route>
          </Routes>
        </ContextProvider>
      </Router>
    </>
  );
}

export default App;
