import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import "./App.css";
import ToDoList from "./pages/ToDoList";
import Contador from "./pages/Contador";
import Galeria from "./pages/Galeria"
import ListaEditable from "./pages/ListaEditable"
function App() {
  return (
    <div className="bg-gray-400 w-screen min-h-[100vh] h-auto flex flex-col  items-center">
      <nav className="w-full fixed flex  justify-center items-center">
        <Navigation />
      </nav>

      <Routes>
        <Route path="/ToDoList" element={<ToDoList />} />
        <Route path="/Contador" element={<Contador />} />
        <Route path="/Galeria" element={<Galeria />} />
        <Route path="/ListaEditable" element={<ListaEditable />} />
      </Routes>
    </div>
  );
}

export default App;
