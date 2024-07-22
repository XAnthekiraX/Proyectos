import { useState } from "react";

const productos = [
  { nombre: "Manzana", precio: 1.5 },
  { nombre: "Banana", precio: 0.75 },
  { nombre: "Naranja", precio: 1.25 },
  { nombre: "Pera", precio: 1.8 },
  { nombre: "Melón", precio: 3.0 },
  { nombre: "Sandía", precio: 4.5 },
  { nombre: "Fresas", precio: 2.5 },
  { nombre: "Uvas", precio: 3.2 },
  { nombre: "Piña", precio: 2.8 },
  { nombre: "Mango", precio: 1.75 },
];

function ListaEditable() {
  // Estado para el valor del input
  const [inputValue, setInputValue] = useState("");
  // Estado para el array de elementos
  const [items, setItems] = useState([]);
  // Estado para los resultados del autocompletado
  const [suggestions, setSuggestions] = useState([]);

  // Función que se ejecuta al cambiar el valor del input
  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    if (value.trim() !== "") {
      const filteredSuggestions = productos.filter((producto) =>
        producto.nombre.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  // Función que se ejecuta al seleccionar una sugerencia
  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion.nombre);
    setSuggestions([]);
  };

  // Función que se ejecuta al hacer clic en el botón
  const handleAddItem = () => {
    // Añade el valor del input al array de elementos si no está vacío
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      // Limpia el input después de añadir el valor
      setInputValue("");
      setSuggestions([]);
    } else {
      alert("Ingrese un valor");
    }
  };

  // Función que se ejecuta al hacer clic en el botón de limpiar
  const handleClearItems = () => {
    setItems([]);
  };

  return (
    <div className="text-white w-screen h-auto gap-2 flex-wrap flex justify-center items-center flex-col mt-8">
      <h1 className="text-[40px] font-sans font-bold">Lista de Productos</h1>
      <div className="w-[80%] min-h-[500px] flex content-center items-center p-10 bg-orange-100 rounded-lg flex-col">
        <div className="flex flex-col w-full justify-center relative border border-red-300">
          <div className="flex w-full border justify-center items-center ">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Buscar productos..."
              className="p-2 w-1/2 rounded-2xl outline-none hover:outline-blue-400 text-black pl-5"
            />
            <button
              onClick={handleAddItem}
              className="text-black border bg-gray-400 w-[8%] ml-6 rounded-xl hover:bg-slate-300"
            >
              Add
            </button>
          </div>
          <div className="text-black w-1/2 mt-5 flex flex-col justify-center items-start border absolute">
            <ul>
              {suggestions.map((suggestion, index) => (
                <li
                  className="m-1 p-2 w-full rounded-2xl bg-gray-100 outline-none hover:outline-blue-400 hover:bg-white text-black pl-5"
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  <span>{suggestion.nombre + " " + suggestion.precio}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full mt-5">
          <ul className="list-disc pl-5">
            {items.map((item, index) => (
              <li key={index} className="text-black">
                {item}
              </li>
            ))}
          </ul>
          <button
            onClick={handleClearItems}
            className="text-black border bg-red-400 w-[8%] mt-4 rounded-xl hover:bg-red-300"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListaEditable;
