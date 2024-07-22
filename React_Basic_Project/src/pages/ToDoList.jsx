import { useState } from 'react';

function ToDoList () {
  // Estado para el valor del input
  const [inputValue, setInputValue] = useState('');
  // Estado para el array de elementos
  const [items, setItems] = useState([]);
  // Función que se ejecuta al cambiar el valor del input
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Función que se ejecuta al hacer clic en el botón
  const handleAddItem = () => {
    // Añade el valor del input al array de elementos si no está vacío
    //*trinm() limpia los espacios en Blanco
    if(inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      // Limpia el input después de añadir el valor
      setInputValue('');
    }else{
      
      alert("Ingrese un valor")
    }
  };

   // Función que se ejecuta al hacer clic en el botón de limpiar
   const handleClearItems = () => {
    setItems([]);
  };

  return (
    <div className="text-white w-screen h-auto gap-2 flex-wrap flex justify-center items-center flex-col mt-8">
      <h1 className="text-[40px] font-sans font-bold">To Do List</h1>
      <div className="w-[80%] min-h-[500px]  flex content-center  items-start p-10 bg-orange-100 rounded-lg flex-col">
        <div className="flex w-full justify-center">
          <input 
            type="text" 
            value={inputValue} 
            onChange={handleInputChange} 
            placeholder="Enter an item" 
            className="p-2 w-1/2 rounded-2xl outline-none hover:outline-blue-400 text-black pl-5"
          />
          <button 
            onClick={handleAddItem} 
            className="text-black border bg-gray-400 w-[8%] ml-6 rounded-xl hover:bg-slate-300"
          >
            Add
          </button>
          <button 
            onClick={handleClearItems} 
            className="text-black border bg-red-400 w-[8%] ml-6 rounded-xl hover:bg-red-300"
          >
            Clear
          </button>
        </div>
        <div className='text-black w-full mt-5 justify-center '>
          <ul className='w-full justify-center flex-col'>
            {items.map((item, index) => {
              return(
              <li key={index} className="text-black w-auto flex justify-start  m-2 p-1 rounded-2xl">
                <span className='h-full w-[5%] bg-slate-400 justify-center flex items-center rounded-l-2xl p-2'>{index+1}.-</span>
                <span className='w-11/12 pl-2 pr-2 bg-white content-center rounded-r-2xl'>{item}</span>
              </li> 
            )})}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
